import Link from 'next/link'
import React from 'react'
import { ADMINS } from '@/constaants';
import { usePolkit } from 'polconnect';
export default function HederMenu() {
  const {activeAccount} = usePolkit()
  const isAdmin = (addressToCheck : any) => {
    return ADMINS.includes(addressToCheck);
  };
  return (
    <div className='flex gap-5  items-center justify-center flex-1'>
         <Link href={`/`} className='bg-gray-700/65 py-2 px-6 rounded-xl'>
           <p>Mint</p>
         </Link>
          {
  !isAdmin(activeAccount?.address) &&    <Link href={`/create`} className='bg-gray-800/60 py-2 px-6 rounded-xl hover:bg-gray-800/90'>
  <p>Create</p>
</Link >
          }
       
          <a href='https://app.gitbook.com/o/yZDgDmTZ5ZOLyqNjXXXy/s/uZHrGoFlOGogvVaNvsav/' className='bg-gray-800/60 py-2 px-6 rounded-xl hover:bg-gray-800/90'>
          Light paper
          </a>
         
    </div>
  )
}
