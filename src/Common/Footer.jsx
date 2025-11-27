import React from "react";
import l2 from "../Image/l2.png";
import { MdArrowUpward } from "react-icons/md";
import { IoChatboxSharp } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <div className="w-[1170px] m-auto relative">
          <img src={l2} alt="" className="w-full " />
          <div className="absolute top-5 left-5 text-bold">
            <p>FWRD ON THE GO</p>
            <p className="block text-[14px]">
              Receive 15% OFF your first in-app purchase. iPad App use code:
              FWRDIPAD15
            </p>
            <p className="block">Restrictions may apply</p>
          </div>
          <div className="absolute left-300">
            <MdArrowUpward className="text-[30px]" />
            <div className="bg-white hover:bg-amber-300 hover:rounded-2xl w-[40px] h-[40px] border border-solid border-black">
              <IoChatboxSharp className="text-[30px] mt-2 hover:bg-white" />
            </div>
          </div>
        </div>
        <div className="relative  ">
          <img
            src={l2}
            alt=""
            className="mt-10 h-15 w-[1170px] m-auto relative border border-dotted border-black"
          />
          <div className="flex justify-center gap-2 absolute top-3 left-106">
            <span>HELP US IMPROVE</span>
            <p>Take a brief sarve about today;s visit</p>
          </div>
        </div>
      </div>

      {/* Lower information  start here */}
      <div className="w-[1170px] m-auto mt-2">
        <div className="flex gap-22">
          <div className="ms-3 ">
            <ul>
              <span>FwRD</span>
              <Link to="/cx">
                <li>Customer Care</li>
              </Link>
              <Link to="/trackorder">
                <li>Track Your Order</li>
              </Link>

              <li>Shipping & Returns</li>
              <li>Gift Certificates</li>

              <Link to="/aboutus">
                <li>About Us</li>
              </Link>
              <li>562-407-3230</li>
              <li>Live ChatChat</li>
            </ul>
          </div>
          <div className="mt-4">
            <ul>
              <li>The Loyalty Program</li>
              <li>Ambassador Program</li>
              <li>Affiliate</li>
              <li>Stores</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <div className="">
              <span>NEWALATTER</span>
              <p class="leading-6 text-[14px]">
                Be the first to know about new arrivals, sales & promos by
                submitting your email.
              </p>
              <p class="leading-6 text-[14px]">You can opt out at any time.</p>
              <span className="text-[14px]">Policy</span>
              <div className="flex border border-solid border-black w-[300px] gap-15">
                <input
                  type="mail"
                  className=" h-[50px]  flex justify-center border-none outline-none bg-transparent"
                  placeholder="Sing up for Weeckly email"
                />
                <MdArrowRight className="text-[36px] me-6 mt-1.5 hover:rotate-180 transition duration-75 " />
              </div>
            </div>
          </div>
          <div>
            <span>Join Us</span>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>You tube</li>
              <li>X</li>
              <li>Pinerest</li>
            </ul>
          </div>
          <div>
            <span>Our App</span>
            <ul>
              <li>iPhone</li>
              <li>iPad</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Lower information  start here */}
    </>
  );
}
