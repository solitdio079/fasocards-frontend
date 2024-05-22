import hero1 from '../assets/hero1.jpeg'
import hero2 from '../assets/hero2.jpeg'

export default function Index() {
    return (
      <>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${hero2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">FasoCard</h1>
              <p className="mb-5">
                Écologique et Durable : Réduisez l&apos;utilisation de papier
                avec cette solution écologique et robuste.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={hero1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Mission</h1>
              <p className="py-6">
                Faciliter les interactions professionnelles à travers une carte
                de visite sans contact innovante et personnalisée, tout en
                soutenant des pratiques écologiques et en adoptant les dernières
                avancées technologiques.
              </p>
            </div>
          </div>
        </div>

        <ul className="timeline timeline-vertical   my-5 p-5">
          <li>
            <div className="timeline-start timeline-box">
              Technologie NFC : Partagez instantanément vos coordonnées en
              approchant la carte de tout appareil compatible NFC.
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              QR Code Intégré : Accédez facilement à vos informations complètes
              en scannant le QR code, même sans NFC.
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">
              Informations Complètes : Incluez votre nom, poste, entreprise,
              email, téléphone, site web, et profils de réseaux sociaux.
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Mise à Jour Facile : Modifiez vos informations à tout moment via
              une plateforme en ligne sécurisée, sans avoir à réimprimer la
              carte.
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">
              Design Personnalisé : Choisissez parmi une variété de designs
              élégants ou personnalisez votre carte pour refléter votre marque
              personnelle.
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />

            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Écologique et Durable : Réduisez l&apos;utilisation de papier avec
              cette solution écologique et robuste.
            </div>
          </li>
        </ul>

        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={hero2} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Vision</h1>
              <p className="py-6">
                Établir la Faso Card comme la référence mondiale des cartes de
                visite sans contact, en révolutionnant les échanges
                professionnels avec efficacité et durabilité.
              </p>
            </div>
          </div>
        </div>
      </>
    )
}
/*
Faso Card - Carte de Visite Sans Contact
Découvrez  Faso Card, la carte de visite sans contact qui transforme les échanges professionnels à l'échelle mondiale. Élégante, moderne et fonctionnelle, elle est conçue pour optimiser vos interactions professionnelles.
Fonctionnalités :
* Technologie NFC : Partagez instantanément vos coordonnées en approchant la carte de tout appareil compatible NFC.
* QR Code Intégré : Accédez facilement à vos informations complètes en scannant le QR code, même sans NFC.
* Informations Complètes : Incluez votre nom, poste, entreprise, email, téléphone, site web, et profils de réseaux sociaux.
* Mise à Jour Facile : Modifiez vos informations à tout moment via une plateforme en ligne sécurisée, sans avoir à réimprimer la carte.
* Design Personnalisé : Choisissez parmi une variété de designs élégants ou personnalisez votre carte pour refléter votre marque personnelle.
* Écologique et Durable : Réduisez l'utilisation de papier avec cette solution écologique et robuste.
Avec la Faso Card, impressionnez et échangez vos informations professionnelles de manière innovante et efficace. Adoptez dès aujourd'hui l'avenir des cartes de visite !
*/