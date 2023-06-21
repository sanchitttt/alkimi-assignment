import Image from 'next/image'
import React from 'react'

function Description({ children, image }: { children: React.ReactNode, image?: string }) {
    return (
        <div className='flex flex-col mobile:gap-[15px] desktop:gap-[20px]'>
            <p className='mobile:max-w-[95%] mobile:text-[16px] desktop:text-[18px] font-normal opacity-[0.7] text-[#fff] leading-[30.25px] tracking-[-0.211px]'>
                {children}
            </p>
            {image && <Image
                src={image}
                alt='icon'
                width={20}
                height={20}
            />}
        </div>
    )
}

export default Description