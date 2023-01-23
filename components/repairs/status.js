import React, { useState, useEffect } from 'react'
import PocketBase from "pocketbase"

const pb = new PocketBase('https://rms-cloud.pockethost.io')

const Status = ({repairID}) => {
    const [status, setStatus] = useState()

    const updateStatus = async (e) => {
        setStatus(e.target.value)
    
        e.preventDefault()
        const data = {
            "status": status,
        };
        
        console.log(status);
        const record = await pb.collection('repairs').update(repairID, data);
    
    }

    return (
        <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Estado</span>
            <select
                className="w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                value={status}
                onChange={(e) => updateStatus(e)}
                >
                <option value={'Aberto'}>Aberto</option>
                <option value={'Diagnóstico'}>Diagnóstico</option>
                <option value={'Reparação'}>Reparação</option>
                <option value={'Concluído'}>Concluído</option>
                <option value={'Sem Reparação'}>Sem Reparação</option>
                <option value={'Recusado'}>Recusado</option>
            </select>
        </label>
    )
}

export default Status