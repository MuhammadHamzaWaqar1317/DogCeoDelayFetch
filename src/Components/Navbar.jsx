import React from "react";
import "./styles/navbar.css";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";



function Navbar() {

  const [showSidebar,SetshowSidebar]=useState(false)
  const [ioMenu,SetIoMenu]=useState(true)


  const ToggleSideBar=()=>{
    SetshowSidebar(!showSidebar)
    SetIoMenu(!ioMenu)
  }

  return (
    <>
      <div id="Navbar">
        <div className="Main-Flex">
          <div className="DOGCEO">DOGCEO</div>

          { showSidebar && <div className="Side-bar-Page-Links">
            <div className="cancelSideBar">
            <NavLink to="/home" className="Nav">Home</NavLink>
            <RxCross2 onClick={ToggleSideBar} size={30}/>
            </div>
            <div className="Nav">About</div>
            <NavLink to="/fav" className="Nav">Favourites</NavLink>
            <div className="Nav">Contact Us</div>
            <div className="Nav">FAQs</div>
            <div className="Nav">Features</div>
            <div className="Nav">Pricing</div>
          </div>
          }
          <div className="Page-Links">
          <NavLink to="/home">Home</NavLink>
            
            <div>About</div>
            <NavLink to="/fav">Favourites</NavLink>
            <div>Contact Us</div>
            <div>FAQs</div>
            <div>Features</div>
            <div>Pricing</div>
          </div>

          <div className="Button-Wrap">
            <button>Register</button>
          </div>
          <div className="kam-burger">
            {ioMenu && <IoMenu size={40} onClick={ToggleSideBar}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;