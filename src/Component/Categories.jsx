import React from "react";
import "../Style/Style.css";
import image2 from "../Image/image2.jpg";
import image3 from "../Image/image3.jpg";
import image4 from "../Image/image4.jpg";
export default function Categories() {
  return (
    <>
      <div className="bg-cyan-200 w-[1170px] m-auto mt-2">
        <div className="grid grid-cols-11 gap-3  container ">
          <div>
            <Hovers />
          </div>
          <div>
            <Hover1 />
          </div>
          <div>
            <Hovers2 />
          </div>
          <div>
            <Hovers3 />
          </div>
          <div>
            <Hover4 />
          </div>
          <div>
            <Hover5 />
          </div>
          <div>
            <Hover6 />
          </div>
          <div>
            <Hover7 />
          </div>
          <div>
            <Hover8 />
          </div>
          <div>
            <Hover9 />
          </div>
          <div>
            <Hover10 />
          </div>
        </div>
      </div>
    </>
  );
}

export function Hovers() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">New</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hover1() {
  return (
    <>
      <div className="group inline-block relative me-72">
        <span className="hover:decoration-1 font-semibold">Designer</span>
        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0  group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            {/* <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export function Hovers2() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Clothing</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Hovers3() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Dresses</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Hover4() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Shoes</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Hover5() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Shoes</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Hover10() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Bag</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hover6() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Accesories</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hover7() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Beauty</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hover8() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">sale</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hover9() {
  return (
    <>
      <div className="relative inline-block group ms-2">
        {/* Trigger */}
        <span className="cursor-pointer font-bold">Holiday</span>

        {/* Dropdown container */}
        <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 shadow-lg flex gap-4 p-4">
          {/* Left Columns */}
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="w-[250px]">
              <span className="font-bold">New</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">New Today</li>
                <li className="rp cursor-pointer">All New Arrivals</li>
                <li className="rp cursor-pointer">New Dresses</li>
                <li className="rp cursor-pointer">New Sets</li>
                <li className="rp cursor-pointer">New Tops</li>
                <li className="rp cursor-pointer">New Denim</li>
                <li className="rp cursor-pointer">New Shoes</li>
                <li className="rp cursor-pointer">Kids</li>
                <li className="rp cursor-pointer">All New Clothing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-[250px]">
              <span className="font-bold">Trading Now</span>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="rp cursor-pointer">Fall Dresses</li>
                <li className="rp cursor-pointer">New Romantic</li>
                <li className="rp cursor-pointer">Cherry Lacquer Red</li>
                <li className="rp cursor-pointer">Wedding Guest</li>
                <li className="rp cursor-pointer">Vacation Shop</li>
                <li className="rp cursor-pointer">Kendall's Edit</li>
                <li className="rp cursor-pointer">The Cotton Shop</li>
                <li className="rp cursor-pointer">Best Sellers</li>
                <li className="rp cursor-pointer">Exclusives</li>
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex gap-2">
            <div className="w-[230px] h-[300px]">
              <img src={image2} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image3} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
            <div className="w-[230px] h-[300px]">
              <img src={image4} alt="" className="w-full h-full object-cover" />
              <span>The FWRD Holiday Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
