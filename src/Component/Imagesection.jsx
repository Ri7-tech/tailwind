import React from "react";
import m1 from "../Image/m1.jpg";
import m2 from "../Image/m2.jpg";
import m3 from "../Image/m3.jpg";
import m4 from "../Image/m4.jpg";
import n1 from "../Image/n1.jpg";

import n2 from "../Image/n2.jpg";

import n3 from "../Image/n3.jpg";

export default function Imagesection() {
  return (
    <>
      <div className="w-[1170px] m-auto mt-2">
        <div>
          <img src={m1} alt="" />
        </div>
        <div className="mt-2">
          <img src={m2} alt="" />
        </div>
        <div className="mt-1">
          <img src={m3} alt="" />
        </div>
        <div className="mt-1">
          <img src={m4} alt="" />
        </div>
        {/* image flex work started here */}
        <div className="grid grid-cols-3 gap-2.5 mt-1.5">
          <div className="relative overflow-hidden">
            <img src={n1} alt="" className="object-cover" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative overflow-hidden">
            <img src={n2} alt="" />
            <div className="absolute inset-0 bg-white/30  opacity-0 hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative overflow-hidden">
            <img src={n3} alt="" />
            <div className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-100 transition duraction-300"></div>
          </div>
        </div>
        {/* image flex work started here */}
      </div>
    </>
  );
}
