
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ()=>{

  const loginNavigation = useNavigate();
  const signupNavigation = useNavigate();
    return(

       <div id="fontStyle">
      
        <nav className="navbar  navbar-expand-lg bg-body">
  <div className="container-fluid">
        
        <Sidebar/>

    <a className="navbar-brand" href="/">
        <img id="imageAddress" src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.png">
        </img>
        <span id="navbarhead">Stack<b> Overflow</b></span>
        </a>
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          For Teams
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary  me-1" id="navbtn" type="submit" onClick={()=>{loginNavigation("/")}}> Log in</button>
        <button className="btn btn-primary" id="navbtn" type="submit" onClick={()=>{signupNavigation("/signup")}}>sign up</button>

      </form>
    </div>
  </div>
</nav>
        </div>

        
    )
}

export default Navbar;