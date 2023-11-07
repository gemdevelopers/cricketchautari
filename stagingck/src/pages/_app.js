import '@/assets/css/tailwind.css'
import Navbar from '@/components/Nav/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
