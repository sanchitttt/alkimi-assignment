import { Dispatch, SetStateAction } from "react";
import Description from "../text/Description";

function Accordian({
    setSelectedTab, selectedTab, children, heading, idx }: {
        setSelectedTab: Dispatch<SetStateAction<number>>,
        selectedTab: number,
        children: React.ReactNode,
        heading: string,
        idx: number
    }) {
    return <div className='w-[100%] flex flex-col py-[15px]'>
        <div className={`bpDynamic flex justify-between  px-[30px] items-center pointer transition-all duration-1000 `}
            style={{ backgroundPosition: 'bottom', background: selectedTab === idx ? 'url("https://s3-alpha-sig.figma.com/img/a7d2/5388/73667319c05abc64d79b3edf20660ead?Expires=1688342400&Signature=Vp~iKoI0UMulVmCLVCneQVe~~gLqASbp51lwyN13--k9Cwj9ulRb~63vS9-l1to0cRbre~Olwgpfcb6XLYHIuD5WwX8YRVR1i~WT7rR2nqRrDt~tPRH6K8Jv~6hFPtjNhkuSRQNupNnNn1nQxNNRT47jx0lgPiP9TungLNBtKNMcLBdA04C-tIVfmWvjly9hIoUWzpcSwGnqTSlLB1WdJhbTOQq3Pu3RDFzufeEtyqDU-kVrIUM8z6k6PmCTF4cGhDZCjU4Kzj0L7dZfU9D4VFGpdlH4fcRC1DuEnyrVsMd8oAMq7FQC1FPC6eoIlNK~am3TYBCZri4zP~PtgzIoMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")' : '#000' }}
            onClick={() => setSelectedTab(idx)}
        >
            <div className='text-[24px] leading-[24px] uppercase text-[#fff] font-semibold'>{heading}</div>
            <div className='text-[24px]'>{selectedTab === idx ? '-' : '+'}</div>
        </div>
        <div className={`px-[30px] ${selectedTab === idx ? 'max-h-[300px] transition-all duration-1000 ease-in opacity-1' : 'opacity-0 transition-all duration-1000 ease-out overflow-hidden max-h-[0px]'}`}>
            <Description>{children}</Description>
        </div>
    </div>
}

export default Accordian;