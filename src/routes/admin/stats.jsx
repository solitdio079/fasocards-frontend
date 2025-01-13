import { useLoaderData,Link } from 'react-router-dom'

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
  const data = stats.data[0]
  return (
    <>
      {data ? (
        <div className="flex items-center w-full">
          <div className="stats stats-vertical lg:stats-horizontal shadow mx-auto">
            <div className="stat place-items-center">
              <div className="stat-title">Business</div>
              <div className="stat-value">{data.totalBusiness}</div>
              <div className="stat-desc">Since Creation</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Utilisateurs</div>
              <div className="stat-value text-primary">{data.totalUsers}</div>
              <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Nouveau Utilisateurs</div>
              <div className="stat-value">{data.newUsers}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      ) : (
        <Link to={'/'} className="btn btn-primary">
          Accueil
        </Link>
      )}
    </>
  )
}
