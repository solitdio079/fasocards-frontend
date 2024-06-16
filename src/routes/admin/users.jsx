import { useLoaderData, Form } from 'react-router-dom'
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
    <>
      <div className="flex flex-col lg:flex-row">
        <Form method='post' action="/users/filter" className="flex flex-col lg:flex-row">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />

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
          <button className="btn btn-primary btn-md mx-2">Submit</button>
        </Form>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </>
  )
}