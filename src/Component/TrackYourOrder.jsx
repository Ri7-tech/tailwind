import React from "react";

export default function TrackYourOrder() {
  return (
    <>
      <div className="w-[1170px] m-auto mt-3">
        {/* This is small line start */}
        <div className="flex text-[14px] ">
          <span className="hover:text-neutral-400 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-neutral-400 cursor-pointer">
            Customercare Number
          </span>

          <span>/</span>
          <span className="hover:text-neutral-400 cursor-pointer">Order</span>
        </div>
        {/* This is small line End */}
        {/* Main content start here */}
        <div>
          <div className="mt-6">
            <span>Customer Care</span>
            <ul>
              <li>Contact Us</li>
              <li>Payment</li>
              <li>OrderingYou are currently on this page</li>
              <li>Shipping & Returns</li>
              <li>FAQs</li>
              <li>About Us</li>
              <li>Gift Certificates</li>
              <li>Feedback</li>
              <li>Affiliate</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>California Transparency In Supply Chains Act</li>
            </ul>
          </div>
        </div>
        {/* Main content start end */}
      </div>
    </>
  );
}
