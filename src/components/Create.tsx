import React, {useState} from 'react'
import { Button } from './ui/button'
export default function Create() {
    const [blockchain, setblockchain] = useState("polkadot")
    const [questionId, setquestionId] = useState()
    const [question, setquestion] = useState("")
  return (
    <div className='max-w-7xl h-screen mx-auto  flex items-center justify-center'>
        <div className='w-2/5 border border-gray-700 min-h-[400px] p-4 rounded-lg'>
           <h1 className='text-center font-extrabold text-xl text-gray-300'>Only Whitelisted Admins can create Q / A</h1> 

            <div className='my-5'>
                <div className='flex flex-col gap-2 mb-4'>
                    <h3 className='text-gray-400'>Blockachin</h3>
                 <select value={blockchain} name='blockhain' onChange={e => setblockchain(e.target.value)}
                  className='w-full px-3 py-2 bg-inherit border focus:outline-none border-pink-600/25 rounded-lg'
                 >
                     <option value="polkadot" 
                     className='bg-inherit '
                     >Polkadot</option>
                     <option value="astar"
                        className='bg-inherit ' 
                     >Astar</option>
                 </select>
        </div> 

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
        <Button  className='w-full bg-pink-600/85'>Post Question</Button>

        </div>
        </div>
    </div>
  )
}
