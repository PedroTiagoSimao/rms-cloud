import ListRepairs from "../components/repairs"

const Repairs = ({repairs}) => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListRepairs repairs={repairs.items} />
      </div>
    </main>
  )
}

export async function getServerSideProps() {

  const resRepairs = await fetch('https://rms-cloud.pockethost.io/api/collections/repairs/records')
  const repairs = await resRepairs.json()

  return {
    props: {
      repairs
    },
  }
}

export default Repairs