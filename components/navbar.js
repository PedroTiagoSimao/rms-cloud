import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiCog } from 'react-icons/bi';
import { MdOutlineRequestQuote } from 'react-icons/md';
import { GoVersions } from 'react-icons/go';



const Navbar = () => {
  const [active, setActive] = useState()
  const router = useRouter()
  
  useEffect(() => {
    setActive(router.pathname)
  })
  

  return (
    <aside
        className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link href={'/'} className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
            RMS - Reparações
          </Link>
          <ul className="mt-6">
            <div className="px-6 my-6">
              <Link href={'/dashboard/clients/add-client'}>
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Novo Cliente
                <span className="ml-2" aria-hidden="true">+</span>
              </button>
              </Link>
            </div>
            <li className={`relative px-6 py-3 ${active === '/' ? '[&>a]:text-gray-800 [&>a]:dark:text-gray-500' : '[&>span]:hidden'}`}>
              <span
              className={`absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg`}
              aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                href={'/dashboard'}
              >
                <AiOutlineHome size={20} />
                <span className="ml-4">Inicio</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={`relative px-6 py-3 ${active === '/clients' ? '[&>a]:text-gray-800 [&>a]:dark:text-gray-500' : '[&>span]:hidden'}`}>
              <span
              className={`absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg `}
              aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href={'/dashboard/clients'}
              >
                <BsFillPeopleFill size={20} />
                <span className="ml-4">Clientes</span>
              </Link>
            </li>
            <li className={`relative px-6 py-3 ${active === '/repairs' ? '[&>a]:text-gray-800 [&>a]:dark:text-gray-500' : '[&>span]:hidden'}`}>
              <span
              className={`absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg`}
              aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href={'/dashboard/repairs'}
              >
                <BiCog size={20} />
                <span className="ml-4">Reparações</span>
              </Link>
            </li>
            <li className={`relative px-6 py-3 ${active === '/quotes' ? '[&>a]:text-gray-800 [&>a]:dark:text-gray-500' : '[&>span]:hidden'}`}>
              <span
              className={`absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg`}
              aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href={'/dashboard/quotes'}
              >
                <MdOutlineRequestQuote size={20} />
                <span className="ml-4">Orçamentos</span>
              </Link>
            </li>
            <li className={`relative px-6 py-3 ${active === '/products' ? '[&>a]:text-gray-800 [&>a]:dark:text-gray-500' : '[&>span]:hidden'}`}>
              <span
              className={`absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg`}
              aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href={'/dashboard/products'}
              >
                <GoVersions size={20} />
                <span className="ml-4">Produtos</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Navbar