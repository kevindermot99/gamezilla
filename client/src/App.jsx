import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageError from "./pages/PageError";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Game from "./pages/Game";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import axios from "axios";


function App() {
  const [userId, setUserId] = useState(null)
  const [userName, setuserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  

  useEffect(() => {
    const id = localStorage.getItem("gamezillaUserId");
    if (id) {
      setUserId(id);
    } else {
      setUserId(null);
    }
  }, []);
  
  useEffect(() => {
    if (userId) {
      const id = userId;
      const getuser = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/getuser/${id}`);
          // console.log(res.data.user);
          setuserName(res.data.user.username);
          setUserEmail(res.data.user.email)
        } catch (err) {
          console.log(err);
        }
      };

      getuser();
    }
  }, [userId]);
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/profile/:id" element={<Profile userId={userId} userName={userName} userEmail={userEmail} />} />
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
