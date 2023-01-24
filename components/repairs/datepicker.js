import { useState, useEffect, forwardRef } from "react"
import PocketBase from "pocketbase"
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css"

const pb = new PocketBase('https://rms-cloud.pockethost.io')
pb.autoCancellation(false)

const PartnerDatePicker = ({ repairID, dateSentToPartner }) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))

    useEffect(() => {
        if (startDate > endDate) setStartDate(endDate)
    }, [endDate])

    useEffect(() => {
        if (startDate > endDate) setEndDate(startDate)
    }, [startDate])


    return (
        <div className="flex flex-col md:w-1/3 md:mr-4">
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-1'>Data</p>
                <div className="flex items-center justify-center">

                <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-left"
                        renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="flex items-center justify-between px-2 py-2">
                                <span className="text-lg text-gray-700">
                                    {format(date, 'MMMM yyyy')}
                                </span>

                                <div className="space-x-2">
                                    <button
                                        onClick={decreaseMonth}
                                        disabled={prevMonthButtonDisabled}
                                        type="button"
                                        className={`
                                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                                    >
                                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                                    </button>

                                    <button
                                        onClick={increaseMonth}
                                        disabled={nextMonthButtonDisabled}
                                        type="button"
                                        className={`
                                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                                    >
                                        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        )}
                    />

                </div>
            </div>
    )
}

export default PartnerDatePicker