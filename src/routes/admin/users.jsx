import { useLoaderData } from 'react-router-dom'
import UserCard from '../../components/user-card'


export async function action({ request }) {
    console.log("Inside action");
    const fetcherBody = await request.formData()
    const fetcherObj = Object.fromEntries(fetcherBody)

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
    console.log(users)
    return (
      <div className="flex flex-col flex-wrap lg:flex-row">
        {users.map(user => <UserCard key={user._id} user={user} />)}
      </div>
    )
}