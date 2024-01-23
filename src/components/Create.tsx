//@ts-nocheck

import React, {useState} from 'react'
import { Button } from './ui/button'
import { Keyring, ApiPromise, WsProvider  } from "@polkadot/api";
import { u8aToHex } from '@polkadot/util';
import { usePolkit } from "polconnect";
const keyring = new Keyring({ type: 'sr25519' })
const { stringToHex } = require('@polkadot/util')
export default function Create() {
    const [blockchain, setblockchain] = useState("polkadot")
    const [questionId, setquestionId] = useState("")
    const [question, setquestion] = useState("")

  const {isConnected, accounts, activeSigner, activeAccount, activeExtension, api, activeChain} = usePolkit()

   console.log("the connected  accounts",  activeSigner)
   const signRaw = activeSigner?.signRaw;
    const polkadot_key_format = (from, to) => {
      let public_key
      // when "from" is not correct, this will return a zero address (new Uint8Array(32))
      // this is convient for test, e.g., u wanna generate a zero address with different format
      if (!from || from === null || from === undefined || from === ''){
      
          public_key =  new Uint8Array(32)
  
          console.log("the public key", public_key)
         
      }else{
          public_key = keyring.decodeAddress(from)
          console.log("the public key", public_key)
  
          
      }
       
      switch (to) {
          // For tx about XCM crosschain, it always requires a account32, i.e., to = "public_key" in this function.
          // This is crucial, wrong format will leads to asset loss during the XCM process. I have lost a lot....
          case 'public_key': {
              return u8aToHex(public_key)
          }
          // For most tx, "to" = "substrate". 
          case 'substrate': {
              return keyring.encodeAddress(public_key, 42) 
          }
          // Only for some special cases, "to" = "relay" 
          case 'relay':{
              return keyring.encodeAddress(public_key, 0) 
          }
      }
  }
  // Because when the account will be killed if DOT < 1. So, we use the transferKeepAlive to avoid such issue. 
  
   

  // SAVE QUEST TO DB
    const  handleSave = async (hash ) =>  {
          
 const CREATE_TO_DB_URL = "http://url:1986/create_quest_in_database" 

 const data = JSON.stringify({
  "network":"Astar",
  "space":"testing space",
  "question_ID":1,
  "question": "this  is testing quests",
  "deploy_hash": hash
})
const response = await fetch(CREATE_TO_DB_URL, data)

console.log("this is saved inscriprition", response)
    }

   
  
  
    const handlCreate = async () => {

   


  
  const tx_tranfer_to_self = api?.tx.balances.transferKeepAlive(polkadot_key_format(activeAccount?.address, 'public_key'), "0")
  // For now, wo use the call "remark" to store the inscription data(Always JSON format). Here, it requires Hex data.
  // Here, "formState" dynamically records the content in figure 2.
  const tx_remark = api?.tx.system.remark(
                    stringToHex(
                      JSON.stringify(
                        {
                          "p": "drc-20-a",
                          "op": "deployQuestion",
                          "space":"aiweb3-AMA",
                          "questionID": "1", 
                          "question": "hello world",
                                
                        }
                      )
                    )
  
                  )

  try  {
    const tx_batchAll = await api?.tx.system?.remark(
    [tx_tranfer_to_self,tx_remark]
    ).signAndSend(
      // active  account from polconnect  
    activeAccount.address, { signer: activeSigner }, ({ status }) => {
      if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`);

          // handle save quest to db
          
          handleSave(status.asInBlock.toString())
      } else {
          console.log(`Current status: ${status.type}`);
      }
  }).catch((error: any) => {
      console.log(':( transaction failed', error);
  });

    
  } catch(error){
    alert(`something went wrong, ${error}`)

    }}
  return (
    <div className='max-w-7xl h-screen mx-auto  flex items-center justify-center'>
        <div className='w-2/5 border border-gray-700 min-h-[400px] p-4 rounded-lg'>
           <h1 className='text-center font-extrabold text-xl text-gray-300'>Only Whitelisted Admins can create Q / A</h1> 
  
            <div className='my-5'>
           
  
        <div className='flex flex-col gap-2 mb-4'>
                    <h3 className='text-gray-400'>Question Id</h3>
                 <input value={questionId} name='blockhain' onChange={e => setquestionId(e.target.value)}
                  className='w-full px-3 py-2 bg-inherit border focus:outline-none border-pink-600/25 rounded-lg placeholder:text-xs'
                  placeholder='Question Id'
                 />
                    
        </div> 


        <div className='flex flex-col gap-2 mb-4'>
                    <h3 className='text-gray-400'>Question </h3>
                 <textarea value={question} name='blockhain' onChange={e => setquestion(e.target.value)}
                  className='w-full px-3 py-2 bg-inherit border focus:outline-none border-pink-600/25 rounded-lg placeholder:text-xs h-28'
                  placeholder='Question '
                 />
                    
        </div> 
        <Button  className='w-full bg-pink-600/85' onClick={() => handlCreate()} disabled={!isConnected && !activeAccount}>Post Question</Button>

        </div>
        </div>
    </div>
  )
}
