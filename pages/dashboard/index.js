import ListClients from "../../components/clients"
import ListRepairs from "../../components/repairs"
import ListQuotes from "../../components/quotes"
import ListProducts from "../../components/products"
import HomeCard from "../../components/home-card"
import {companyID} from "../../lib/global-variables"

const Dashboard = ({clients, repairs}) => {
    return (
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Olá, $user$</h2>
            <div className="grid gap-6 mb-8 md:mb-16 md:grid-cols-2 xl:grid-cols-4">
              <HomeCard text={'Total de Clientes'} number={2} icon={'clients'} bgColor={'bg-blue-100'} textColor={'text-blue-500'} />
              <HomeCard text={'Reparações Abertas'} number={2} icon={'repairs'} bgColor={'bg-orange-100'} textColor={'text-orange-500'}  />
              <HomeCard text={'Em Parceiros'} number={2} icon={'partners'} bgColor={'bg-green-100'} textColor={'text-green-500'}  />
              <HomeCard text={'Orçamentos Abertos'} number={2} icon={'quotes'} bgColor={'bg-purple-100'} textColor={'text-purple-500'}  />
            </div>
            <ListClients clients={clients.items} pagination={true} />
            <ListRepairs repairs={repairs.items} />
            <ListQuotes />
            <ListProducts />
          </div>
        </main>
    )
}

export default Dashboard

export async function getServerSideProps() {

    const resClients = await fetch('https://rms-cloud.pockethost.io/api/collections/clients/records')
    const clients = await resClients.json()
  
    const resRepairs = await fetch('https://rms-cloud.pockethost.io/api/collections/repairs/records')
    const repairs = await resRepairs.json()
    console.log(repairs);
    return {
      props: {
        clients,
        repairs
      },
    }
  }