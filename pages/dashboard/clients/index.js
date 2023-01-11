import { useEffect, useState } from "react"
import DashboardLayout from "../../../components/layouts/dashboard"

import ListClients from "../../../components/clients"
import Loading from "../../../components/loading"

const Clients = () => {
  const [clients, setClients] = useState([])

  const getClients = async () => {
    try {
      const res = await fetch("https://rms-cloud.pockethost.io/api/collections/clients/records")
      const data = await res.json()
      setClients(data.items)
    } catch (err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getClients()
  }, [])

  if(clients.length === 0) {
    return <Loading  title={'clientes'}/>
  }
  
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListClients clients={clients} pagination={false}/>
      </div>
    </main>
  )
}

Clients.Layout = DashboardLayout

export default Clients