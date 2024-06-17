import { useNavigation, useLoaderData } from "react-router-dom"
import ListCard from "../../components/list-card"


export async function loader({ request }) {
    const url = new URL(request.url)
    const q = url.searchParams.get('q')
    try {
      const response = await fetch(
        `https://api.fasocard.com/admin/business/filter/${q}`,
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
      const business = await response.json()
      console.log(business)
      if (business.data) return business.data
      return []
    } catch (error) {
      console.log(error.message)
      return []
    }
}

export default function BusinessFilter() {
    const navigation = useNavigation()
    const data = useLoaderData()
    return (
      <>
        {navigation.state !== 'idle' ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : data.length ? (
          'Pas de business'
        ) : (
          data.map((item) => <ListCard key={item._id} data={item} />)
        )}
      </>
    )
    
}