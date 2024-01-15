import React from 'react'
import HederMenu from './HederMenu'
import ConnectWallet from './ConnectWallet'

export default function Header() {
  return (
    <div className='flex justify-between max-w-7xl  py-8 sticky top-0 px-2 h-[60px] items-center mx-auto bg-black'>
         <div>
            <p>Ai web3 dao</p>
         </div>
         <HederMenu  />
          <ConnectWallet  />
    </div>
  )
}
