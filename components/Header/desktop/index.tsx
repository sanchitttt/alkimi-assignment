import Image from 'next/image';
import React from 'react'

function Desktop() {
    return (
        <div className='mobile:hidden desktop:flex  items-center justify-between w-[100vw] h-[50px]'>
            <div className='flex gap-[15px] px-[15px]'>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={30}
                    height={17.84}
                />
                <div className='font-medium text-[16px] leading-[22.64px]'>
                    Lorem
                </div>
            </div>

        </div>
    )
}

export default Desktop;