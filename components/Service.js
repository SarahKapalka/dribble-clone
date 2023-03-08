import React from 'react';

import ArrowDown from './svg/ArrowDown';
import DarkTri from './svg/DarkTri';

const data = [
  {
    title: "Accounting and Analysis",
    desc: "We've designed and built ecommerce experiences that have driven sales.",
    bg: "bg-[#ffeeb6]"
  },
  {
    title: "Finance and Banking",
    desc: "The ability to independently value an enterprise is an essential tool for making business and strategic decisions",
    bg: "bg-[#b4e0c5]"
  },
  {
    title: "Strategic Business Leader",
    desc: "Strategic Business Leader is a training course from the Strategic Professional level.",
    bg: "bg-[#ffcbc3]"
  },
  {
    title: "Preparatory Course",
    desc: "The ability to independently value an enterprise is an essential tool for making business and strategic decisions.",
    bg: "bg-[#ffcbc3]"
  },
  {
    title: "Business English Writing Skills",
    desc: "A unique opportunity to gain guidance and feedback from our expert.",
    bg: "bg-[#ffeeb6]"
  },
  {
    title: "Strategic Business Reporting",
    desc: "Strategic Business Reporting is a Professional level training course. It covers topics related to advanced financial reporting, including leasing.",
    bg: "bg-[#b4e0c5]"
  },
]

export default function Service() {
  return (
    <div className="relative lg:m-[150px] my-[150px] sm:mx-4 flex flex-col items-center gap-6">
      <div className="absolute left-0 scale-75 hidden sm:inline">
        <DarkTri />
      </div>
      <div className="relative md:text-5xl text-4xl font-bold text-center">
        Services we provide
        <div className="absolute top-[-75px] left-[-100px] hidden sm:inline">
          <ArrowDown />
        </div>
      </div>
      <div className="max-w-[400px] text-center text-gray-500 font-medium">
        We specialise in organising professional training courses.
      </div>
      <div className="flex flex-wrap gap-10 justify-center max-w-[1200px] p-3">
        {data.map((value, index) => {
          return(
            <div key={index} className={`${value.bg} md:w-[300px] sm:w-[270px] w-[300px] flex flex-col items-stretch justify-between p-6 rounded-xl`}>
              <div className="flex flex-col gap-5 mb-5 text-gray-700">
                <div className="text-md font-bold">
                {value.title}
              </div>
              <div className="text-gray-500 font-medium text-md">
                {value.desc}
              </div>
              </div>
              <button className="py-2 bg-white rounded-md font-bold text-center text-gray-700">
                Get Started
              </button>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}
