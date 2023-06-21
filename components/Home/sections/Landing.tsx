import Description from '@/components/text/Description'
import Heading from '@/components/text/Heading'
import SectionHeading from '@/components/text/SectionHeading'
import Image from 'next/image'
import React from 'react'

function Landing() {
    return (
        <section
            className='desktop:mt-[200px] mobile:mt-[100px] desktop:max-w-[1475px] mobile:max-w-[95%] w-[100%] desktop:grid desktop:grid-rows-3 desktop:gap-[25px] desktop:grid-cols-3  desktop:grid-rows-7  mobile:flex mobile:flex-col mobile:gap-[50px]'
        >
            <div className='div1'>
                <SectionHeading>
                    Lorem Ipsum
                </SectionHeading>
            </div>
            <div className="div2">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/5.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
            <div className="div3">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/6.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
            <div className="div4">
                <Image
                    src='/1.png'
                    className='mobile:w-[100%] mobile:h-[410px]'
                    alt='img'
                    width={410}
                    height={410}
                />
            </div>
            <div className="div5">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/7.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>

            </div>
            <div className="div6">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/8.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
            <div className="div7">
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/9.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
            <div className="div8">
            <Image
                src='/2.png'
                width={'410'}
                height={'410'}
                alt={'img'}
            />
            </div>
            <div className='div9'>
                <Heading>Lorem Ipsum</Heading>
                <Description image={'/10.png'}>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo</Description>
            </div>
        </section>

    )
}

export default Landing