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
        <ul className='flex  flex-col gap-[20px] justify-start w-[100%] px-[30px]'>
          {navbarItems.map((item, idx) => {
            return <li key={idx} className={'uppercase text-[18px] font-bold leading-[18px] text-[#fffff] ' + className}>
              {item}
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default ExpandedNavbar