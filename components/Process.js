import Clock from "./svg/Clock";
import Graph from "./svg/Graph";
import Ideas from "./svg/Ideas";
import Setting from "./svg/Setting";

const data = [
  {
    title: "Business idea",
    desc: "What you want your business to be.",
    img: <Ideas />
  },
  {
    title: "Planning",
    desc: "A business plan helps formalize your idea.",
    img: <Clock />
  },
  {
    title: "Develop",
    desc: "Ideation, prototyping, costing of your product.",
    img: <Setting />
  },
  {
    title: "Business structure",
    desc: "Key parts of your business.",
    img: <Graph />
  },
]

export default function Process() {
  return (
    <div className="lg:m-[150px] mx-4 my-[150px] flex flex-col items-center gap-6">
      <div className="md:text-5xl text-4xl font-bold text-center">
        The process we follow
      </div>
      <div className="max-w-[400px] text-center text-gray-500 font-medium">
        As an academy of business, we are going through the development cycle.
      </div>
      <div className="flex flex-wrap gap-12 mt-4 justify-center">
        {data.map((value,index)=>{
          return(
            <div key={index} className={`max-w-[200px] min-w-[200px] flex flex-col items-center gap-4 ${index %  2 === 0? "lg:pb-8" : "lg:pt-8"}`}>
              {value.img}
              <div className="text-xl font-bold text-zinc-700 text-center">
                {value.title}
              </div>
              <div className="max-w-[175px] text-center text-gray-500 font-medium">
                {value.desc}
              </div>
            </div>
        )})}
      </div>
      
    </div>
  )
}

