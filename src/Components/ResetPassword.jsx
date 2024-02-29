
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import "./Loginpage.css";

const ResetPassword = ()=>{

  const [password, setPassord] = useState();
  const [spinner, Setspinner] = useState(1);
  const [errorNote, setErrorNote] = useState({message:"", changes:0});
  const [passwordType, setPassordtype] = useState("name");

  const {id, token} = useParams();
  const navigatePg = useNavigate();


    const passwordHandler = async (e)=>{

    try {
          // console.log(password);
          e.preventDefault();
  
          const request = await fetch(`https://stackoverflowclone-63mv.onrender.com/users/PasswordRecovery/${id}/${token}`, {
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "password":password
              })
            })
  
            const response = await request.json();
            // console.log(response);
             // -------------------------Spinner response--------------------
                if (response)  Setspinner(!spinner)
             // -------------------------success response--------------------
                if(response.message === "password Changed successfully") {
                  setErrorNote({message:response.message, changes: 1});
                  setTimeout(()=>{navigatePg("/")},2000);
                  }else{
                  setErrorNote({message:response.message, changes: 1});
                  }
  
    } catch (error) {
      console.log(error);
    }
    }

    return(
        <div>
            <section className="vh" id="sectionbg">
  <div className="container py-5 h-100 w-75">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">

{/* <--image---> */}
<div className="text-center ">
<img id="imageAddress1" src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.png">
</img>
</div>


{ errorNote.changes ? 
  <div className="row">
    <div className="col-sm-12">
    <div className="alert alert-danger text-center mt-4" role="alert">
      <b>{errorNote.message}</b>
    </div>
    </div>
    </div> : null}

{/* card body */}

        <div className="card shadow-lg " id="sectionbg1">
          <div className="card-body p-5 ">


{/* <--Email--> */}
<form  onSubmit={(e)=>{passwordHandler(e)}}>
  
            <div className="mb-3">
                <div className="mb-3">Forgot your account’s password? Enter your new password !</div>
    <label htmlFor="exampleFormControlInput1" className="form-label mb-2"><b>Set new password</b></label>
    <input type={passwordType} className="form-control" id="exampleFormControlInput1" aria-describedby="emailHelp"
    required onChange={(e)=>{setPassord(e.target.value)}} />
  </div>

  
         {/* <--button--> */}

            <div className=" mb-3 d-grid gap-2">
            <button className="btn btn-primary" type={"submit"} onClick={(e) => { Setspinner(!spinner) }} >
                        {spinner ? "Reset Password" : <span className="spinner-border text-light spinner-border-sm" role="status" aria-hidden="true">
                         </span>}
                      </button>            
            </div>
            </form>
          
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
 
        </div>
    )
}

export default ResetPassword;


