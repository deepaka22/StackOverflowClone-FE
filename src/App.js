import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Loginpage from "./Components/Loginpage";
import ForgotPassword from "./Components/ForgotPassword";
import "./Components/Loginpage.css";
import Signup from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <div className="App" id="fontStyle">
      <Navbar />
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/account-recovery" element={<ForgotPassword />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/users/PasswordRecovery/:id/:token"
          element={<ResetPassword />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
