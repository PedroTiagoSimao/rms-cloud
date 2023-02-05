import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BsCardChecklist } from 'react-icons/bs';
import { MdLibraryAdd} from 'react-icons/md'
import {TiDelete} from "react-icons/ti"

import Loading from '../loading';

import PocketBase from "pocketbase"
const pb = new PocketBase('https://rms-cloud.pockethost.io')
pb.autoCancellation(false)

const Procedures = ({repairID}) => {
    const [showModal, setShowModal] = useState(false);
    const [procedures, setProcedures] = useState([])
    const [procedure, setProcedure] = useState('')
    const [loading, setLoading] = useState(false)

    let url = `https://rms-cloud.pockethost.io/api/collections/procedures/records?filter=(repair=%27${repairID}%27)`

    const getProcedures = async () => {
        try {
            const res = await fetch(url).then(function(res){
                setLoading(true)
                return res
            })
            const data = await res.json()
            setProcedures(data.items)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProcedure = (procedureID) => {
        console.log('Proc ID: ' + procedureID);
    }

    useEffect(() => {
        getProcedures()
    }, [])


    return (
        <>
        <div className='flex flex-row'>
            <div className='flex items-center justify-start'>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex">
                <BsCardChecklist size={30} className='mr-2' />Procedimentos</h4>
            </div>
            <div className='flex w-full justify-end mr-4'>
                <MdLibraryAdd 
                    size={30} 
                    className='ml-10  text-purple-500 hover:text-purple-600 hover:cursor-pointer'
                    onClick={() => setShowModal(true)} />
            </div>
        </div>
            <div className="w-full mb-8 md:mb-16 overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                            className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                            <th className="px-4 py-3">Procedimento</th>
                            <th className="px-4 py-3">Descrição</th>
                            <th className="px-4 py-3">Data criação</th>
                            <th className="px-4 py-3">Notificar cliente</th>
                            <th className="px-4 py-3">Data notificação</th>
                            <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        { loading ? (
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {procedures.map((proc, i) => {
                                    const id = proc.id
                                    return (
                                        <tr key={i} className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{proc.procedure}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {proc.description}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {proc.created}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {proc.client_notified}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {proc.client_notified_date}
                                            </td>
                                            <td className="py-3 text-sm">
                                                <TiDelete 
                                                    size={30} 
                                                    className='text-purple-500 cursor-pointer mr-3'
                                                    onClick={() => deleteProcedure(proc.id)}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        ) : (
                            <Loading />
                        )
                        }
                    </table>
                </div>
            </div>
            {showModal ? (
                <div className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
                    <div className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl">
                        <header className="flex justify-end">
                            <button
                                className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                                onClick={() => setShowModal(false)}
                                >
                                <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                role="img"
                                aria-hidden="true">
                                    <path
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </header>
                        
                        <div className="mt-4 mb-6">
                            <p
                                className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"
                            >
                                Adicionar procedimento
                            </p>
                            <div className='flex flex-col'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Procedimento</span>
                                    <select
                                        className="w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray pl-10"
                                        value={procedure}
                                        onChange={(e) => setProcedure(e.target.value)}
                                        >
                                        <option value={'Verificacao'}>Verificação</option>
                                        <option value={'Diagnostico'}>Diagnóstico</option>
                                        <option value={'Reparacao'}>Reparação</option>
                                        <option value={'Concluido'}>Concluído</option>
                                        <option value={'Sem-Reparacao'}>Sem Reparação</option>
                                        <option value={'Recusado'}>Recusado</option>
                                    </select>
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Notas</span>
                                    <textarea className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="..."
                                        name="notes" rows="5"
                                        defaultValue={''}
                                        >
                                    </textarea>
                                </label>
                            </div>
                        </div>
                        <footer
                        className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800"
                        >
                        <button
                            className="w-full px-5 py-3 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        >
                            Guardar
                        </button>
                        </footer>
                    </div>
                </div>
            ) : null }
        </>
    )
}

export default Procedures