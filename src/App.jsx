import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="flex items-start justify-center h-screen bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
