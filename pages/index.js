import ListClients from "../components/clients"
import ListRepairs from "../components/repairs"
import ListQuotes from "../components/quotes"
import ListProducts from "../components/products"

const index = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Olá, $user$</h2>
        <ListClients />
        <ListRepairs />
        <ListQuotes />
        <ListProducts />
      </div>
    </main>
  )
}

export default index