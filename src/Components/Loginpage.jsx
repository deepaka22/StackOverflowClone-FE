import "./Loginpage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [Spinner, Setspinner] = useState(1);
  const [errorNote, setErrorNote] = useState({message : "", changes:0});
  const [loggeduserinfo, setloggeduserinfo] = useState();
  const [username, setusername] = useState();
  const navigatePg = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    const assignedValue = { email: email, password: password };
    // post request doesnt nee header as content type, however it comes only when the header is there.
   try {
     const request = await fetch("https://stackoverflowclone-63mv.onrender.com/users/login", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         "email": email,
         "password": password
       })
     })

     const response = await request.json();

     const responseData = await response.logedUserData;
 
     console.log(responseData, "from response data" );
     // -------------------------Spinner response--------------------
     if (response) {
       Setspinner(!Spinner)
      //  setusername (response.logedUserData);
     }
     // -------------------------invalid info response--------------------
     if (response.message==="user does not exists"  
     || response.message ==="Invalid email or password" 
     || response.message ==="internal Error") {
       setErrorNote({message:response.message , changes: 1});
     }
     // request is sent and if the response is 201, then navigate to Getdetails pg, and set the token rec from BE
     // -------------------------logged in response--------------------
     if(response.loginStatus=="Sucessfully logged in") {    
       localStorage.setItem("x-auth-token", response.generatedToken);
       localStorage.setItem("_id", responseData._id);
       localStorage.setItem("name", responseData.name);

       setErrorNote({message:response.loginStatus, changes: 1});
       setloggeduserinfo(response);
       navigatePg(`/users/${responseData._id}/${responseData.name}`); 
       window.location.reload();
       
      //  
      }
   } catch (error) {
    console.log(error);
   }
  }
    // -------------------------use Effect is used if the user is aldreay logged in..--------------------
  useEffect(()=>{
    if(localStorage.getItem("x-auth-token")) navigatePg("/usersinformations" )
  },[])

  //------------------------End of requests---------------------------------------------
  return (

    <div id="fontStyle">

      <section className="vh-125" id="sectionbg">
        <div className="container py-5 h-100 w-75">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              {/* <--image btn---> */}
              <div className="text-center mb-2">
                <img id="imageAddress1" src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.png">
                </img>
              </div>
              {/* <--google btn---> */}
              <div className=" shadow mb-3 d-grid gap-2">
                <button className=" btn btn-light flex--item s-btn s-btn__icon s-btn__google bar-md ba bc-black-225" data-provider="google" data-oauthserver="https://accounts.google.com/o/oauth2/auth" data-oauthversion="2.0">
                  <svg aria-hidden="true" className="native svg-icon iconGoogle" id="svgicon" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg>
                  Log in with Google        </button>
              </div>
              {/* <--Github btn --> * */}
              <div className="  mb-3 d-grid gap-2">
                <button className="btn btn-secondary flex--item s-btn s-btn__icon s-btn__github bar-md ba bc-black-225" data-provider="github" data-oauthserver="https://github.com/login/oauth/authorize" data-oauthversion="2.0">
                  <svg aria-hidden="true" className="svg-icon iconGitHub" id="svgicon" width="18" height="18" viewBox="0 0 18 18"><path fill="#010101" d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"></path></svg>
                  Log in with GitHub </button>
                {/* <--facebook btn --> */}
                <div className=" mb-1 d-grid gap-2">
                  <button className="btn btn-dark" data-provider="facebook" data-oauthserver="https://www.facebook.com/v2.0/dialog/oauth" data-oauthversion="2.0">
                    <svg aria-hidden="true" className="svg-icon iconFacebook" id="svgicon" width="18" height="18" viewBox="0 0 18 18"><path fill="#4167B2" d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"></path></svg>
                    Log in with Facebook </button>
                </div>
              </div>
                {/* <--Response notes displayed in front end  --> */}
             { errorNote.changes ? 
  <div className="row">
    <div className="col-sm-12">
    <div className="alert alert-danger text-center mt-4" role="alert">
      <b>{errorNote.message}</b>
    </div>
    </div>
    </div> : null}
                 {/* <--form   -->  */}
              <div className="card shadow-lg " id="sectionbg1">
                <div className="card-body p-5 ">
                  {/* <--Email--> */}
                  <form onSubmit={(e) => { formHandler(e) }}>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label mb-2"><b>Email</b></label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" aria-describedby="emailHelp" required
                        onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    {/* <--Password--> */}
                    <div className=" mb-3 mt-2">
                      <div className="d-flex bd-highlight">
                        <label htmlFor="exampleFormControlInput1" className="form-label p-2 flex-grow-1 bd-highlight mb-2"><b>Password</b></label>
                        <label htmlFor="exampleFormControlInput1" id="forgotpass" className="form-label p-2 bd-highlight mb-2">
                          <a className="nav-link " href="account-recovery" id="forgotPassAnch">Forgot Password?</a></label>
                      </div>
                      <input type="password" id="exampleFormControlInput1" className="form-control " required
                        onChange={(e) => { setPassord(e.target.value) }} />
                    </div>
                    {/* <--button--> */}
                    <div className=" mb-3 d-grid gap-2">
                      <button className="btn btn-primary" type={"submit"} onClick={(e) => { Setspinner(!Spinner) }} >
                        {Spinner ? "Log in" : <span className="spinner-border text-light spinner-border-sm" role="status" aria-hidden="true">
                         </span>}
                      </button>
                    </div>

                  </form>
                </div>

              </div>
              <div className="d-flex justify-content-center mt-4" id="Marginsigup" >Don't have an account? <a className="nav-link" id="forgotPassAnch1" href="signup">&nbsp;Sign up</a></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Loginpage;