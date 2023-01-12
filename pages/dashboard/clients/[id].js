import React, { useState } from 'react'
import { companyID } from '../../../lib/global-variables';
import ListRepairs from "../../../components/repairs"
import PocketBase from "pocketbase"
import DashboardLayout from '../../../components/layouts/dashboard';

const pb = new PocketBase('https://rms-cloud.pockethost.io')

const Client = ({clientData, repairData}) => {

    const [isLoading, setLoading] = useState(null)

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

        const record = await pb.collection('clients').update(id, data);
        setLoading(false)
    }

  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center">Cliente</h4>
        {
            clientData.items.map((client) => {
                return (
                <form key={client.id} onSubmit={(e) => submitClientData(e, client.id)}>
                    <div key={client.id} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Nome</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Jane Doe"
                                name="name"
                                defaultValue={client.name}
                                />
                        </label>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Jane Doe"
                                        name="email"
                                        defaultValue={client.email}
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Jane Doe"
                                        name="phone"
                                        defaultValue={client.phone}
                                        />
                                </label>
                            </div>
                        </div>
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Morada</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Por definir"
                                name="address"
                                defaultValue={client.address}
                                />
                        </label>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Cód. Postal</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        name="cp"
                                        defaultValue={client.cp}
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Localidade</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        name="city"
                                        defaultValue={client.city}
                                        />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Pessoa de Contacto</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        name="contact"
                                        defaultValue={client.contact}
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">NIF</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        name="nif"
                                        defaultValue={client.nif}
                                        />
                                </label>
                            </div>
                        </div>
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Empresa</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Por definir"
                                name="company"
                                defaultValue={client.company}
                                />
                        </label>
                        <div className="mt-5 md:float-right">
                            <input type="submit" 
                            className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                            value={'Guardar'}
                            />
                        </div>
                    </div>
                </form>
                )
            })
        }
      <ListRepairs repairs={repairData.items} />
      </div>
    </main>
  )
}

Client.Layout = DashboardLayout

export async function getServerSideProps(context) {
    const {id} = context.query
    const resClient = await fetch(`https://rms-cloud.pockethost.io/api/collections/clients/records?filter=(id=%27${id}%27)`)
    const clientData = await resClient.json()

    //const companyID = companyID()
    //const resRepairs = await fetch(`https://rms-cloud.pockethost.io/api/collections/repairs/records?filter=(company=%27${companyID}%27)`)
    const resRepairs = await fetch(`https://rms-cloud.pockethost.io/api/collections/repairs/records`)
    const repairData = await resRepairs.json()


    return {
      props: {
        clientData,
        repairData
      },
    }
  }
  

export default Client