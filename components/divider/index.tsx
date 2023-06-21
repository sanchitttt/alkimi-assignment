import React from 'react'

const mockItemsDesktop = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
]
const mockItemsMobile = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum'
]


function Divider({ }) {
    return (
        <>
            {/**Desktop */}
            <div className='divider-container desktop:flex mobile:hidden gap-[15px] w-[100vw] overflow-hidden h-[50px] items-center justify-center'
            >
                <div className='w-[100%] flex h-[100%] items-center justify-between'
                >
                    {mockItemsDesktop.map((item, idx) => {
                        return <span key={idx} className='uppercase marquee-effect'>
                            {item}
                        </span>
                    })}
                    {mockItemsDesktop.map((item, idx) => {
                        return <span key={idx} className='uppercase mobile:hidden desktop:inline marquee-effect'>
                            {item}
                        </span>
                    })}

                </div>
            </div>
            {/**Mobile */}
            <div className='desktop:hidden mobile:flex gap-[15px] w-[100vw] overflow-hidden h-[50px] items-center justify-center'
                style={{ background: 'linear-gradient(to right, transparent, transparent 5%, transparent 85%, black),linear-gradient(to left, transparent, transparent 5%, transparent 85%, black), url("https://s3-alpha-sig.figma.com/img/a7d2/5388/73667319c05abc64d79b3edf20660ead?Expires=1688342400&Signature=Vp~iKoI0UMulVmCLVCneQVe~~gLqASbp51lwyN13--k9Cwj9ulRb~63vS9-l1to0cRbre~Olwgpfcb6XLYHIuD5WwX8YRVR1i~WT7rR2nqRrDt~tPRH6K8Jv~6hFPtjNhkuSRQNupNnNn1nQxNNRT47jx0lgPiP9TungLNBtKNMcLBdA04C-tIVfmWvjly9hIoUWzpcSwGnqTSlLB1WdJhbTOQq3Pu3RDFzufeEtyqDU-kVrIUM8z6k6PmCTF4cGhDZCjU4Kzj0L7dZfU9D4VFGpdlH4fcRC1DuEnyrVsMd8oAMq7FQC1FPC6eoIlNK~am3TYBCZri4zP~PtgzIoMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")', backgroundPosition: 'left' }}
            >
                <div className='w-[100%] flex h-[100%] items-center justify-between'
                >
                    {mockItemsMobile.map((item, idx) => {
                        return <span key={idx} className='marquee-effect uppercase'>
                            {item}
                        </span>
                    })}
                    {mockItemsMobile.map((item, idx) => {
                        return <span key={idx} className='mobile:hidden desktop:inline uppercase  marquee-effect'>
                            {item}
                        </span>
                    })}

                </div>
            </div>
        </>
    )
}

export default Divider;