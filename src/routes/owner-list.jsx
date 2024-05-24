import { FaEye, FaX, FaEdit  } from 'react-icons/fa'
import hero1 from '../assets/hero1.jpeg'

export default function OwnerList() {
    return (
      <>
        <div className="flex-col">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={hero1} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Business Name{' '}
                <div className="badge badge-primary">email@email.com</div>
              </h2>
              <p>The twenty character minimum requirement is dumb.</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary m-3">
                  <FaEye />
                </button>
                <button className="btn btn-secondary m-3">
                  <FaEdit />
                </button>
                <button className="btn btn-error m-3">
                  <FaX />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}