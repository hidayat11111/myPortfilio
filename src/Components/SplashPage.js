"use client";
import React, { useEffect,useState } from "react";
import { SparklesCore } from "./Sparkles";
import { useNavigate } from "react-router-dom";
import BounceLoader from 'react-spinners/BounceLoader';

function SparklesPreview() {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav("/LandingPage");
    }, 3000);
  }, [nav]);
  const [loading, setLoading] = useState(true);
  
  return (
    <div className="h-svh w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
       <BounceLoader color="gray" loading={loading} size={60} />
      <div className="w-[40rem] h-40 relative">
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

       
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] "></div>
      </div>
    </div>
  );
}

export default SparklesPreview;
