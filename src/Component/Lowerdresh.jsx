import React from "react";
import r1 from "../Image/r1.jpg";
import r2 from "../Image/r2.jpg";
import r3 from "../Image/r3.jpg";
import r4 from "../Image/r4.jpg";
import r5 from "../Image/r5.jpg";
import r6 from "../Image/r6.jpg";
import r7 from "../Image/r7.jpg";
import r8 from "../Image/r8.jpg";

export default function Lowerdresh() {
  return (
    <>
      <div className="w-[1170px] m-auto">
        <span className="flex justify-center mt-2 text-2xl uppercase hover:text-cyan-600">
          Featured Item
        </span>
        <div className="grid grid-cols-4 hover:cursor-pointer mt-2">
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r2} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r3}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r4} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r5}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r6} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r7}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r8} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden">
              <img
                src={r7}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r8} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r7}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r8} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r3}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r4} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden">
              <img
                src={r1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img src={r2} alt="" />
            </div>
            <div className="">
              <div className="ms-21">
                <p className="block">ACNE STUDIOS</p>
                <p className="block">1981 Wide Leg</p>
                <p className="block">₹71,693.52</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lower section after lowerdress */}

      {/* Lower section after lowerdress */}
    </>
  );
}
