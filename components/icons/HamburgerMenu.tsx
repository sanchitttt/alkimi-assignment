import React from 'react'

const HamburgerMenu = ({ className, onClick }: { className: string, onClick: React.MouseEventHandler<HTMLDivElement> }) => {
  return <div className=' flex flex-col z-[1000] h-[24px] gap-[5px] w-[24px] items-center justify-center'
  style={{transform:'translate(0px,-8px)'}}
  >
    <div className={'burger-bar w-[24px] h-[7px] rounded-full bg-white ' + className}
      onClick={onClick}
    />
    <div className={'burger-bar w-[24px] h-[7px] rounded-full bg-white ' + className}
      onClick={onClick}
    />
  </div>
}

export default HamburgerMenu;
