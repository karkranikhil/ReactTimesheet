import React from 'react'
import { Link } from "react-router-dom";
import { SiTimescale, SiDatacamp, SiAccusoft, SiWebmoney, SiXmpp } from 'react-icons/si';

const Nav = () => {
    return(
        <section className="appName">
        <Link to="/home" className="icon">
         <SiTimescale/>
         <span className="iconSpan">Home</span>
        </Link>
        <Link to="/time" className="icon">
        <SiTimescale/>
        <span className="iconSpan">Time</span>
        </Link>
        <Link to="/info" className="icon">
            <SiDatacamp/>
            <span className="iconSpan">Personal Information</span>
        </Link>
        <Link to="/off" className="icon">
            <SiAccusoft/>
            <span className="iconSpan">Absence</span>
        </Link> 
        <div className="icon">
            <SiXmpp/>
            <span className="iconSpan">Career</span>
        </div>
        <div className="icon">
            <SiWebmoney/>
            <span className="iconSpan">Expenses</span>
        </div>
        </section>
    )
}

export default Nav;