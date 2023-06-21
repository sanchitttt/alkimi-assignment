'use client';

import React, { useState } from 'react'
import ExpandedNavbar from './ExpandedNavbar';
import HamburgerMenu from '@/components/icons/HamburgerMenu';
import Image from 'next/image';

function Mobile() {
    const [hamburgerClass, setHamburgerClass] = useState<"clicked" | "unclicked">("unclicked");
    const [menuClass, setMenuClass] = useState<"visible" | "hidden">("hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuClicked)
        if (!isMenuClicked) {
            setHamburgerClass('clicked');
            setMenuClass('visible');
        } else {
            setHamburgerClass('unclicked');
            setMenuClass('hidden');
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className='mobile:flex desktop:hidden items-center justify-between h-[50px]'>
            <div className='flex gap-[15px] px-[15px]'>
                <Image
                    src='logo.svg'
                    alt='logo'
                    width={30}
                    height={17.84}
                />
                <div className='font-medium text-[16px] leading-[22.64px]'>
                    Lorem
                </div>
            </div>
            <ExpandedNavbar className={menuClass} />
            <div className='absolute top-[10px] right-[10px] pt-[10px] pr-[60px]'>
                <HamburgerMenu className={hamburgerClass} onClick={toggleMenu} />
            </div>

        </div>
    )
}

export default Mobile