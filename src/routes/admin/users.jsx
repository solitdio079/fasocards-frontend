import { useLoaderData } from 'react-router-dom'
import UserCard from '../../components/user-card'


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