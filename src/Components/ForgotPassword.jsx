import { useState } from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword =()=>{

  const [email, setEmail] = useState("");
  const [Spinner, Setspinner] = useState(1);
  const [errorNote, setErrorNote] = useState({message:"", changes : 0});
  const navigation = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(email);
  // request sent to backend 
    try {
      const request = await fetch(`https://stackoverflowclone-63mv.onrender.com/users/forgotPassword`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email":email})})
  
          const response = await request.json();
  
          // console.log(response);
              // -------------------------Spinner response--------------------
          if(response) Setspinner(!Spinner)
      // -------------------------invalid info response--------------------
      if (response.message === "email id does not exists"){
        setErrorNote({message: response.message, changes: 1}); 
        setTimeout(()=>{navigation("/")}, 2000)
             }  
          // -------------------------Mail sent respose response--------------------
  
          if (response.message === "Mail sent")  {
            setErrorNote({message : response.message, changes:1})
            setTimeout(()=>{navigation("/")}, 2000) 
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

{/* card body */}

        <div className="card shadow-lg " id="sectionbg1">
          <div className="card-body p-5 ">

{/* <--Email--> */}
<form onSubmit={(e)=>{handleSubmit(e)}}>
  {/* <------------------- Error notes -------------------> */}
{ errorNote.changes ? 
  <div className="row">
    <div className="col-sm-12">
    <div className="alert alert-danger text-center mt-4" role="alert">
      <b>{errorNote.message}</b>
    </div>
    </div>
    </div> : null}

            <div className="mb-3">
                <div className="mb-3">Forgot your account’s password? Enter your email address and we’ll send you a recovery link.</div>
    <label htmlFor="exampleFormControlInput1" className="form-label mb-2"><b>Email</b></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" aria-describedby="emailHelp"
    onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>

  
         {/* <--button--> */}

            <div className=" mb-3 d-grid gap-2">
            <button className="btn btn-primary" type={"submit"} onClick={() => { Setspinner(!Spinner) }}>
            {Spinner ? "Send recovery email" : <span className="spinner-border text-light spinner-border-sm" role="status" aria-hidden="true">
                         </span> }
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
export default ForgotPassword;