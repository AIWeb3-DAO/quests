import { testQuestions } from '@/constant'
import React from 'react'
import QuestCard from './cards/QuestCard'
import {polkadot_key_format} from '../lib/functions'
export default function HomePage() {
  return (
    <div className='    max-w-7xl mx-auto w-full h-screen flex flex-wrap gap-3 cursor-pointer items-center justify-center'>

       <button className='py-2 px-4 bg-green-600 rounded-xl' onClick={() => polkadot_key_format("5H9LwTaf6B4iPT8m811oRWDBvkqCW9ZWDDU9vjGjPJJeRDjb", "substrate")}>testing function</button>
         {testQuestions?.map((quests, i) => (

           <QuestCard  key={i} quests={quests}  /> 
        
         ))}
    </div>
    
  )
}
