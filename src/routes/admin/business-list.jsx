import { useLoaderData, useNavigation,Form } from "react-router-dom"
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
      <> <div className="flex flex-col lg:flex-row">
        <Form
          action="/admin/business/filter"
          role="search"
          className="flex flex-col lg:flex-row"
        >
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" name="q" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="btn btn-primary btn-md mx-2">
            {' '}
            {navigation.state === 'idle' ? (
              'Submit'
            ) : (
              <span className="loading loading-infinity loading-sm"></span>
            )}{' '}
          </button>
        </Form>{' '}
        {navigation.state !== 'idle' ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : allBusiness.length === 0 ? (
          'Pas de Business'
        ) : (
          allBusiness.map((item) => <ListCard key={item._id} data={item} />)
            )}
            </div>
      </>
    )
}