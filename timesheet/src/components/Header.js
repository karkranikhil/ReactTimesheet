import React from 'react'
import { SiNewyorktimes } from 'react-icons/si';

const Header = () => {
    return(
        <>
             <header className="header">
             <div className="headerContent">
                <SiNewyorktimes/>
             </div>
             <h1>imeSheet</h1>
             </header>
        </>
    )
}

export default Header;