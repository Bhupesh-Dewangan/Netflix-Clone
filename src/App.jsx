import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import Player from "./Pages/Player";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Components/Loading";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Show loading animation completely when the website opens
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // 3.2 seconds delay to ensure the animation plays fully (adjustable)

    return () => clearTimeout(timer);
  }, []);

  // Handle Firebase auth state changes only after the loading screen is done
  useEffect(() => {
    if (isLoading) return; // Wait until loading animation is complete

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
      else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [isLoading, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-start justify-center h-screen bg-black">
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
