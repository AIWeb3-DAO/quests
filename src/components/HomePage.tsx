import { testQuestions } from '@/constant'
import React from 'react'
import QuestCard from './cards/QuestCard'
import Mint from './Mint'

export default function HomePage() {
  return (
    <div className='    max-w-7xl mx-auto w-full h-screen flex flex-wrap gap-3 cursor-pointer items-center justify-center'>


        {/*} {testQuestions?.map((quests, i) => (

           <QuestCard  key={i} quests={quests}  /> 
        
        ))}*/}

        <Mint  />
    </div>
    
  )
}
