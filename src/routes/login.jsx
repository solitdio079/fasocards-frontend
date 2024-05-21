import { Form, redirect, useNavigation, useNavigate, useOutletContext } from 'react-router-dom'


export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const sendEmail = await fetch(
      'https://fasocards.onrender.com/auth/login/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email }),
      }
    )
    const response = await sendEmail.json()
    console.log(response);
    return redirect(`/verify-email?email=${email}`)
}

export default function Login() {
    const navigation = useNavigation()
    const navigate = useNavigate()
    const [user] = useOutletContext()
    if(user) navigate("/")
    
    return (
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Connectez-vous!</h1>
            <p className="py-6">
             Un lien sera envoyer a votre email pour confirmer votre identite
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form method='post' className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                                className="input input-bordered"
                                name="email"
                  required
                />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary"> {navigation.state === "submitting" ? <span className="loading loading-infinity loading-lg"></span>: "Login"} </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
}