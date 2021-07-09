import React from 'react'
import Home from './Home'
import TimeMain from './time/timeMain';
import PersonalInfoMain from './personalInformation/personalInfoMain';
import AbsenceMain from './absence/absenceMain';
import Career from './Career'
import {Switch, Route} from "react-router-dom";

const Body =  () => {
  return(
    <>
        <div className="sectionWrapper">  
         <section className="userProfile">
          <Switch>
             <Route path='/' component={Home} /> 
             <Route path='/time' component={TimeMain} />
             <Route path='/info' component={PersonalInfoMain} />
             <Route path='/off' component={AbsenceMain} />
             <Route path='/career' component={Career} />
          </Switch>
        </section>                    
        </div>
    </>
  )
}

export default Body;