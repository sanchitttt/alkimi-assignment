import Divider from '@/components/divider'
import Link from 'next/link'
import React from 'react'

const navbarItems = [
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
]

function ExpandedNavbar({ className }: { className: string }) {
  return (
    <>
      <div className={'revealDown transition-all ease-in-out navExpanded menu w-[100vw] h-[calc(100vh-100px)] flex absolute bottom-[0] left-[0] items-center justify-center z-[1000] bg-[#000] ' + className}>
        <ul className='flex  flex-col gap-[20px] justify-start w-[95%] mt-[-100px]'>
          {navbarItems.map((item, idx) => {
            return <Link href={item} key={idx}>
              <li className={'uppercase text-[18px] font-bold leading-[18px] text-[#fffff] ' + className}>
                {item}
              </li>
            </Link>
          })}
          <li className={'flex justify-between uppercase text-[18px] font-bold leading-[18px] text-[#fffff] opacity-[0.4] ' + className}>
            <div> {'Lorem Ipsum'}</div>
            <div>{'Coming Soon'}</div>
          </li>
        </ul>
        <div className='absolute bottom-0 left-0 w-[100%]'>
          <Divider></Divider>
        </div>
      </div>
    </>
  )
}

export default ExpandedNavbar