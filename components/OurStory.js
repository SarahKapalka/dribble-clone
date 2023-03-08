export default function OurStory() {
  return (
    <div className="bg-zinc-900 rounded-xl my-[200px] lg:max-w-[950px] max-w-[700px] mx-10 md:mx-auto text-white sm:flex relative pl-12">
    <div className="absolute -right-8 -top-10 scale-50 scale-y-[60%] -rotate-[25deg]">
      <svg width="80" height="77" viewBox="0 0 80 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M79.5001 76.9776L0.000258265 76.9776L37.4999 0.500006L79.5001 76.9776Z" fill="#E5C268"/>
      </svg>
    </div>
    <div className="top-[-150px] absolute left-1/2">
      <svg width="45" height="77" viewBox="0 0 45 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41 0.5C50 29 41 58 0.5 76.5" stroke="black" strokeWidth="2"/>
      </svg> 
    </div>
      <img src="/story-girl.jpg" className="hidden sm:block absolute md:w-[300px] sm:w-[200px] w-[300px] md:rounded-tr-xl md:rounded-tl-xl top-0 md:top-auto md:bottom-0 "/>
      <div className="ml-0 sm:ml-[250px] md:ml-[350px] pb-8 pr-8 lg:pb-12 lg:pr-12">
        <div className="md:text-5xl text-4xl font-bold text-left lg:pt-12 lg:pb-10 pt-8 pb-5">
          Our Story
        </div>
        <div className="text-zinc-400">
          We specialise in organising professional training courses and we have been doing it in Poland since 1994. As a company of businesses, we are going through the development cycle
        </div>
        <button className="bg-[#ffb1a6] py-[10px] px-[16px] rounded-md  hover:bg-red-200 transitation-2 transition-all text-zinc-900 font-medium mt-5 lg:mt-10">
          Get Started
        </button>
    </div>
    </div>
 
  )
}
