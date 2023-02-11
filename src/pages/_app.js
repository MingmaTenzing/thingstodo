import '@/styles/globals.css'
import {Inter} from '@next/font/google'

const roboto = Inter({subsets: ['latin'],
weight:['100', '300', '200', '400', '500', '600', '700', '800', '900']})

export default function App({ Component, pageProps }) {
  return (
  <main className={roboto.className}>
    <Component {...pageProps} />
  </main>
  )
}
