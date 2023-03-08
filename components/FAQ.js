import { useState } from "react";

import CloseIcon from "./svg/CloseIcon";
import GreenTri from "./svg/GreenTri";
import Arrow from "./svg/Arrow";

export default function FAQ() {
  const [open, setOpen] = useState([false, false, false, false, false])
  const data = [
    "Will I get lifetime updates?",
    "Can I use Landify for a client's product?",
    "Does Landify provide code kit as well?",
    "Do you have a free trial of Landify",
    "Who can use Landify"
  ]

  return (
    <div className="flex justify-center my-[150px] mx-10">
      <div className="flex flex-col items-stretch w-[1000px]">
        <div className="relative md:text-5xl text-4xl font-bold mb-6 self-start w-full">
          <div className="absolute z-1 rotate-[95deg] left-[-45px] scale-x-75 scale-[-100%]">
            <GreenTri />
          </div>
          <div className="absolute right-0 rotate-[165deg] top-[-100px] scale-90">
            <Arrow />
          </div>
          <span className="relative z-0">
            Frequently Asked Questions
          </span>
        </div>
        <div className="text-gray-500 font-medium mb-6  self-start">
          If you have any further questions please contact us.
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col flex-wrap gap-y-2 w-max mb-2">
            {data.slice(0,2).map((value,index)=>{
              return(
                <div key={index} className="border border-solid border-gray-400 w-[325px] sm:w-[400px] lg:w-[450px] p-6 rounded-md">
                <div className="flex justify-between items-center text-md font-bold text-gray-700">
                  <div>{value}</div>
                    <button 
                    onClick={() => setOpen([...open.slice(0,index),!open[index],...open.slice(index+1)])}
                    className={`${open[index] ? "rotate-45" : ""} transition-all text-black stroke-2 stroke-gray-700`}
                    >
                      <CloseIcon />
                    </button>
                </div>
                {open[index] && (
                  <div className="mt-6 text-gray-500">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                  </div>
                )}
              </div>
              )
            })}
          </div>
          <div className="flex flex-col flex-wrap gap-x-6 gap-y-2 w-max">
            {data.slice(2).map((value,index)=>{
              return(
                <div key={index+2} className="border border-solid border-gray-400 w-[325px] sm:w-[400px] lg:w-[450px] p-6 rounded-md">
                <div className="flex justify-between items-center text-md font-bold text-gray-700">
                  <div>{value}</div>
                    <button 
                      onClick={() => setOpen([...open.slice(0,index+2),!open[index+2],...open.slice(index+3)])}
                      className={`${open[index+2] ? "rotate-45" : ""} transition-all text-black stroke-2 stroke-gray-700`}
                      >
                        <CloseIcon />
                    </button>
                </div>
                {open[index+2] && (
                  <div className="mt-6 text-gray-500">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                  </div>
                )}
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
