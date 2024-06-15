import { useLoaderData, Form, useFetcher } from 'react-router-dom'
//import UserCard from '../../components/user-card'


export async function action({ request }) {
    const fetcherBody = await request.formData()
    const fetcherObj = new Object.fromEntries(fetcherBody)

    const url = `https://api.fasocard.com/admin/users/patch/${fetcherObj.id}`
    try {
        const response = await fetch(url, {
          method:"PATCH",
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Access-Control-Allow-Origin': 'https://api.fasocard.com',
            'Access-Control-Allow-Credentials': 'true',
            },
          body: JSON.stringify(fetcherObj)
        })

        const updated = await response.json()
        console.log(updated)
        return updated
        
    } catch (error) {
        console.log(error.message);
        return error.message
    }


   
}

export async function loader() {
    try {
         const response = await fetch('https://api.fasocard.com/admin/users', {
           method: 'GET',
           mode: 'cors',
           credentials: 'include',
           headers: {
             'Access-Control-Allow-Origin': 'https://api.fasocard.com',
             'Access-Control-Allow-Credentials': 'true',
             'Content-Type': 'application/json',
           },
         })
        const users = await response.json()
        //console.log(users)
        return users.data
        
    } catch (error) {
        console.log(error.message)
        return error.message
    }
   
    
}

export default function Users() {
    const users = useLoaderData()
    const fetcher = useFetcher()
    console.log(users)
    return (
      <div className="flex flex-col flex-wrap lg:flex-row">
        {users.map((user) => (
          <div key={user._id} className="card w-96 bg-base-100 shadow-xl m-2">
            <div className="card-body">
              <h2 className="card-title"> {user.email} </h2>
              <p className="badge badge-primary">
                {' '}
                {user.admin ? 'Admin' : 'Client'}{' '}
              </p>
              <div className="card-actions justify-end">
                <fetcher.Form method="post">
                  <input type="hidden" name="id" value={user._id} />
                  <input
                    name="isAllowed"
                    type="checkbox"
                    defaultChecked={user.isAllowed}
                    className="checkbox checkbox-md checkbox-info"
                  />
                </fetcher.Form>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}