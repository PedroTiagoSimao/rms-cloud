import Head from 'next/head'
import Navbar from './navbar'
import Topbar from './topbar'

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <title>RMS - Reparações</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <div className="flex flex-col flex-1 w-full">
            <Topbar />
            {children}
          </div>
        </div>
      </>
    )
  }