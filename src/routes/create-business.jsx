import { Form, useOutletContext, useNavigation, redirect } from "react-router-dom"
import { FaLink, FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa6"


export async function action({ request }) {
    const body = await request.formData()
  
    //const bodyObject = Object.fromEntries(body)
  
    try {
        const response = await fetch('http://localhost:3000/business/', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Access-Control-Allow-Origin': 'https://api.fasocard.com',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
          },
          body: body,
        })
        const newBusiness = await response.json()
        console.log(newBusiness);
        if (!newBusiness.name) throw new Error(newBusiness[0].msg)
        return redirect(`/business/${newBusiness.name}`)
    } catch (error) {
        throw new Error(error)
    }

    
}

export default  function CreateBusiness() {
    const [user] = useOutletContext()
    console.log(user);
    const navigation = useNavigation()
    return (
      <Form method="post" encType="multipart/form-data" className="m-5 p-5 flex flex-col justify-between ">
        <p className="text-center my-3 text-bold text-3xl">
          Enregistrer votre Business
        </p>
        <label className="input input-bordered flex items-center gap-2 m-3">
          Nom
          <input
            name="name"
            type="text"
            className="grow"
            placeholder="Daisy"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-3">
          Email
          <input
            name="email"
            type="text"
            className="grow"
            placeholder="daisy@site.com"
            required
          />
        </label>
        <label className="textarea textarea-bordered textarea-lg flex items-center gap-2 m-3">
          Description
          <textarea
            name="description"
            className="grow"
            placeholder="Une description de votre entreprise"
            required
          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Photo</span>
            <span className="label-text-alt">Logo du Business</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            name="profilePhoto"
            required
          />
        </label>

        <label className="textarea textarea-bordered textarea-lg flex items-center gap-2 m-3">
          Adresse du businesss
          <textarea
            name="address"
            className="grow"
            placeholder="kuzeykent mah, mutlu sok, No14 d175 Kastamonu/Turkey"
            required
          ></textarea>
        </label>
        <label className="input input-bordered flex items-center gap-2 m-3">
          Pays
          <input
            name="country"
            type="text"
            className="grow"
            placeholder="Mali"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-3">
          <FaLink /> Site Web
          <input
            type="text"
            className="grow"
            placeholder="www.votre-entreprise.com"
            name="website"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-3">
          <FaFacebook />
          <input
            type="text"
            className="grow"
            placeholder="www.facebook.com/example"
            name="facebookLink"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-3">
          <FaTwitter />
          <input
            type="text"
            className="grow"
            placeholder="www.twitter.com/example"
            name="twitterLink"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-3">
          <FaTiktok />
          <input
            type="text"
            className="grow"
            placeholder="www.tiktok.com/example"
            name="tiktokLink"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-3">
          <FaInstagram />
          <input
            type="text"
            className="grow"
            placeholder="www.tiktok.com/example"
            name="instagramLink"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-3">
          <FaLinkedinIn />
          <input
            type="text"
            className="grow"
            placeholder="www.linkedin.com/example"
            name="linkedinLink"
          />
        </label>

        <button className="btn btn-primary m-3">
          {' '}
          {navigation.state === 'submitting' ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            'Enregistrer'
          )}
        </button>
      </Form>
    )
}