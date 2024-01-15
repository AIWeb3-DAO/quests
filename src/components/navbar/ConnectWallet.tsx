import React, {useState, useEffect} from 'react'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { allDefaultWallets, isWalletInstalled } from '@/wallets';
import { enableWallet } from '@/wallets';
export default function ConnectWallet() {
    const [isConnected, setisConnected] = useState(false)
    const [selectedExtension, setselectedExtension] = useState()

   /* 
    const handleConnectWallet = async  () => {
        const SubWalletExtension = window.injectedWeb3
        const extension = await SubWalletExtension.enable()
        setisConnected(extension)
        console.log("wallets", extension)
    }*/
    
    const  walletConnector = async (_wallet : any, appName : any) => {
      const extension = await enableWallet( _wallet, appName)
        setselectedExtension(extension)
        console.log("the extension ", extension)
        /*if (extension?.name === nightly?.id) {
          const accounts = (extension?.accounts as any)?.activeAccounts
          if (accounts?.length) updateAccounts(accounts, lastActiveAccountAddress)
          else throw new Error('No injected account found')
        }*/
   }
  return (
    <div>
   
        <Dialog>
  <DialogTrigger>
  <div className=' border py-2 px-4 rounded-xl cursor-pointer'>
        ConnectWallet
        </div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Connect wallet</DialogTitle>
      <DialogDescription>
       <div>
         {allDefaultWallets?.map((wallet, i) => (
            <div key={i} className='flex justify-between my-5 border border-gray-700 cursor-pointer py-2 rounded-lg px-2 items-center' onClick={() => walletConnector(wallet, "kabugu")}>
             <div  className='flex gap-2 items-center'> 
              <img   src={wallet.logoUrls[0]}  alt='logo'  className='w-9 h-9 rounded-full' />
              <p className='font-semibold'>{wallet.name}</p>
            </div>
               <p>{isWalletInstalled(wallet) ? "installed" : "install wallet"}</p>
            </div>
         ))}
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
  )
}
