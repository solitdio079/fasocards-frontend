import { FaCheckCircle } from "react-icons/fa"

export default function EmailSent() {
    return (
      <div className="m-5 p-5 text-center">
        <p className="text-2xl">
          <FaCheckCircle className="text-green-700 text-6xl mx-auto my-3" />
          Email sent successfully! Check your inbox. <br />
        </p>
      </div>
    )
}