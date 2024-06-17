import { useLoaderData, useNavigation } from "react-router-dom"
import ListCard from "../../components/list-card"


export async function loader() {
    try {
         const response = await fetch(
           'https://api.fasocard.com/admin/business/list',
           {
             method: 'GET',
             mode: 'cors',
             credentials: 'include',
             headers: {
               'Access-Control-Allow-Origin': 'https://api.fasocard.com',
               'Access-Control-Allow-Credentials': 'true',
             },
           }
         )

         const allBusinesses = await response.json()
         console.log(allBusinesses)
         return allBusinesses.data
        
    } catch (error) {
        console.log(error.message)
        return []
        
    }
   
    
}



export default function BusinessList() {
    const allBusiness = useLoaderData()
    const navigation = useNavigation()
    return (
      <>
        {' '}
        {navigation.state !== 'idle' ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : allBusiness.length === 0 ? (
          'Pas de Business'
        ) : (
          allBusiness.map((item) => <ListCard key={item._id} data={item} />)
        )}
      </>
    )
}