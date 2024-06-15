/* eslint-disable react/prop-types */
import { FaX, FaEye, FaPencil } from 'react-icons/fa6'
import hero1 from '../assets/hero1.jpeg'
import { Link, Form } from 'react-router-dom'
export default function ListCard({ data }) {
  return (
    <>
      <div className="card m-3 w-full lg:w-1/4 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={
            data.profilePhoto ||
              hero1
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.name}{' '}
            <div className="badge badge-secondary"> {data.email} </div>
          </h2>
          <p> {data.description} </p>
          <div className="card-actions justify-end">
            <Link to={`/business/${data.name}`} className="btn btn-primary">
              <FaEye /> Voir
            </Link>

            <Link to={`/edit/${data.name}`} className="btn btn-warning">
              <FaPencil /> Modifier
            </Link>
            <Form method="post" action={`/delete/${data._id}`}>
              <input
                type="hidden"
                value={`/list/${data.owner}`}
                name="backUrl"
              />
              <button className="btn btn-error">
                <FaX /> Supprimer
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
