import { useState } from "react";

export default function DropDown({options, placeholder}) {

  const [showOption, setshowOption] = useState(false);
  const menu = options.map((option, index) => 
      <a key={index} href={option.link} className="block bg-white hover:bg-rose-100 p-2">{option.value}</a>
    );

  return (
    <div
    className="rounded-sm w-28"
    >
      <div className="p-2 flex items-center gap-2" onMouseDown={() => setshowOption(!showOption)}>
        <span>{placeholder}</span><img src="arrow.png" className={`h-[15px] transition ease-in-out ${showOption ? "rotate-180" : ""}`}/>
      </div>
      { showOption && (
        <div className="static w-28">{menu}</div>
      )}
    </div>
  )
}
