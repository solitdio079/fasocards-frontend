import {Form} from 'react-router-dom'

export default function Users() {
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
                  className="checkbox checkbox-lg checkbox-info"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}