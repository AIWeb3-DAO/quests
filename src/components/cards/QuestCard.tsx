import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Mint from '../Mint'

export default function QuestCard({quests} : any) {
  return (
    <>
    

 <Dialog>


 <DialogTrigger>
 <div  className='w-72 border border-gray-600 rounded-md flex flex-col flex-grow flex-shrink max-w-sm'> 
    <img src={quests?.logo} className='h-44'   />

 
      <div className='flex justify-between items-center px-2 my-2 text-sm '>
          <h1 className='text-gray-400'>${quests?.symbol}</h1>
           <h1 className='text-gray-400 text-sm'>{quests.name}</h1>

  </div>
  <div className='flex justify-between items-center px-2 my-2 text-sm '>
          <h1 className='text-gray-400 text-sm'>Created</h1>
           <h1 className='text-gray-400 text-sm'>{quests.createdAt}</h1>

  </div>
  <div className='flex justify-between items-center px-2 my-2 text-sm '>
          <h1 className='text-gray-400 text-sm'>Token Type</h1>
           <h1 className='text-gray-400 text-sm'>PBE-20</h1>

  </div>
    </div> 
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Mint</DialogTitle>
      </DialogHeader>
      <DialogDescription>
      <Mint  />
      </DialogDescription>
      
  </DialogContent>
  
    </Dialog>
    </> 
  )
}
