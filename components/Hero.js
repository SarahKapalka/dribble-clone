import Image from 'next/image'
import Arrow from './svg/Arrow'
import Clients from './svg/Clients'
import Market from './svg/Market'

export default function Hero() {
  return (
    <div>
      <div className="rounded-lg flex justify-between bg-[rgba(255,250,231,250)] h-[500px] md:ml-8 mt-[75px] shadow-[0px_0px_30px_20px_rgba(255,250,231,250)]">
        <div className="py-12 sm:py-[100px] xl:pl-[150px] px-10 md:pl-[100px]">
          <div className="font-black sm:font-bold text-6xl max-w-[550px]">
            Academy
            <Arrow />
            <div>of Your Business</div>
          </div>
          <div className="py-9 text-lg max-w-[550px] text-gray-700 font-medium">
            Organizes work so teams know what to do, why is matters, and how to get it done.
          </div>
          <div className="font-bold text-[14px] flex gap-2 items-center py-3 flex-wrap">
            <button className="bg-[#ffb1a6] py-[10px] px-[16px] rounded-md mr-5 hover:bg-red-200 transitation-2 transition-all">Get Started</button>
            <div className="flex items-center gap-2">
              <button className="bg-black rounded-full p-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
              <a href="#">View Demo</a>
            </div>
          </div>
        </div>
        <div className="w-[22vw] bg-black h-[500px] hidden md:block lg:hidden">{' '}</div>
        <div className="flex-col justify-center items-center w-[22vw] xl:w-[25vw] bg-black h-[500px] absolute right-0 hidden lg:block">
          <Image src="/girl.jpg" height={370} width={370} className="absolute inset-y-1/2 left-0 translate-y-[-50%] translate-x-[-50%] rounded-full shadow-[0px_0px_50px_1px_rgba(0,0,0,0.15)]" />
          <Clients />
          <Market />
          <img src="Frame.png" className='h-[50px] relative top-[-45%] left-[-50%]'/>
        </div>
      </div>
      
    </div>
    
  )
}

