import { useState, useEffect } from "react"
import PocketBase from "pocketbase"

const pb = new PocketBase('https://rms-cloud.pockethost.io')

const Partners = ({repairID, organizationID, repairPartnerID}) => {
    const [partners, setPartners] = useState([])
    const [selectedPartner, setSelectedPartner] = useState()

    const getPartners = async () => {
        let url = `https://rms-cloud.pockethost.io/api/collections/partners/records?filter=(organizationID=%27${organizationID}%27)`
    
        try {
        const res = await fetch(url)
        const data = await res.json()
        setPartners(data.items)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(!organizationID) {
            return
        }

        getPartners()
        setSelectedPartner(repairPartnerID || 'DEFAULT')
    }, [])

    const updatePartnerID = async (e) => {
        setSelectedPartner(e.target.value)

        e.preventDefault()
        const data = {
            "partner": e.target.value,
        };
        
        const record = await pb.collection('repairs').update(repairID, data);
    }

  return (
    <select className=" w-full text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
        value={selectedPartner}
        onChange={(e) => updatePartnerID(e)}>
            <option value={'DEFAULT'}>Escolha um parceiro...</option>
        {
            partners.map((partner,i) => {
                return (
                <option key={i} value={partner.id}>{partner.name}</option>
                )
            })
        }
    </select>
  )
}

export default Partners