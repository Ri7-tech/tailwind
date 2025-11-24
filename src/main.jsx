import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/Home";
import RoutLayout from "./Component/RoutLayout";
import ProductListing from "./Component/ProductListing";
import Categories from "./Component/Categories";
import Imagesection from "./Component/Imagesection";
import Customer from "./Component/Customer";
import AboutUs from "./Component/AboutUs";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<RoutLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/Catergies" element={<Categories />} />
          <Route path="/imageview" element={<Imagesection />} />
          <Route path="/cx" element={<Customer />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </>
);
