import '@/styles/globals.css'
import {Inter} from '@next/font/google'
import store from  "../../store.js"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const roboto = Inter({subsets: ['latin'],
weight:['100', '300', '200', '400', '500', '600', '700', '800', '900']})

let persistor = persistStore(store)

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >

  <main className={roboto.className}>
     

    <Component {...pageProps} />
 
  </main>
  </PersistGate>
  
  </Provider>
  )
}
