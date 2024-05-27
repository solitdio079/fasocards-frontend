import { redirect } from "react-router-dom"
export async function action({ params, request }) {

    try {
        let backUrl = await request.formData()
        backUrl = backUrl.get("backUrl")
         const response =  await fetch(
           `https://api.fasocard.com/business/delete/${params.id}`,
           {
             method: 'DELETE',
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
        const message = await response.json()
        console.log(message)
        if(message.successMessage) return redirect(backUrl)
        return redirect('/')
    } catch (error) {
       throw new Error(error.message)
        
    }
   
}