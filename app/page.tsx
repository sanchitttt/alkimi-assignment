import AboutDesktop from "@/components/Home/sections/about/desktop";
import AboutMobile from '@/components/Home/sections/about/mobile';
import FourthSection from "@/components/Home/sections/FourthSection";
import Landing from "@/components/Home/sections/Landing";
import ThirdSection from "@/components/Home/sections/ThirdSection";
import Divider from "@/components/divider";


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center '>
      <Landing />
      <div className='mobile:hidden desktop:flex w-[100%] mt-[-150px] flex items-center justify-center'>
        <AboutDesktop />
      </div>
      <div className='desktop:hidden w-[100vw]  mobile:flex items-center justify-center'>
        <AboutMobile />
      </div>


      <div className='desktop:mt-[-100px] mobile:mt-[100px]'>
        <Divider />
      </div>
      <ThirdSection />
      <FourthSection />


    </main >
  )
}
