 import LeftSidebars from "./LeftSidebars";

 import "./Askquestions.css";
import { useState } from "react";

 const Askquestions = ({id, name})=>{

    // *******************************************states & Time stamp ***************************

    const date = new Date();
    const datestamp = date.toUTCString().slice(0, -12);
    console.log(datestamp, "from date added");

    const [title, setTiltle] = useState("");
    const [userProblem, setUserProblem] = useState("");
    const [userComments, setUserComments] = useState("");
    const [usertags, setUserTags] = useState("");

    // *******************************************form Handler***************************
    const formHandler = async (e)=>{   
        e.preventDefault();
    console.log({title:title, userProblem:userProblem, userComments:userComments, usertags:usertags, id:id,
                 name:name, datestamp:datestamp, votes:0});

     try {
     const request = await fetch("https://stackoverflowclone-63mv.onrender.com/users/Addquestions", {
     method: "POST",
     headers: {"Content-Type": "application/json",}, body: JSON.stringify({
     "id":id, "name": name, "votes":0,"date": datestamp, "title":title, "problems":userProblem,
      "comments":userComments,"tags":usertags, "views": 1, "Answers": {"usersAnswers": null}})
         })
    
    } catch (error) {console.log(error);}      

    
}
 // *******************************************Hreturn functions***************************

    return(
        <form onSubmit={(e) => { formHandler(e) }}>
        <div className="background">
    <div className="row" >
            <div className="col-sm-12 m-4">
            <h4><b> Ask a Public Question </b></h4>
            </div>
{/* ********************************** para box**************************************** */}
        <div className="col-sm-12 m-4" style={{width: "65%"}}>           
         <div className="card" >
        <div className="card-body" id="boxbackground">
        <h3 className="fs-title fw-normal mb8">Writing a good question</h3>
        <p className="fs-body2 mb0">
                You’re ready to <a href="https://stackoverflow.com/help/how-to-ask">ask</a> a <a href="https://stackoverflow.com/help/on-topic">programming-related question</a> and this form will help guide you through the process.
            </p>
            <p className="fs-body2 mt0">
                Looking to ask a non-programming question? See <a href="https://stackexchange.com/sites#technology-traffic">the topics here</a> to find a relevant site.
            </p>
            <h5 className="fw-bold mb8">Steps</h5>
            <ul className="mb0">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add “tags” which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
            </ul>

  </div></div></div></div>
        {/* ********************************** Title box**************************************** */}
       
        <div className="col-sm-12 m-4" id= "titlebackground" style={{width: "65%"}}>           
         <div className="card ">
        <div className="card-body">
        <h4><b>Title</b></h4>
        <label htmlFor="exampleFormControlInput1" className="form-label mb-2">Be specific and imagine you’re asking a question to another person.</label>
         <input onChange={(e)=>{setTiltle(e.target.value)}} type="email"required className="form-control border" placeholder= "e.g. Is there an R function for finding the index of an element in a vector?" id="exampleFormControlInput1" aria-describedby="emailHelp" 
                        />    
        </div></div></div>

        {/* ********************************** problem box**************************************** */}

        <div className="col-sm-12 m-4" id= "titlebackground" style={{width: "65%"}}>           
         <div className="card ">
        <div className="card-body">
        <h4><b>What are the details of your problem?</b></h4>
        <label htmlFor="exampleFormControlInput1" className="form-label mb-2">Introduce the problem and expand on what you put in the title. Minimum 20 characters.</label>
         <textarea  onChange={(e)=>{setUserProblem(e.target.value)}} rows="8" required type="email" minLength={20} className="form-control border"  id="exampleFormControlInput1" aria-describedby="emailHelp" 
                        > </textarea>   
        </div></div></div>

        {/* ********************************** Expecting box**************************************** */}


        <div className="col-sm-12 m-4" id= "titlebackground" style={{width: "65%"}}>           
         <div className="card ">
        <div className="card-body">
        <h4><b>What did you try and what were you expecting?</b></h4>
        <label htmlFor="exampleFormControlInput1" className="form-label mb-2">Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</label>
         <textarea onChange={(e)=>{setUserComments(e.target.value)}} rows="8" required type="email" minLength={20} className="form-control border"  id="exampleFormControlInput1" aria-describedby="emailHelp" 
                        > </textarea>   
        </div></div></div>

        {/* **********************************Tags**************************************** */}
       
        <div className="col-sm-12 m-4" id= "titlebackground" style={{width: "65%"}}>           
         <div className="card ">
        <div className="card-body">
        <h4><b>Tags</b></h4> 
        <label htmlFor="exampleFormControlInput1" className="form-label mb-2">Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</label>
         <input type="name" onChange={(e)=>{setUserTags(e.target.value)}} required className="form-control border" placeholder= "e.g. Is there an R function for finding the index of an element in a vector?" id="exampleFormControlInput1" aria-describedby="emailHelp" 
                        />    
        </div></div></div>


        <button className="btn btn-primary btn-xxl m-4 p-2" type={"submitt"} onClick={()=>{}}>Review your question</button>
        </div>   
        </form> 
         )}
        
 export default Askquestions;
