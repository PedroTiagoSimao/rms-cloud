import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import PocketBase from "pocketbase"

import Loading from '../../../components/loading';
import Attachments from '../../../components/attachments';
import DashboardLayout from '../../../components/layouts/dashboard'

const pb = new PocketBase('https://rms-cloud.pockethost.io')

const Repair = () => {

  const router = useRouter()
  const {id} = router.query
  const [isLoading, setLoading] = useState(null)
  const [repairs, setRepairs] = useState([])

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
    if(!id) {
        return
    }
    getRepairs()
  }, [])

  if(repairs.length === 0) {
    return (
    <>
        <h4>&nbsp;</h4>
        <Loading />
    </>
    )  
  }

  const submitClientData = async (event, id) => {
    event.preventDefault()
    setLoading(true)
    const data = {
        "name": event.target.name.value,
        "email": event.target.email.value,
        "phone": event.target.phone.value,
        "address": event.target.address.value,
        "cp": event.target.cp.value,
        "city": event.target.city.value,
        "contact": event.target.contact.value,
        "nif": event.target.nif.value,
        "company": event.target.company.value
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
                <form key={repair.id} onSubmit={(e) => submitClientData(e, repair.id)}>
                  <div key={repair.id} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                                  name="notes" rows="">
                                {repair.notes}
                              </textarea>
                          </label>
                      </div>
                      <div className='flex flex-col md:w-1/3'>
                        <span className="text-gray-700 dark:text-gray-400 text-sm">Anexos</span>
                        <Attachments />
                      </div>
                    </div>
                  </div>
                  <div key={repair.id} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <div className='flex flex-col md:flex-row'>
                      <div className='flex flex-col md:w-1/3 md:mr-4'>
                          <label className="inline-flex items-center text-sm">
                              <input
                                type="checkbox"
                                className="w-8 h-8 text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                              />
                              <span className="text-gray-700 dark:text-gray-400 ml-1">Envidado para parceiro</span>
                          </label>
                      </div>
                      <div className="flex flex-col md:w-1/3">
                        <div className="flex items-center justify-center">
                          <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                            <input type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Select a date" data-mdb-toggle="datepicker" />
                          </div>
                        </div>
                      </div>
                    </div>
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