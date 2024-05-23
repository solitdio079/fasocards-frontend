import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { FaCheck } from "react-icons/fa6"


export async function loader({ params }) {
    try {
         const response = await fetch(
           `https://api.fasocard.com/business/getQRcode/${params.name}`,
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
        
        const qrcode = await response.blob()
        const url = URL.createObjectURL(qrcode)
        return {url, name:params.name }
        
    } catch (error) { 
        throw new Error(error.message)
    }
   
}

export default function GetQRCode() {
    const { url, name } = useLoaderData()
    const [copied, setCopied] =useState(false)
    //console.log(qrcode);
    return (
      <>
        <div className="w-3/4 mx-auto flex-col my-5">
          <p className="text-2xl font-bold text-center">Votre code QR est: </p>
          <div className="avatar mx-auto w-full">
            <div className="w-32 rounded mx-auto">
              <img src={url} />
            </div>
          </div>
          <div className="flex-row mx-auto justify-between w-1/3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={`http://localhost:5173/business/${name}`}
              readOnly
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `http://localhost:5173/business/${name}`
                )
                setCopied(true)
                
              }}
                        className={copied ? "btn btn-disabled": "btn btn-primary"}
                        
            >
             {copied ? <FaCheck/>:"Copier"}
            </button>
          </div>
        </div>
      </>
    )
}