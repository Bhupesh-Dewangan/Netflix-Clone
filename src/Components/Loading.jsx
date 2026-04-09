import React from "react";
import favicon from "../assets/logo.svg";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-32 h-32">
        {/* Netflix-style pulsing rings */}
        <div className="absolute inset-0 border-4 border-transparent border-t-red-600 border-r-red-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-red-500 border-r-red-500 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-4 border-transparent border-t-red-400 border-r-red-400 rounded-full animate-spin-reverse"></div>

        {/* Center circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-red-600 rounded-full shadow-lg shadow-red-600/50 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
