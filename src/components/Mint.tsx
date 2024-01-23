//@ts-nocheck

import React, {useState} from 'react'
import { Button } from './ui/button'
import { usePolkit } from 'polconnect'
import { Keyring, ApiPromise, WsProvider  } from "@polkadot/api";
import { u8aToHex } from '@polkadot/util';
const { stringToHex } = require('@polkadot/util')
const keyring = new Keyring({ type: 'sr25519' })
export default function Mint() {
  const [answerTxt, setanswerTxt] = useState()
  const {accounts, activeAccount, activeSigner, api} = usePolkit()

   const handleMint = async () => {

    const tx_remark = api?.tx.system.remark(
      stringToHex(
        JSON.stringify(
          {
            "p": "drc-20-a",
            "op": "mintAnswer",
            "space":"aiweb3-AMA",
            "questionID": "1",
            "answer":  answerTxt,
                   
          }
        )
      )

    )

      // "batchAll" can submit multi-event in a single tx. 
  try  {
    //  const tx_batchAll = await api?.tx.utility.batchAll(
    const tx_batchAll = await api?.tx.system?.remark(
    [tx_remark]
    ).signAndSend(
      // active  account from polconnect  
    activeAccount.address, { signer: activeSigner }, ({ status }) => {
      if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`);
      } else {
          console.log(`Current status: ${status.type}`);
      }
  }).catch((error: any) => {
      console.log(':( transaction failed', error);
  });

    
  } catch(error){
    alert(`something went wrong, ${error}`)

    }
   }
  return (
    <div className=' flex items-center h-screen  justify-center bg-black text-gray-300'>
      <div className='w-full min-h-80 flex flex-col items-center justify-center'>
        {/*}
         <div className='flex items-center gap-9 border border-gray-600 py-6 px-2 w-full rounded-lg'>
           <div className=''>
          <p>AWD</p>
            </div>
            <div className='flex gap-5 w-full justify-between'>
              <div className='text-center flex items-center justify-center flex-col'>
                <h1 className=' text-gray-400 my-1'>Total Supply</h1>
                <p className=' dark:text-gray-100  font-mono font-medium'>9,993,619,317</p>
              </div>
              <div className='text-center flex items-center justify-center flex-col'>
                <h1 className=' text-gray-400 my-1'>Per Block</h1>
                <p className=' dark:text-gray-100  font-mono font-medium'>625,000</p>
              </div>
              <div className='text-center flex items-center justify-center flex-col'>
                <h1 className=' text-gray-400 my-1'>Total Supply</h1>
                <p className=' dark:text-gray-100  font-mono font-medium'>9,993,619,317</p>
              </div>
            </div>
         </div>

         <div className='flex items-center gap-9 border border-gray-600 my-8 py-6 px-2 w-full rounded-lg'>
          
            <div className='w-full'>
               <div className='flex justify-between w-full'>
                 <p className='font-serif font-medium'>Mint progress  <span className='text-red-400 ml-3'>Ended</span></p>
                  <p className='dark:text-gray-500 text-sm'>Holders <span className=' font-sans text-sm text-gray-100'>22,00</span></p>
               </div>

                <div className='mt-8 flex items-center justify-between'>
                   <div className='w-[50%] rounded-lg bg-pink-600 h-1.5'></div>
                   <div>
                    <p className='text-sm'>9,993,619,317 / <span className='dark:text-gray-400'>993,619,31</span></p>
                   </div>
                </div>
            </div>
         </div>
  */}
   <div className='flex items-center  border border-gray-600 py-6 px-2 w-full rounded-lg flex-col gap-4'>
     <h1 className='text-2xl font-bold'>Question</h1>
     <h2 className='font-semibold'>What is the most popular Chinese community in polkadot ecosystem</h2>
   </div>
         <div className='flex flex-col items-center gap-9 border my-6 border-gray-600 py-6 px-2 w-full rounded-lg min-w-[500px]'>
          {/*}
          <div>
           <h1 className='font-semibold mb-2'>Mint text</h1>
            <p>{`"p":"bncs-20","op":"mint","tick":"BNCS"`}</p>
            <h1 className='font-semibold my-3'>Call data</h1>
            <p>

0x0007a47b2270223a22626e63732d3230222c226f70223a22 <br /> 6d696e74222c227469636b223a22424e4353227d
</p>

         </div>
  */}

   <textarea
    value={answerTxt}
    onChange={e => setanswerTxt(e.target.value)}
     className='w-full h-20 resize-none bg-inherit border border-pink-600/65 rounded-md p-1 px-3 active:border-red-600 focus:outline-none placeholder:text-gray-400 placeholder:text-xs'
   placeholder='Type your  answer here '

  />

    <Button  className='w-full bg-pink-600/85' disabled={!activeAccount} onClick={() => handleMint()}>Mint</Button>
          
         </div>
      </div>
    </div>
  )
}
