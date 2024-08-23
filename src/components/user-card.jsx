/* eslint-disable react/prop-types */
import {useFetcher, useSubmit} from 'react-router-dom'

export default function UserCard({ user }) {
  const fetcher = useFetcher()
  const submit = useSubmit()
    return (
      <div className="card w-96 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title"> {user.email} </h2>
          <p className="badge badge-primary">
            {' '}
            {user.admin ? 'Admin' : 'Client'}{' '}
          </p>
          <div className="card-actions justify-end">
            <fetcher.Form method="post">
              <input type="hidden" name="id" value={user._id} />
              <input type="hidden" name="email" value={user.email} />

              <input
                name="isAdmin"
                type="checkbox"
                defaultChecked={user.admin}
                className="checkbox checkbox-md checkbox-primary m-1"
                onChange={(event) => {
                  submit(event.currentTarget.form)
                }}
              />

              <input
                name="isAllowed"
                type="checkbox"
                defaultChecked={user.isAllowed}
                className="checkbox checkbox-md checkbox-info m-1"
                onChange={(event) => {
                  submit(event.currentTarget.form)
                }}
              />
            </fetcher.Form>
          </div>
        </div>
      </div>
    )
}