
import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../src/Assets/logo.png";


const Navbar = () => {
    return (
      <>               
   

  <div className="container-fluid nav_bg ">
      <div className="row">
          <div className="col-10 mx-auto">

    
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
<div className="container-fluid ">
<NavLink  className="navbar-brand" to="/"><img  src={logo} alt="logo"></img></NavLink>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
aria-expanded="true" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

<ul   style={{marginLeft:"auto"}}className="nav justify-content-end ">
 <li className="nav-item">
   <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
 </li>
 <li className="nav-item">
   <NavLink activeClassName="menu_active" className="nav-link" to="/">Projects</NavLink>
 </li>
 <li className="nav-item">
   <NavLink activeClassName="menu_active" className="nav-link" to="/">Features</NavLink>
 </li>
 <li className="nav-item">
   <NavLink activeClassName="menu_active" className="nav-link" to="/">About Us</NavLink>
 </li>
 <li className="nav-item">
  <NavLink activeClassName="menu_active" className="nav-link" to="/contact"><button  type="button" class="btn btn-secondary btn-dark btn-lg"   to="/contact"> Contact Us </button></NavLink> 
 </li>

</ul>

</div>
</div>
</nav>
</div>
     </div>
 </div>


 </>

    );
};

export default Navbar;
