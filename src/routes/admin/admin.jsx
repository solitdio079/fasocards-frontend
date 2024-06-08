import { Outlet, NavLink, useOutletContext} from "react-router-dom"
import { FaUserGroup , FaChartLine, FaGear } from "react-icons/fa6"
export default function Admin() {
  const [user] = useOutletContext()
  console.log(user)
  if(!user || !user.isAdmin ) console.log("Not allowed here!")
    return (
      <>
        <div className="flex flex-col lg:flex-row justify-between m-5 p-5">
          <div className="max-w-1/3">
            <ul className="menu bg-base-200 rounded-box">
              <li>
                <NavLink to="/admin"
                  className={({ isActive, isPending }) =>
                    isActive ? 'bg-primary text-white' : isPending ? 'bg-neutral' : ''
                  }
                >
                  <FaChartLine className="h-5 w-5" />
                  Stats
                  <span className="badge badge-sm">99+</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users"
                  className={({ isActive, isPending }) =>
                    isActive ? 'bg-primary text-white' : isPending ? 'bg-neutral' : ''
                  }
                >
                  <FaUserGroup className="h-5 w-5" />
                  Users
                  <span className="badge badge-sm badge-warning">NEW</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/profile"
                  className={({ isActive, isPending }) =>
                    isActive ? 'bg-primary text-white' : isPending ? 'bg-neutral' : ''
                  }
                >
                  <FaGear className="h-5 w-5" />
                  Profile
                  <span className="badge badge-xs badge-info"></span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Outlet />
          </div>
        </div>
      </>
    )
}