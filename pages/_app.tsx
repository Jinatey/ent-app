import '@/styles/globals.css'
import { Sidebar } from '@/components/Sidebar'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className=' bg-lime-900' >
      <div className="gridd max-md:block">

      
      <div className=" ">
        <Sidebar/>
      </div>
      <Component {...pageProps} />
      </div>
    </div>
  ) 
}
