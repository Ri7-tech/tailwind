import React from "react";
import ProductListing from "./ProductListing";
import Categories from "./Categories";
import Imagesection from "./Imagesection";
import Lowerdresh from "./Lowerdresh";

export default function Home() {
  return (
    <>
      <ProductListing />
      <Categories />
      <Imagesection />
      <Lowerdresh />
    </>
  );
}
