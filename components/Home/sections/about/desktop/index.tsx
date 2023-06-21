'use client'

import Description from '@/components/text/Description'
import SectionHeading from '@/components/text/SectionHeading'
import React, { useState } from 'react'
import image3 from '../../../public/3.png';
import Image from 'next/image';

function About() {
    const [isHovered, setIsHovered] = useState(false);
    const [imageClass, setImageClass] = useState<'nonHovered' | 'hovered'>('nonHovered');



    return (
        <section className=' about-us-container relative mt-[0px] desktop:max-w-[1440px] desktop:mt-[600px] mobile:max-w-[95%] w-[100%] items-start flex desktop:justify-between mobile:flex-col  desktop:flex-row desktop:h-[859px]'
            onMouseOver={() => {
                setIsHovered(true)
                setImageClass('hovered');
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                setImageClass('nonHovered')
            }}
        >
            <div className=''>
                <SectionHeading>
                    About
                    <span className='desktop:inline mobile:hidden'>
                        <br />
                    </span> Us
                </SectionHeading>
            </div>
            <div className=' max-w-[575px] mt-[150px] flex items-center'>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Description>
            </div>
            <Image
                src='/3.png'
                className={imageClass + ' about-us-bg transition-all duration-1000 ease-in'}
                width={1440}
                height={662}
                alt={'img'}
            />
        </section>
    )
}

export default About