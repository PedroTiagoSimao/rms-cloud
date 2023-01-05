import Link from 'next/link'
import { useEffect, useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs'

const ListClients = ({clients, pagination}) => {

  return (
    <>
        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center"><BsFillPeopleFill size={30} className='mr-2' />Clientes</h4>
        <div className="w-full mb-8 md:mb-16 overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <th className="px-4 py-3">Nome/Empresa</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Telefone</th>
                      <th className="px-4 py-3">Reparações</th>
                      <th className="px-4 py-3">Enviar</th>
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                      {
                        clients.map((client) => {
                          return(
                            <tr key={client.id} className="text-gray-700 dark:text-gray-400 hover:bg-slate-200">
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                  <div>
                                    <Link href={`/clients/${client.id}`}>
                                    <p className="font-semibold">{client.name}</p>
                                    <p className='text-xs'>{client.company}</p>
                                    </Link>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">
                              {client.email}
                              </td>
                              <td className="px-4 py-3 text-sm">
                              {client.phone}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                1/2 abertas
                              </td>
                              <td className="px-4 py-3 text-sm">
                                Email / SMS
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
              </div>
              <div
                className={`grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800 ${pagination ? '' : 'hidden'}`}>
                <span className="flex items-center col-span-3">
                  A mostrar 21-30 de 100
                </span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                      <li>
                        <button
                          className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Previous">
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20">
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          3
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <span className="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          9
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Next"
                        >
                          <svg
                            className="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
            </div>
        </div>
    </>
  )
}

export default ListClients