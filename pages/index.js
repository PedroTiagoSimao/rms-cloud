import Clients from "../components/clients"
import Repairs from "../components/repairs"

const index = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Olá, $user$</h2>
        <Clients />
        <Repairs />
      </div>
    </main>
  )
}

export default index