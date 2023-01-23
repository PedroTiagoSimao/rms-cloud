import React, { useState, useEffect, use } from 'react'
import { useRouter } from 'next/router';
import PocketBase from "pocketbase"

import Loading from '../../../components/loading';
import Status from '../../../components/repairs/status';
import Attachments from '../../../components/repairs/attachments';
import PartnerCheckBox from '../../../components/repairs/partnercheckbox';
import DatePicker from '../../../components/repairs/datepicker';
import Partners from '../../../components/repairs/partners';
import DashboardLayout from '../../../components/layouts/dashboard'
import Link from 'next/link';

const pb = new PocketBase('https://rms-cloud.pockethost.io')
pb.autoCancellation(false)

const Repair = () => {
  const router = useRouter()
  const {id} = router.query
  const [isLoading, setLoading] = useState(false)
  const [repairs, setRepairs] = useState([])
  const [status, setStatus] = useState()

  const getRepairs = async () => {
    let url = `https://rms-cloud.pockethost.io/api/collections/repairs/records?filter=(id=%27${id}%27)`

    try {
    const res = await fetch(url)
    const data = await res.json()
    setRepairs(data.items)
    } catch (err) {
        console.log(err);
    }
  }
  
  useEffect(() => {
    if(!router.isReady) return
    getRepairs()
  }, [router.isReady])

  if(repairs.length === 0) {
    return (
    <>
        <h4>&nbsp;</h4>
        <Loading />
    </>
    )  
  }

  const updateRepair = async (event, id) => {
    event.preventDefault()
    setLoading(true)
    const data = {
      "equipment": event.target.equipment.value,
      "serial": event.target.serial.value,
      "description": event.target.description.value,
      "notes": event.target.notes.value,
  };
    const record = await pb.collection('repairs').update(id, data);
    setLoading(false)
  }

  return (
    <main className="h-full pb-16 overflow-y-auto">
      {
        repairs.map((repair, i) => {
          return (
            <div key={i} >
              <div className="container grid px-6 pt-6 mx-auto">
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center">Reparação #{repair.number}</h4>
                <form id={i} onSubmit={(e) => updateRepair(e, repair.id)}>
                  <div className="px-4 py-3 mb-20 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <div className='flex flex-col md:flex-row'>
                      <div className='flex flex-col md:w-2/3 md:mr-4 md:mb-5'>
                          <label className="block text-sm">
                              <span className="text-gray-700 dark:text-gray-400">Cliente</span>
                              <Link href={`/dashboard/clients/${repair.client}`}>
                              <input
                                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input cursor-pointer"
                                  placeholder="iPhone 3GS"
                                  name="client"
                                  defaultValue={repair.equipment}
                                  disabled
                                  />
                                </Link>
                          </label>
                      </div>
                      <div className='flex flex-col md:w-1/3'>
                        <Status repairID={repair.id} />    
                      </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                      <div className='flex flex-col md:w-2/3 md:mr-4'>
                          <label className="block text-sm">
                              <span className="text-gray-700 dark:text-gray-400">Equipamento</span>
                              <input
                                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                  placeholder="iPhone 3GS"
                                  name="equipment"
                                  defaultValue={repair.equipment}
                                  />
                          </label>
                      </div>
                      <div className='flex flex-col md:w-1/3'>
                          <label className="block text-sm">
                              <span className="text-gray-700 dark:text-gray-400">Nº Série/IMEI</span>
                              <input
                                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                  placeholder="201393CD212"
                                  name="serial"
                                  defaultValue={repair.serial}
                                  />
                            </label>
                        </div>
                    </div>
                    <label className="block text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Avaria</span>
                        <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="Vidro partido/Não carrega"
                            name="description"
                            defaultValue={repair.description}
                            />
                    </label>
                    <div className='flex flex-col md:flex-row'>
                      <div className='flex flex-col md:w-2/3 md:mr-4'>
                          <label className="block text-sm">
                              <span className="text-gray-700 dark:text-gray-400">Notas</span>
                              <textarea className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                  placeholder="..."
                                  name="notes" rows="5"
                                  defaultValue={repair.notes}
                                  >
                              </textarea>
                          </label>
                      </div>
                      <div className='flex flex-col md:w-1/3'>
                        <span className="text-gray-700 dark:text-gray-400 text-sm">Anexos</span>
                        <Attachments />
                      </div>
                    </div>
                    <div className="mt-5 md:float-right">
                        <input type="submit" 
                        className={`px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150  border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple 
                        ${isLoading ? 'bg-purple-100' : 'bg-purple-600 cursor-pointer'}`}
                        value={'Guardar'}
                        />
                        <div className={`relative mt-[-28px] pl-9
                                        ${isLoading ? '' : 'hidden'}`}>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    </div>
                  </div>
                  <div className="flex flex-row px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                      <PartnerCheckBox 
                        repairID={repair.id}
                        currentSentToPartner = {repair.sent_to_partner} />
                      <DatePicker 
                        repairID={repair.id}
                        dateSentToPartner = {`startDate: ${repair.date_sent_to_partner}, endDate: ${repair.date_sent_to_partner.split(' ')[0]}`} />
                      <Partners 
                        repairID={repair.id}
                        organizationID={repair.organizationID}
                        repairPartnerID={repair.partner}/>
                  </div>
                </form>
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

Repair.Layout = DashboardLayout

export default Repair