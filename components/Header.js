import { useState } from "react";
import DropDown from "./DropDown";
import CollapseDropDown from "./CollapseDropDown";
import CloseIcon from "./svg/CloseIcon";

export default function Header() {

  const options = [
    {"value":"One", "link":"#"},
    {"value":"Two", "link":"#"},
    {"value":"Three", "link":"#"},
   ]
  const [collapse, setCollapse] = useState(true)

  return (
    <>
    <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 ${collapse ? "hidden" : "block"}`} onMouseDown={() => setCollapse(!collapse)}>hello</div>
    <div className="fixed flex items-center bg-white justify-between px-12 md:px-6 lg:px-28 py-4 w-full top-0 left-0 z-20">
      <div>
        <img src="logo.svg" className="h-[30px]"/>
      </div>
      <div className="md:flex items-center gap-4 hidden">
        <DropDown 
        options={options}
        placeholder="Product"
        />
        <DropDown 
          options={options}
          placeholder="Solutions"
        />
        <DropDown 
          options={options}
          placeholder="Resources"
        />
        <a href="#">Pricing</a>
        <button className="ml-8 text-white bg-black hover:bg-zinc-800 transitation-2 transition-all rounded-md px-6 py-2">Subscribe</button>
      </div>
      <button onClick={() => setCollapse(!collapse)} className="md:hidden flex">
        <svg width="33" height="22" viewBox="0 0 33 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={collapse ? "" : "hidden"}>
          <path d="M6 2L31 2" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <path d="M2 11L31 11" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <path d="M13 20L31 20" stroke="black" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <div className={`${collapse ? "hidden" : ""} rotate-45 scale-150`}>
          <CloseIcon />
        </div>
      </button>
    </div>
    {!collapse && (
    <div className="flex flex-col rounded-md md:hidden fixed right-0 top-[50px] bg-white py-5 h-full sm:w-[50vw] w-[70vw] px-10 gap-3 shadow-lg z-30">
      <CollapseDropDown
      options={options}
      placeholder="Product"
      />
      <CollapseDropDown
        options={options}
        placeholder="Solutions"
      />
      <CollapseDropDown
        options={options}
        placeholder="Resources"
      />
      <a href="#" className="pl-2 mb-3">Pricing</a>
      <button className="mb-10 ml-0 text-white bg-black hover:bg-zinc-800 transitation-2 transition-all rounded-md px-6 py-2 block">Subscribe</button>
    </div>
  )}
  </>
  )
}
