import Description from '@/components/text/Description'
import SectionHeading from '@/components/text/SectionHeading'
import React from 'react'

function About() {
    return (
        <section className='mt-[100px] max-w-[95vw] w-[100%]  items-start flex flex-col'>
            <SectionHeading>
                Lorem Ipsum
            </SectionHeading>
            <div className='flex flex-col gap-[5px] mt-[15px]'>
                <div className='text-[18px] leading-[30.24px] tracking-[-0.21px] font-normal opacity-[0.7]'>Instagram</div>
                <div className='text-[18px] leading-[30.24px] tracking-[-0.21px] font-normal opacity-[0.7]'>Linkedin</div>
            </div>
            <div className='mt-[50px]'>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Description>
            </div>
        </section>

    )
}

export default About