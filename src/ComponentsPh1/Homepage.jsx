
import LeftSidebars from "./LeftSidebars";

const Homepage = ()=>{
    return (
        <div className="row">
            <div className="col-sm-2">
            <LeftSidebars/>
           </div>
           <div className="col-sm-10">  
           Hello this is Homepage...
        </div>
        </div>
   )
}

export default Homepage;