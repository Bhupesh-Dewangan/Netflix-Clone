import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
