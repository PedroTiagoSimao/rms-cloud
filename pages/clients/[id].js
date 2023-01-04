import React from 'react'

const Client = ({clientData}) => {
    console.log(clientData.items.company);
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center">Cliente</h4>
        {
            clientData.items.map((client) => {
                return (
                    <div key={client.id} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Nome</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Jane Doe"
                                defaultValue={client.name}
                                />
                        </label>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Jane Doe"
                                        defaultValue={client.email}
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Jane Doe"
                                        defaultValue={client.phone}
                                        />
                                </label>
                            </div>
                        </div>
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Morada</span>
                            <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Por definir"
                                defaultValue={client.address}
                                />
                        </label>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Cód. Postal</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        defaultValue={client.cp}
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Localidade</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        defaultValue={client.city}
                                        />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:mr-4'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Pessoa de Contacto</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        defaultValue={client.contact}
                                        />
                                </label>
                            </div>
                            <div className='flex flex-col md:w-1/2'>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">NIF</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Por definir"
                                        defaultValue={client.nif}
                                        />
                                </label>
                            </div>
                        </div>
                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">
                            Empresa
                            </span>
                            <select
                            className="block w-1/2 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                            >
                            <option>$1,000</option>
                            <option>$5,000</option>
                            <option>$10,000</option>
                            <option>$25,000</option>
                            </select>
                        </label>
                    </div>
                )
            })
        }
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
    const {id} = context.query
    const resClient = await fetch(`https://rms-cloud.pockethost.io/api/collections/clients/records?filter=(id=%27${id}%27)`)
    const clientData = await resClient.json()
    return {
      props: {
        clientData
      },
    }
  }
  

export default Client