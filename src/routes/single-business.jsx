import { useLoaderData, Link } from 'react-router-dom'
import {
  FaLink,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'
//import hero2 from '../assets/hero2.jpeg'


export async function loader({ params }) {
    try {
         const response = await fetch(
           `https://api.fasocard.com/business/${params.name}`,
           {
             method: 'GET',
             mode: 'cors',
             credentials: 'include',
             headers: {
               'Access-Control-Allow-Origin': 'https://api.fasocard.com',
               'Access-Control-Allow-Credentials': 'true',
               'Content-Type': 'application/json',
               Accept: 'application/json',
             },
           }
         )
         const business = await response.json()
         return business.data
        
    } catch (error) {
        throw new Error(error.message)
    }
   
    
}

export default function SingleBusiness() {
    const business = useLoaderData()
    
   
    
    return (
      <>
        {business.name ? (
          <div className="lg:flex-col flex-row items-center w-full p-10">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={`https://api.fasocard.com/uploads/businesses/${business.profilePhoto}`} />
              </div>
            </div>
            <div className="text-start">
              <h1 className=" text-2xl font-bold">
                {' '}
                {business.name}{' '}
                <div className="badge badge-primary">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto: ${business.email}`}
                  >
                    {' '}
                    {business.email}{' '}
                  </a>
                </div>{' '}
              </h1>
              <p className="text-sm"> {business.description} </p>
            </div>
            <div className="flex-row items-start">
              <button
                className="btn m-2"
                disabled={Boolean(business.website) === false}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={business.website || '#'}
                >
                  <FaLink className="text-3xl text-primary" />
                </a>
              </button>
              <button
                className="btn m-2"
                disabled={Boolean(business.facebookLink) === false}
              >
                <a
                  href={business.facebookLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl text-blue-700" />
                </a>
              </button>
              <button
                className="btn m-2"
                disabled={Boolean(business.twitterLink) === false}
              >
                <a
                  href={business.twitterLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-3xl text-blue-500" />
                </a>
              </button>
              <button
                className="btn m-2"
                disabled={Boolean(business.tiktokLink) === false}
              >
                <a
                  href={business.tiktokLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-3xl text-red-500" />
                </a>
              </button>
              <button
                className="btn m-2"
                disabled={Boolean(business.instagramLink) === false}
              >
                <a
                  href={business.instagramLink || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </button>
              <button
                className="btn m-2"
                disabled={Boolean(business.linkedinLink) === false}
              >
                <a
                  href={business.linkedinLink || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-3xl text-blue-600" />
                </a>
              </button>
            </div>
            <Link to={`/qrcode/${business.name}`} className="btn btn-primary">
              Get QR Code
            </Link>
          </div>
        ) : (
          <button
            className="btn btn-primary mx-auto"
            onClick={(window.location = 'https://fasocard.com/')}
          >
            Go Home
          </button>
        )}
      </>
    )
}