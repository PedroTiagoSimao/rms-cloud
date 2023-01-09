import ListClients from "../../../components/clients"

const Clients = ({clients}) => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListClients clients={clients.items} pagination={false}/>
      </div>
    </main>
  )
}

export default Clients

export async function getServerSideProps() {

  const resClients = await fetch('https://rms-cloud.pockethost.io/api/collections/clients/records')
  const clients = await resClients.json()
  return {
    props: {
      clients
    },
  }
}