import { BsFillPeopleFill } from 'react-icons/bs';
import { BiCog } from 'react-icons/bi';
import { MdOutlineRequestQuote } from 'react-icons/md';
import { GoVersions } from 'react-icons/go';

const icons = {
    clients: BsFillPeopleFill,
    repairs: BiCog,
    quotes: MdOutlineRequestQuote,
    partners: GoVersions
  };

const HomeCard= ({icon, bgColor, textColor, text, number}) => {
    const SelectedIcon = icons[icon]
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
            {number}
            </p>
        </div>
    </div>
  )
}

export default HomeCard