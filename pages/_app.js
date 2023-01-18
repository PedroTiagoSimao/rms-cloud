import '../styles/globals.css'
import DefaultLayout from '../components/layouts/default'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}