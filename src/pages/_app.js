import '@/styles/globals.css'
import {Inter} from '@next/font/google'
import store from  "../../store.js"
import { Provider } from 'react-redux'



const roboto = Inter({subsets: ['latin'],
weight:['100', '300', '200', '400', '500', '600', '700', '800', '900']})

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>

  <main className={roboto.className}>
     

    <Component {...pageProps} />
 
  </main>
  </Provider>
  )
}
