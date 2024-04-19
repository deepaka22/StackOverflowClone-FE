import logo from "./logo.svg";
import "./App.css";
// react imports
import {
  Routes,
  Route,
  Link,
  Navigate,
  Router,
  useParams,
} from "react-router-dom";
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
import MainPage from "./ComponentsPh1/MainPage";
import Homepage from "./ComponentsPh1/Homepage";
import Questions from "./ComponentsPh1/Questions";
import Askquestions from "./ComponentsPh1/Askquestions";

// App starts

const App = () => {
  const [userLoggedin, setUserLoggedin] = useState();
  const [userid, setuserid] = useState("");
  const [userName, setuserName] = useState("");

  console.log(userLoggedin, userid, userName);

  useEffect(() => {
    if (localStorage.getItem("x-auth-token")) {
      setUserLoggedin(true);
    }
    const getUserid = localStorage.getItem("_id");
    setuserid(getUserid);

    const getUsername = localStorage.getItem("name");
    setuserName(getUsername);
  }, [userLoggedin]);

  return (
    <div className="App" id="fontStyle">
      {userLoggedin ? <Navbar2 id={userid} name={userName} /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/account-recovery" element={<ForgotPassword />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/users/PasswordRecovery/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route
          path="/users/:id/:name"
          element={userLoggedin ? <MainPage /> : null}
        ></Route>
        <Route
          path="/Homepage"
          element={userLoggedin ? <Homepage /> : null}
        ></Route>
        <Route
          path="/Questions"
          element={userLoggedin ? <Questions /> : null}
        ></Route>{" "}
        <Route
          path="/Questions/ask"
          element={
            userLoggedin ? <Askquestions id={userid} name={userName} /> : null
          }
        ></Route>{" "}
      </Routes>
    </div>
  );
};

export default App;
