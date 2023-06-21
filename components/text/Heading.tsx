import React from 'react'

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className='text-[24px] uppercase font-bold font-normal  text-[#fff] leading-[29px] tracking-[-0.211px]'>
            {children}
        </h1>
    )
}

export default Heading