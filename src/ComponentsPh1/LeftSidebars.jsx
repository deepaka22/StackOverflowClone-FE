import React from "react";
import "./LeftSidebars.css";
import { Routes, Route, Link, NavLink, Navigate, Router } from "react-router-dom";
import Homepage from "./Homepage";
import Questions from "./Questions";

const LeftSidebars = () => {
 
  return (
    
    
    <div className="left-sidebar" >
            
      <nav className="side-nav">
        <button  className="nav-btn">
          <NavLink to="/Homepage" element={<Homepage />} className="side-nav-links" activeclassname="active">
          <svg aria-hidden="true" className="svg-icon iconHome" width="18" height="18" viewBox="0 0 18 18">
<path d="M15 10v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5H0l9-9 9 9h-3Zm-8 1v6h4v-6H7Z">
</path></svg>&nbsp;&nbsp;<b>Home</b>
          </NavLink>

        </button>

        <button  className="nav-btn">
          <NavLink to="/Questions" element={<Questions />} className="side-nav-links" activeclassname="active">
          <svg aria-hidden="true" class="svg-icon iconQuestion" width="18" height="18" viewBox="0 0 18 18">
            <path d="m4 15-3 3V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v9c0 1.09-.91 2-2 2H4Zm7.75-3.97c.72-.83.98-1.86.98-2.94 0-1.65-.7-3.22-2.3-3.83a4.41 4.41 0 0 0-3.02 0 3.8 3.8 0 0 0-2.32 3.83c0 1.29.35 2.29 1.03 3a3.8 3.8 0 0 0 2.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 0 1-1.28-.66Zm-1.27-.9a5.4 5.4 0 0 0-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.86-1-.86-3.12 0-4.11.8-.9 2.35-.9 3.15 0 .9 1.01.86 3.03-.01 4.08Z">
              </path></svg> &nbsp;&nbsp;<b>Questions</b>
              </NavLink>
        </button>


        <button  className="nav-btn">
          <NavLink to="/tags" element={<Homepage />} className="side-nav-links" activeclassname="active">
          <svg aria-hidden="true" class="svg-icon iconTags" width="18" height="18" viewBox="0 0 18 18"><path d="M9.24 1a3 3 0 0 0-2.12.88l-5.7 5.7a2 2 0 0 0-.38 2.31 3 3 0 0 1 .67-1.01l6-6A3 3 0 0 1 9.83 2H14a3 3 0 0 1 .79.1A2 2 0 0 0 13 1H9.24Z" opacity=".4"></path><path d="M9.83 3a2 2 0 0 0-1.42.59l-6 6a2 2 0 0 0 0 2.82L6.6 16.6a2 2 0 0 0 2.82 0l6-6A2 2 0 0 0 16 9.17V5a2 2 0 0 0-2-2H9.83ZM12 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z">
            </path></svg>&nbsp;&nbsp;<b>Tags</b>
              </NavLink>
        </button>
        
        <button  className="nav-btn">
          <NavLink to="/tags" element={<Homepage />} className="side-nav-links" activeclassname="active">
          <svg aria-hidden="true" class="svg-icon iconIndustry" width="18" height="18" viewBox="0 0 18 18"><path d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6c1.09 0 2 .91 2 2v2h2c1.09 0 2 .91 2 2v8h-6ZM4 4v2h2V4H4Zm0 4v2h2V8H4Zm4-4v2h2V4H8Zm0 4v2h2V8H8Zm-4 4v2h2v-2H4Zm8 0v2h2v-2h-2Zm0-4v2h2V8h-2Z">
            </path></svg>&nbsp;&nbsp;<b>Companies</b>
              </NavLink>
        </button>

      </nav>
    </div>
  );
};

export default LeftSidebars;