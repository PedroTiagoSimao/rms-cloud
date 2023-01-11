import DashboardLayout from "../../../components/layouts/dashboard"
import ListClients from "../../../components/clients"

const Clients = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListClients pagination={false}/>
      </div>
    </main>
  )
}

Clients.Layout = DashboardLayout

export default Clients