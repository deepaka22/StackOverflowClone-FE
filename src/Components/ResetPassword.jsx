
import "./Loginpage.css";

const ResetPassword = ()=>{
    return(
        <div>
            <section class="vh" id="sectionbg">
  <div class="container py-5 h-100 w-75">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">

{/* <--image---> */}
<div className="text-center ">
<img id="imageAddress1" src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.png">
</img>
</div>

{/* card body */}

        <div class="card shadow-lg " id="sectionbg1">
          <div class="card-body p-5 ">

{/* <--Email--> */}

            <div class="mb-3">
                <div className="mb-3">Forgot your account’s password? Enter your new password !</div>
    <label for="exampleFormControlInput1" class="form-label mb-2"><b>Set new password</b></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" aria-describedby="emailHelp"/>
  </div>

  
         {/* <--button--> */}

            <div class=" mb-3 d-grid gap-2">
            <button class="btn btn-primary" type="button">Reset password</button>
            </div>

          
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


