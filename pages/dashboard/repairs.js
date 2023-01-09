import ListRepairs from "../../components/repairs"
import PocketBase from 'pocketbase';
import { useEffect, useState } from "react";

const pb = new PocketBase('https://rms-cloud.pockethost.io')
pb.autoCancellation(false)

const Repairs = () => {
  const [repairs, setRepairs] = useState({})

  useEffect(() => {
    const getRepairData = async () => {
      const res = await fetch('https://rms-cloud.pockethost.io/api/collections/repairs/records')
      const data = await res.json()
      setRepairs(data.items)
    }
    getRepairData()
  },[] )

  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        {
          repairs.map((repair) => {
            <p>{repair.id}</p>
          })
        }
      </div>
    </main>
  )
}

export async function getServerSideProps() {

    //const companyID = companyID()
    //const resRepairs = await fetch(`https://rms-cloud.pockethost.io/api/collections/repairs/records?filter=(company=%27${companyID}%27)`)
    const resRepairs = await fetch(`https://rms-cloud.pockethost.io/api/collections/repairs/records`)
    const repairs = await resRepairs.json()

  return {
    props: {
      repairs
    },
  }
}

export default Repairs