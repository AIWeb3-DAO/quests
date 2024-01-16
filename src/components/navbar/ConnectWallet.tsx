import React from 'react'
import { ConnectButton, usePolkit } from 'polconnect'
export default function ConnectWallet() {
  const {handleConnectModal, handleWalletConnect} = usePolkit()
  return (
    <div className=''>
 <ConnectButton backGround='pink' label='connect wallet' showChain={false}   />
    </div>
   


  )
}
