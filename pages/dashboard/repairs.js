import ListRepairs from "../../components/repairs"
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/dashboard"

const Repairs = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListRepairs company={''} />
      </div>
    </main>
  )
}

Repairs.Layout = DashboardLayout

export default Repairs