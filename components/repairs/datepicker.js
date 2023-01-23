import { useState, useEffect } from "react"
import Datepicker from 'react-tailwindcss-datepicker';
import { format } from 'date-fns'
import PocketBase from "pocketbase"

const pb = new PocketBase('https://rms-cloud.pockethost.io')
pb.autoCancellation(false)

const DatePicker = ({ repairID, dateSentToPartner }) => {
    const [partnerDate, setPartnerDate] = useState({
        "startDate": null,
        "endDate": null
    })

    const handlePartnerDate = (newDate) => {
        setPartnerDate(newDate)
    }

    useEffect(() => {
        setPartnerDate(dateSentToPartner)
        console.log(partnerDate);
    })

    return (
        <div className="flex flex-col md:w-1/3 md:mr-4">
                <p className='text-sm'>Data</p>
                <div className="flex items-center justify-center">
                <Datepicker 
                    primaryColor={"purple"}
                    inputClassName={"placeholder:text-gray-700 font-normal border rounded border-gray-200"}
                    useRange={false} 
                    asSingle={true} 
                    value={partnerDate} 
                    onChange={handlePartnerDate} 
                    displayFormat={"DD/MM/YYYY"} 
                    /> 
                </div>
            </div>
    )
}

export default DatePicker