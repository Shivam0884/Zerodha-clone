import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./landing_page/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";
import Login from "./landing_page/signup/Login";
import Home from "./landing_page/signup/Home";
import { CookiesProvider } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={
          <CookiesProvider>
            <Login />
          </CookiesProvider>
        }
      />
      <Route
        path="/signup"
        element={
          <CookiesProvider>
            <Signup />
          </CookiesProvider>
        }
      />
      <Route
        path="/home"
        element={
          <CookiesProvider>
            <Home />
          </CookiesProvider>
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
