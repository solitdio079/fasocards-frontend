import { useLoaderData, useNavigation, useNavigate } from "react-router-dom"
import UserCard from "../../components/user-card"

export async function loader({ request }) {
    const url = new URL(request.url)
    const q = url.searchParams.get("q")
    try {
        const response = await fetch(
          `https://api.fasocard.com/admin/users/filter/${q}`,
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
        const users = await response.text()
        console.log(users);
        //if (users.data) return users.data
        return [] 
        
    } catch (error) {
        console.log(error.message);
        return []
    }
   
    
}
export async function action({ request }) {
  console.log('Inside action')
  const fetcherBody = await request.formData()
  const fetcherObj = Object.fromEntries(fetcherBody)

  const url = `https://api.fasocard.com/admin/users/patch/${fetcherObj.id}`
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': 'https://api.fasocard.com',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(fetcherObj),
    })

    const updated = await response.json()
    console.log(updated)
    return updated
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

export default function UserFilter() {
    const data = useLoaderData()
    const navigation = useNavigation()
    const navigate = useNavigate()
    return (
      <>
        {navigation.state !== 'idle' ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : data.length === 0 ? (
          "Pas d'utilisateurs!"
        ) : (
          <>
            {' '}
            <div className="flex flex-col flex-wrap lg:flex-row">
              {data.map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
                            </div>
                            <button className="btn btn-primary" onClick={()=> {navigate(-1)}}>Retour</button>
          </>
        )}
      </>
    )
}