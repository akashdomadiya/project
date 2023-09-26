import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
  return(
    <>
    <NavLink exact className={(navData) => (navData.isActive ? "active_class" : 'none')} to='/'>About US</NavLink>
    <NavLink exact className={(navData) => (navData.isActive ? "active_class" : 'none')} to="/contact">Contact US</NavLink>
<br />
   <a href="/">AboutUS</a>
   <a href="/contact">Contact</a>

    </>
  );
};

export default Menu;
