import React from 'react'
import { NavLink } from "react-router-dom";
import { SiTimescale, SiDatacamp, SiAccusoft, SiWebmoney, SiXmpp } from 'react-icons/si';

const Nav = () => {
    return(
        <section className="appName">

        <NavLink to="/" className="icon activeClass">
           <SiTimescale/>
           <span className="iconSpan">Home</span>
        </NavLink>

        <NavLink to="/time" className="icon">
           <SiTimescale/>
           <span className="iconSpan">Time</span>
        </NavLink>

        <NavLink to="/info" className="icon">
            <SiDatacamp/>
            <span className="iconSpan">Personal Information</span>
        </NavLink>
        
        <NavLink to="/off" className="icon">
            <SiAccusoft/>
            <span className="iconSpan">Absence</span>
        </NavLink> 

        <NavLink to="/career" className="icon">
            <SiXmpp/>
            <span className="iconSpan">Career</span>
        </NavLink>

        <NavLink to="/expenses" className="icon">
            <SiWebmoney/>
            <span className="iconSpan">Expenses</span>
        </NavLink>

        </section>
    )
}

export default Nav;