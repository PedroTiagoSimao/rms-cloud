import React, { useState, useEffect } from 'react'
import PocketBase from "pocketbase"
import Loading from '../loading'

const pb = new PocketBase('https://rms-cloud.pockethost.io')

const repairStatuses = [
    {id : "1",
    name : "Aberto",
    value: "Aberto"},
    {id : "2",
    name : "Diagnóstico",
    value: "Diagnóstico"},
    {id : "3",
    name : "Reparação",
    value: "Reparação"},
    {id : "4",
    name : "Enviado para Parceiro",
    value: "Enviado para Parceiro"},
    {id : "5",
    name : "Concluído",
    value: "Concluído"},
    {id : "6",
    name : "Sem Reparação",
    value: "Sem Reparação"},
    {id : "7",
    name : "Recusado",
    value: "Recusado"}
]

const Status = ({repairID, repairCurrentStatus}) => {
    const [status, setStatus] = useState()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setStatus(repairCurrentStatus)
    },[])

    const updateStatus = async (a) => {
        setStatus(a.target.value)
        setLoading(true)
    
        const data = {
            "status": a.target.value
        }

        const record = await pb.collection('repairs').update(repairID, data);
        setLoading(false)
    
    }

    return (
        <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Estado</span>
            <select
                className="w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                value={status}
                onChange={(a) => updateStatus(a)}
                >
                    {
                        repairStatuses.map((s,i) => {
                            return (
                                <option key={i} value={s.value}>{s.name}</option>
                            )
                        })
                    }
            </select>
        </label>
    )
}

export default Status