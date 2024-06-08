import { useLoaderData } from "react-router-dom"


export async function loader() {
    try {
          const response = await fetch(`https://api.fasocard.com/admin/stats`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Access-Control-Allow-Origin': 'https://api.fasocard.com',
              'Access-Control-Allow-Credentials': 'true',
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          })

          const stats = await response.json()
          return stats
        
    } catch (error) {
        return error.message
    }
  
    
}

export default function Stats() {
    const stats = useLoaderData()
    console.log(stats);
    return (
      <div className="flex items-center w-full">
        <div className="stats stats-vertical lg:stats-horizontal shadow mx-auto">
          <div className="stat place-items-center">
            <div className="stat-title">Business</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Utilisateur</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Nouveau Utilisateurs</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    )
}