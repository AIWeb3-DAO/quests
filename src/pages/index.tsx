import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/navbar/Header'
import Mint from '@/components/Mint'
import BottomNav from '@/components/BottomNav'
import HomePage from '@/components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen  ${inter.className}`}
    >
       <Header   />
      
  <HomePage   />
      <BottomNav  />
    </main>
  )
}
