import Divider from '@/components/divider'
import Description from '@/components/text/Description'
import Heading from '@/components/text/Heading'
import SectionHeading from '@/components/text/SectionHeading'
import Image from 'next/image'
import React from 'react'

function ThirdSection() {
    return (
        <section
            className='mobile:mt-[100px] desktop:mt-[100px] desktop:max-w-[1475px]  mobile:max-w-[95%] w-[100%] desktop:grid desktop:gap-[25px]  desktop:grid-rows-3 h-auto mobile:flex mobile:flex-col mobile:gap-[50px]'
        >
            <div className="thirdSection-div1">
                <SectionHeading>Lorem Ipsum Dolor Set</SectionHeading>
            </div>
            <div className="thirdSection-div2">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/11.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
            <div className="thirdSection-div3">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/12.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
            <div className="thirdSection-div4">
                <Image
                    src='/4.png'
                    width={410}
                    height={410}
                    alt={'img'}
                />
            </div>
            <div className="thirdSection-div5">
                <Heading>Lorem Ipsum</Heading>
                <Description  image={'/13.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
        </section>
    )
}

export default ThirdSection