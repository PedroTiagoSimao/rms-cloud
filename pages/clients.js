import ListClients from "../components/clients"

const Clients = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListClients />
      </div>
    </main>
  )
}

export default Clients