import React from 'react'
import Home from './Home'
import TimeMain from './time/timeMain';
import PersonalInfoMain from './personalInformation/personalInfoMain';
import AbsenceMain from './absence/absenceMain';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Body =  () => {
  return(
    <>
        <div className="sectionWrapper">  
         <section className="userProfile">
            <Home/>   
          </section>   
          <section className="userProfile">  
            <TimeMain/>
          </section>   
          <section className="userProfile">  
            <PersonalInfoMain/>  
          </section>   
          <section className="userProfile">  
            <AbsenceMain/>
          </section>   

            <Router>
              <Switch>
                <Route path='/home' component={Home} /> 
                <Route path='/time' component={TimeMain} />
                <Route path='/info' component={PersonalInfoMain} />
                <Route path='/off' component={AbsenceMain} />
              </Switch>
            </Router>        
        </div>
    </>
  )
}

export default Body;