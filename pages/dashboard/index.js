import ListClients from "../../components/clients"
import ListRepairs from "../../components/repairs"
import ListQuotes from "../../components/quotes"
import ListProducts from "../../components/products"
import HomeCard from "../../components/home-card"
import { organizationID } from "../../lib/global-variables"
import DashboardLayout from "../../components/layouts/dashboard"


const Dashboard = () => {
    return (
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Olá, $user$</h2>
            <div className="grid gap-6 mb-8 md:mb-16 md:grid-cols-2 xl:grid-cols-4">
              <HomeCard text={'Reparações em Aberto'} number={2} icon={'repairs'} bgColor={'bg-orange-100'} textColor={'text-orange-500'} table={'repairs'} organization={organizationID()} />
            </div>
            <ListClients organization={organizationID()} pagination={true} />
            <ListRepairs organization={organizationID()} pagination={true} />
            <ListQuotes />
            <ListProducts />
          </div>
        </main>
    )
}

Dashboard.Layout = DashboardLayout

export default Dashboard