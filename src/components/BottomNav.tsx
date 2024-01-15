import React from 'react'

export default function BottomNav() {
  return (
    <div className=' w-full h-9 fixed left-0 bottom-1 px-4 '>
        <div className='flex items-center justify-between'>
            <p className='text-xs font-semibold'>Copyright © 2023-2025 AIweb3</p>
            <div className='flex items-center gap-3'>
                <div>
                    <img src='https://bncs.io/images/twitter.svg'  />
                </div>
                <div>
                 <img src='https://bncs.io/images/docs.svg' className='' />
                 </div>
            </div>
        </div>
    </div>
  )
}
