import React from "react";
import image1 from "../Image/image1.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className="w-[100%]   border border-solid border-[#E4E4E4] border-t-0 p-2 justify-center">
        <div className="flex justify-end gap-3 ">
          <div className="w-[100px] flex gap-1 bg-pink-300 hover:underline">
            <div className="w-[20px]">
              <img src={image1} alt="" className="rounded-4xl" />
            </div>
            <span>|</span>
            <span>EN</span>
            <span>|</span>
            <span>INR</span>
          </div>
          <div className="flex">
            <span>Need Help ?</span>
            <MdKeyboardArrowDown className="mt-1" />
          </div>
          <div>
            <span>Sign in </span>
          </div>
        </div>
      </div>
      <Middlenave />
    </>
  );
}
export function Middlenave() {
  return (
    <>
      <div className="w-[1170px]  m-auto mt-2.5 grid grid-cols-6 gap-4 ">
        <div className="flex gap-5 justify-self-auto ">
          <div className="flex gap-3">
            <div className="">Women</div>
            <div>Men</div>
          </div>
        </div>
        {/* This for FRDV */}
        <div className="col-span-4 col-start-2 ">
          <h1 className="uppercase font-bold text-3xl text-center ">hwrd</h1>
        </div>
        {/* Search wishList etc */}
        <div className="flex gap-6 justify-center">
          <div className="flex  ">
            <input
              type="text"
              placeholder="search..."
              className="w-[45px] border border-black border-solid border-0"
            />
            <CiSearch className="mt-2 text-xl  " />
          </div>
          <div className="flex gap-1 mt-1.5">
            <h1>WishList</h1>
            <span>{0}</span>
          </div>
          <div className="flex gap-1 mt-1.5">
            <h1>MyBag</h1>
            <span>{0}</span>
          </div>
        </div>
      </div>
    </>
  );
}
