import { useState } from "react";
import "./Sidebar.css";
const Sidebar = ()=>{
    const [displayed, setDisplay] = useState(0);

    const styling = {
        display : displayed ? "block" : "none" ,
    }

    return(
        <div style={{marginRight:"1rem"}}>
<button type="button" class=" btn btn-outline-dark btn-lg"
 onClick={()=>{setDisplay(!displayed)}}>
{displayed == 0 ? "☰"  : "X"} 
</button>

<div class=" shadow w3-sidebar w3-bar-block w3-border-right"  style={styling} id="mySidebar">
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>
        </div>
    )
}

export default Sidebar;