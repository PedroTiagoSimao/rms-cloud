import React, { useState, useEffect } from 'react'
import PocketBase from "pocketbase"
import { companyID } from '../../../lib/global-variables';
import DashboardLayout from '../../../components/layouts/dashboard';
import ErrorModal from '../../../components/error-modal';

const pb = new PocketBase('https://rms-cloud.pockethost.io')

const AddClient = () => {
    const [isLoading, setLoading] = useState(null)
    const [clients, setClients] = useState([])

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
            "company": event.target.company.value,
            "companyID": companyID
        };
        try {
            const record = await pb.collection('clients').create(data);
        } catch (error){
            console.log(error.data);
            return (
                <ErrorModal />
            )
        }
    
        setLoading(false)
    }

    return (
        <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 pt-6 mx-auto">
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center">Adicionar Cliente</h4>
                <form onSubmit={(e) => submitClientData(e, companyID)}>
                    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Nome</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="José Manuel"
                                name="name"
                                />
                        </label>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Ex.: alguem@exemplo.pt"
                                        name="email"
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Ex.: 919 919 919"
                                        name="phone"
                                        />
                                </label>
                            </div>
                        </div>
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Morada</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Ex.: Rua da Liberdade, 12"
                                name="address"
                                />
                        </label>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Cód. Postal</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Ex.: 2460-132"
                                        name="cp"
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Localidade</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Alfeizerão"
                                        name="city"
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
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">NIF</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Ex.: 215519302"
                                        name="nif"
                                        />
                                </label>
                            </div>
                        </div>
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Empresa</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Ex.: Infor-Tec"
                                name="company"
                                />
                        </label>
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
                </form>
            </div>
        </main>
    )
}

AddClient.Layout = DashboardLayout

export default AddClient