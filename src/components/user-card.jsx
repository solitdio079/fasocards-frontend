/* eslint-disable react/prop-types */
import {Form} from 'react-router-dom'

export default function UserCard({user}) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title"> {user.email} </h2>
          <p className="badge badge-primary"> {user.admin ? 'Admin': 'Client'} </p>
          <div className="card-actions justify-end">
            <Form method="post">
              <input
                type="checkbox"
                defaultChecked = {user.isAllowed}
                className="checkbox checkbox-md checkbox-info"
              />
            </Form>
          </div>
        </div>
      </div>
    )
}