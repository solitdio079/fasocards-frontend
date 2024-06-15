import { Form, useLoaderData } from 'react-router-dom'


export async function loader() {
    try {
         const response = await fetch('https://api.fasocard.com/admin/users', {
           method: 'POST',
           mode: 'cors',
           credentials: 'include',
           headers: {
             'Access-Control-Allow-Origin': 'https://api.fasocard.com',
             'Access-Control-Allow-Credentials': 'true',
             'Content-Type': 'application/json',
           },
         })
        const users = await response.json()
        console.log(users)
        return users
        
    } catch (error) {
        console.log(error.message)
        return error.message
    }
   
    
}

export default function Users() {
    const users = useLoaderData()
    console.log(users)
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Form method="post">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-md checkbox-info"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}