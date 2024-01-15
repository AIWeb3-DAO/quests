import React from 'react'
import { ConnectButton, usePolkit } from 'polconnect'
export default function ConnectWallet() {
  const {handleConnectModal, handleWalletConnect} = usePolkit()
  return (
    <div className='flex gap-5'>
 <ConnectButton backGround='pink' label='connect wallet' showChain={false}   />
    </div>
   


  )
}
