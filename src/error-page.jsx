import { useRouteError, useNavigate } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
export default function ErrorPage() {
    const error = useRouteError()
     const navigate = useNavigate()
  console.error(error)

    return (
     
    <div className="text-center text-lg">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
          <p>
              <FaX className="text-red-500 mx-auto text-2xl"/>
        <i className="text-red-500">{error.statusText || error.message}</i>
            </p>
            <button className="btn btn-primary" onClick={()=>navigate(-1)}>Retour</button>
    </div>
  )
}
