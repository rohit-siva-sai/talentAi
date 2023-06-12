import Footer from '@/components/hire_developers/footer'
import Navbar from '@/components/home/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
