import Link from 'next/link'
import React from 'react'

export default function HederMenu() {
  return (
    <div className='flex gap-5 font-mono font-light items-center'>
         <Link href={`/`}>
           <p>Market place</p>
         </Link>
      
         <Link href={`/create`}>
           <p>Create</p>
         </Link>
          <a href='https://app.gitbook.com/o/yZDgDmTZ5ZOLyqNjXXXy/s/uZHrGoFlOGogvVaNvsav/'>
          Light paper
          </a>
         
    </div>
  )
}
