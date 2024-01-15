import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {PolkitProvider} from 'polconnect'
import { astar } from 'polconnect'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <PolkitProvider theme={{appearence : {
    mode : "dark",
  }}} appName='aiweb3 dao'
  defaultChain={astar}
  >
    <Component {...pageProps} />
  </PolkitProvider>
  )
}
