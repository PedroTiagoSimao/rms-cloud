import { useState, useEffect } from "react"
import PocketBase from "pocketbase"

const pb = new PocketBase('https://rms-cloud.pockethost.io')
pb.autoCancellation(false)

const PartnerCheckBox = ({ repairID, currentSentToPartner }) => {
    const [value, setValue] = useState("");

    const handleCheckbox = (e) => {
        setValue(e.target.checked);
    };

    useEffect(() => {
        const updateSentToPartner = async () => {
            const data = {
                "sent_to_partner" : value
            }

            const record = await pb.collection('repairs').update(repairID, data)
        }

        updateSentToPartner()

      }, [value]);

    return (
        <div className='flex flex-col md:w-1/3 md:mr-4 md:mt-1'>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-1'>Parceiro</p>
            <div className="tems-center justify-center h-fit">
                <label className="inline-flex items-center text-sm">
                    <input
                    type="checkbox"
                    name="sent_to_partner"
                    defaultChecked={currentSentToPartner}
                    onChange={(e) => handleCheckbox(e)}
                    className="w-8 h-8 text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    />
                    <span className="text-gray-700 dark:text-gray-400 ml-1 text-lg">Envidado para parceiro</span>
                </label>
            </div>
        </div>
    )
}

export default PartnerCheckBox