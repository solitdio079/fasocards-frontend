import {
  Form,
  useOutletContext,
  useNavigation,
    redirect,
  useLoaderData
} from 'react-router-dom'
import {
  FaLink,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'
import hero1 from '../assets/hero1.jpeg'

export async function action({ params,request }) {
  const body = await request.formData()

  //const bodyObject = Object.fromEntries(body)
  const bodyFile = body.get("profilePhoto")
  
  
  

  const url =
    bodyFile.name === ''
      ? `https://api.fasocard.com/business/patch/${params.name}`
      : `https://api.fasocard.com/business/update/${params.name}`
  const fetchMethod =
    bodyFile.name === ''
      ? `PATCH`
      : `PUT`

  try {
    const response = await fetch(url, {
      method: fetchMethod,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': 'https://api.fasocard.com',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: body,
    })
    const newBusiness = await response.json()
    console.log(newBusiness)
    return redirect(`/business/${newBusiness.data.name}`)
  } catch (error) {
    throw new Error(error)
  }
}

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

export default function EditBusiness() {
    const [user] = useOutletContext()
    const data = useLoaderData()
   
  console.log(user)
  const navigation = useNavigation()
  return (
    <Form
      encType="multipart/form-data"
      method="post"
      className="m-5 p-5 flex flex-col justify-between "
    >
      <p className="text-center my-3 text-bold text-3xl">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={data.profilePhoto || hero1 } alt="logo" />
          </div>
        </div><br/>
        Modifier {data.name}
      </p>

      <label className="input input-bordered flex items-center gap-2 m-3">
        Nom
        <input
          name="name"
          defaultValue={data.name}
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
          defaultValue={data.email}
          type="text"
          className="grow"
          placeholder="daisy@site.com"
          required
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 m-3">
        Telephone
        <input
          name="phone"
          defaultValue={data.phone || ''}
          type="text"
          className="grow"
          placeholder="+223 70 00 00 00"
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
        >
          {data.description}
        </textarea>
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
        />
      </label>

      <label className="textarea textarea-bordered textarea-lg flex items-center gap-2 m-3">
        Adresse du businesss
        <textarea
          name="address"
          defaultValue={data.address}
          className="grow"
          placeholder="kuzeykent mah, mutlu sok, No14 d175 Kastamonu/Turkey"
          required
        ></textarea>
      </label>
      <label className="input input-bordered flex items-center gap-2 m-3">
        Pays
        <input
          defaultValue={data.country}
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
          defaultValue={data.website}
          name="website"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 m-3">
        <FaFacebook />
        <input
          type="text"
          className="grow"
          defaultValue={data.facebookLink || ''}
          placeholder="www.facebook.com/example"
          name="facebookLink"
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 m-3">
        <FaTwitter />
        <input
          type="text"
          className="grow"
          defaultValue={data.twitterLink || ''}
          placeholder="www.twitter.com/example"
          name="twitterLink"
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 m-3">
        <FaTiktok />
        <input
          type="text"
          className="grow"
          defaultValue={data.tiktokLink || ''}
          placeholder="www.tiktok.com/example"
          name="tiktokLink"
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 m-3">
        <FaInstagram />
        <input
          type="text"
          className="grow"
          defaultValue={data.instagramLink || ''}
          placeholder="www.tiktok.com/example"
          name="instagramLink"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 m-3">
        <FaLinkedinIn />
        <input
          type="text"
          className="grow"
          defaultValue={data.linkedinLink || ''}
          placeholder="www.linkedin.com/example"
          name="linkedinLink"
        />
      </label>

      <button className="btn btn-warning m-3">
        {' '}
        {navigation.state === 'submitting' ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          'Modifier'
        )}
      </button>
    </Form>
  )
}
