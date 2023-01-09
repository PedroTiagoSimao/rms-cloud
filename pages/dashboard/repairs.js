import ListRepairs from "../../components/repairs"
import PocketBase from 'pocketbase';
import { useEffect, useState } from "react";
import { getRepairs } from "../../lib/repairs";

const Repairs = async () => {
  const [repairItems, setRepairItems] = useState('')

  const getRepairs = async () => {
    const res = await fetch('https://rms-cloud.pockethost.io/api/collections/repairs/records')
    const data = res.json()
    setRepairItems(data)
  }

  useEffect(() => {
    getRepairs()
  }, [])

  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListRepairs repairs={repairItems.items} />
      </div>
    </main>
  )
}

export default Repairs