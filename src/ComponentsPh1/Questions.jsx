
import { useNavigate } from "react-router-dom";
import LeftSidebars from "./LeftSidebars";


const Questions = ()=>{

    const navigatePg = useNavigate();

    return(
        <div className="row">
            <div className="col-sm-2">
            <LeftSidebars/>
           </div>
           <div className="col-sm-7">  
            <div className="row mt-4 p-2">
                    <div className="d-flex justify-content-between">
                        <h3>All Questions</h3>
                        <button className="btn btn-primary btn-sm p-2" onClick={()=>{navigatePg("/Questions/ask")}}>Ask Question</button>
                    </div>
                    </div> 

            </div>
            
        </div>
    )
}

export default Questions;