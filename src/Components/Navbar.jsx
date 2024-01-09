
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ()=>{

  const loginNavigation = useNavigate();
  const signupNavigation = useNavigate();
    return(

       <div id="fontStyle">
      
        <nav class="navbar  navbar-expand-lg bg-body">
  <div class="container-fluid">
        
        <Sidebar/>

    <a class="navbar-brand" href="/">
        <img id="imageAddress" src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.png">
        </img>
        <span id="navbarhead">Stack<b> Overflow</b></span>
        </a>
        
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          For Teams
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary  me-1" id="navbtn" type="submit" onClick={()=>{loginNavigation("/")}}> Log in</button>
        <button class="btn btn-primary" id="navbtn" type="submit" onClick={()=>{signupNavigation("/signup")}}>sign up</button>

      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;