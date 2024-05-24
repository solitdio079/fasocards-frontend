import {FaX, FaEye, FaPencil } from 'react-icons/fa6'
import hero1 from '../assets/hero1.jpeg'

export default function OwnerList() {
    return (
      <>
        <div className="flex">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={hero1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes! <div className="badge badge-secondary">abc@abv.com</div>
              </h2>
              <p>The description is a mess without the 20 characters rule!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <FaEye /> Voir
                </button>
                <button className="btn btn-warning">
                  <FaPencil /> Modifier
                </button>
                <button className="btn btn-error">
                  <FaX /> Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}