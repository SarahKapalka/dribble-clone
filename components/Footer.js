import Logo from "./svg/Logo";
import Darkblock from "./svg/Darkblock";

const data =[
  {
    title: "Menu",
    list : ["Services", "Works", "About", "Contact"]
  },
  {
    title: "Connect",
    list: ["LinkedIn", "Facebook", "Twitter", "Instagram"]
  }
]

export default function Footer() {
  return (
    <div className="relative text-white flex md:flex-no-wrap flex-wrap bg-zinc-900 justify-center lg:gap-[80px] gap-4 text-xl py-[50px] px-6">
      <div className="absolute top-[-100px] right-6">
        <Darkblock className="" />
      </div>
      
      <div>
        <Logo />
      </div>
      {data.map((value, index) =>{
        return(
          <div>
            <div className="pb-3" key={index}>{value.title}</div>
            <ul className="text-zinc-400 text-sm md:mr-12 mr-6">
              {value.list.map((item, index) => {
                return(<li key={index} className="py-[7px]">
                       <a href="#" className="hover:text-white">{item}</a>
                      </li>)
              })}
            </ul>
          </div>
        )
      })}
      <div className="md:order-none md:w-max w-full order-first mb-10 flex flex-col items-center">
        <div>
          <div className="w-full">Subscribe to our newsletter!</div>
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <input type="email" placeHolder="Your email" className="rounded-md text-sm pl-5 py-2 w-[250px] text-black"/>
            <button className="bg-[#ffb1a6] py-2 px-[16px] rounded-md hover:bg-red-200 transitation-2 transition-all text-zinc-900 text-sm font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
