import React from 'react'
import { BiCog, BiAddToQueue, BiExport } from 'react-icons/bi'
import DashboardLayout from '../../../components/layouts/dashboard'

const Repair = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
        <div className="container grid px-6 pt-6 mx-auto">
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center">Reparação #</h4>
        </div>
    </main>
  )
}

Repair.Layout = DashboardLayout

export default Repair