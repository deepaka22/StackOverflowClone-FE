
import LeftSidebars from "./LeftSidebars";
import Dashboard from "./Dashboard";

const MainPage = ()=>{
    return(
        <div className="row">
            <div className="col-sm-2">
            <LeftSidebars/>
           </div>
           <div className="col-sm-10">  
           
            <Dashboard/>
        </div>
        </div>
    )
}

export default MainPage;