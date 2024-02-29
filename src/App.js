import logo from "./logo.svg";
import "./App.css";
// react imports
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import Navbar from "./Components/Navbar";
import Loginpage from "./Components/Loginpage";
import ForgotPassword from "./Components/ForgotPassword";
import "./Components/Loginpage.css";
import Signup from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";
import Dashboard from "./ComponentsPh1/Dashboard";
import Navbar2 from "./Components/Navbar2";

// App starts
const App = () => {
  const location = useLocation();
  const [userLoggedin, setUserLoggedin] = useState();

  useEffect(() => {
    if (location.pathname === "/Dashboard") {
      setUserLoggedin(true);
    } else {
      setUserLoggedin(false);
    }
  }, [location]);

  return (
    <div className="App" id="fontStyle">
      {userLoggedin ? <Navbar2 /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/account-recovery" element={<ForgotPassword />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/users/PasswordRecovery/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default App;
