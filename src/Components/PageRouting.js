import React from "react";
import LandingPage from "./LandingPage";
import SplashPage from "./SplashPage";
import { Routes, Route } from "react-router-dom";


const PageRouting = () => {
  return (
  
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    
  );
};

export default PageRouting;
