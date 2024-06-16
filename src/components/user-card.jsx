/* eslint-disable react/prop-types */
import {useFetcher} from 'react-router-dom'

export default function UserCard({ user }) {
    const fetcher = useFetcher()
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
                  name="isAllowed"
                  type="checkbox"
                  defaultChecked={user.isAllowed}
                  className="checkbox checkbox-md checkbox-info"
                        />
                        <button type="submit" className='btn btn-primary btn-xs m-1'>Switch</button>
              
            </fetcher.Form>
          </div>
        </div>
      </div>
    )
}