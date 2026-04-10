import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import OurService from "./views/OurService/OurService.jsx";
import Contact from "./views/Contact/Contact.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourservice" element={<OurService />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);