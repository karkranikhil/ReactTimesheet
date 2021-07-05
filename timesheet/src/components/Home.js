import React from 'react'
import '../style/global.css'

const HomeWrapper =  () => {
  return(
    <>
        <header className="header">
            <div className="MainWrapper">
               <h1>timeSheet<span className="logoColor">.co</span></h1>
            </div>
        </header>
        <article className="topSection">
           <div className="userName">Welcome, UserName</div>
           <div className="sectionWrapper">
               <section className="userProfile">
                    <h2>
                        Personal Information
                    </h2>
                    Gender:
                    Date of Birth:
                    Age:
                    Email:-
                    Marital Status:
                    Primary Nationlity:
                    <button>Edit</button>
               </section>
               <section className="appName">
                   here is icons
               </section>
           </div>
        </article>

    </>
  )
}

export default HomeWrapper;