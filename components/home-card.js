import { BsFillPeopleFill } from 'react-icons/bs';
import { BiCaretDownSquare, BiCog } from 'react-icons/bi';
import { MdOutlineRequestQuote } from 'react-icons/md';
import { GoVersions } from 'react-icons/go';
import { useState, useEffect } from 'react';

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://rms-cloud.pockethost.io');

const icons = {
    clients: BsFillPeopleFill,
    repairs: BiCog,
    quotes: MdOutlineRequestQuote,
    partners: GoVersions
  };

const HomeCard= ({icon, bgColor, textColor, text, number, table, company}) => {
  const [card, setCard] = useState([])
  const SelectedIcon = icons[icon]

  const getCard = async () => {
    try {
      const resultList = await pb.collection(`repairs`).getList(1, 50, {
        filter: `company = "${company}" && closed = false`,
      });
      setCard(resultList.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCard();
    console.log(card.length);
  }, []);

  if(card.length === 0) {
    <p>A carregar</p>
  }

  return (
    <div
        className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
        >
        <div className={`p-3 mr-4 rounded-full ${bgColor} ${textColor}`}>
            <SelectedIcon size={20} />
        </div>
        <div className='w-full'>
            <p
            className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 text-center"
            >
            {text}
            </p>
            <p
            className="text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center"
            >
            {table === "repairs" ? card.length : 'aaa'}
            </p>
        </div>
    </div>
  )
}

export default HomeCard