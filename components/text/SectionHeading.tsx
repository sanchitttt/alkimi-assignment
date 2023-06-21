import React from 'react'

function SectionHeading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={'desktop:text-[120px] mobile:text-[40px] desktop:leading-[110.4px] mobile:leading-[38.6px] uppercase font-bold text-[#fff] ' + className}>
            {children}
        </h1>
    )
}

export default SectionHeading