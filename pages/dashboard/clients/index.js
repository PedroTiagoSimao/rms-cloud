import DashboardLayout from "../../../components/layouts/dashboard"
import ListClients from "../../../components/clients"
import {companyID} from "../../../lib/global-variables"

const Clients = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListClients company={companyID} pagination={false}/>
      </div>
    </main>
  )
}

Clients.Layout = DashboardLayout

export default Clients