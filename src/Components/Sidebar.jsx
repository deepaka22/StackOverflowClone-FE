import { useState } from "react";
import "./Sidebar.css";
const Sidebar = ()=>{
    const [displayed, setDisplay] = useState(0);

    const styling = {
        display : displayed ? "block" : "none" ,
    }

    return(
        <div style={{marginRight:"1rem"}}>
<button type="button" className=" btn btn-outline-dark btn-lg"
 onClick={()=>{setDisplay(!displayed)}}>
{displayed == 0 ? "☰"  : "X"} 
</button>

<div className=" shadow w3-sidebar w3-bar-block w3-border-right"  style={styling} id="mySidebar">
  <a href="#" className="w3-bar-item w3-button">Home</a>
  <a href="#" className="w3-bar-item w3-button">Questions</a>
  <a href="#" className="w3-bar-item w3-button">Tags</a>
</div>
        </div>
    )
}

export default Sidebar;