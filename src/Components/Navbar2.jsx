import { useNavigate, useParams } from "react-router-dom";
import MainPage from "../ComponentsPh1/MainPage";
import App from "../App";

const Navbar2 = ({id, name})=>{

  const navigateTohome = useNavigate();

    return(
       <div id="fontStyle">
        <nav className="navbar  navbar-expand-lg bg-body border">
          <div className="container-fluid">
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
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"></a>
        </li>         
      </ul>
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
      <button type="button" className="btn btn-sm" onClick={()=>{navigateTohome(`users/${id}/${name}`)}}>
        <img className="m-2" src="https://www.gravatar.com/avatar/deff2f0371c6698f1a201c08f7db29f8?s=48&d=identicon&r=PG"></img> </button>
        <button className="btn btn-danger me-2 m-2"  type="submit" 
        onClick={()=>{localStorage.removeItem("x-auth-token")
        navigateTohome("/");
        window.location.reload();
      }
        }>Logout</button>
    </div>
  </div>
</nav>
        </div>
    )
}



export default Navbar2;