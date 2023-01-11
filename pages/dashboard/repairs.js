import ListRepairs from "../../components/repairs"
import DashboardLayout from "../../components/layouts/dashboard"
import { companyID } from "../../lib/global-variables"

const Repairs = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListRepairs company={companyID} pagination={false} />
      </div>
    </main>
  )
}

Repairs.Layout = DashboardLayout

export default Repairs