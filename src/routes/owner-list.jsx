import { useNavigation, useLoaderData,Link} from 'react-router-dom'

import ListCard from '../components/list-card'
export async function loader({ params }) {
    console.log(params.email)
    const response = await fetch(
      `https://api.fasocard.com/business/list/${params.email}`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': 'https://api.fasocard.com',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
    const dataList = await response.json()
    console.log(dataList)
    return dataList
}

export default function OwnerList() {
    const navigation = useNavigation()
    const data = useLoaderData()
    return (
      <>
        {navigation.state === 'idle' ? (
          <div className="flex m-5 items-center justify-between flex-wrap">
            {data.length === 0 ? (
              <Link className="btn btn-primary" to="/create/business">
                Ajouter un business
              </Link>
            ) : (
              data.map((item) => <ListCard key={item._id} data={item} />)
            )}
          </div>
        ) : (
          <span className="loading loading-infinity loading-lg"></span>
        )}
      </>
    )
}