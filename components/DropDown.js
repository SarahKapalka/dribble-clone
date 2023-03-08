import { useState } from "react";

export default function DropDown({options, placeholder}) {

  const [showOption, setshowOption] = useState(false);
  const menu = options.map((option, index) => 
      <a key={index} href={option.link} className="block bg-white hover:text-[#ffb1a6] p-2">{option.value}</a>
    );

  return (
    <div 
    onMouseEnter={() => setshowOption(true)}
    onMouseLeave={() => setshowOption(false)}
    className="rounded-sm w-28"
    >
      <div className="p-2 flex items-center gap-2">
        <span>{placeholder}</span><img src="arrow.png" className={`h-[15px] transition ease-in-out ${showOption ? "rotate-180" : ""}`}/>
      </div>
      { showOption && (
        <div className="absolute w-28">{menu}</div>
      )}
    </div>
  )
}
