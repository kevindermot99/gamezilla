import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageError from "./pages/PageError";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Game from "./pages/Game";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";

function App() {
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    const id = localStorage.getItem("gamezillaUserId");
    if (id) {
      setUserId(id);
    } else {
      setUserId(null);
    }
  }, []);
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/profile/:id" element={<Profile userId={userId} />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
