import React from 'react'
import Home from './Home'
import TimeMain from './time/timeMain';
import PersonalInfoMain from './personalInformation/personalInfoMain';
import AbsenceMain from './absence/absenceMain';
import Career from './Career';
import Expenses from './Expenses'
import Error from './Error'
import {Switch, Route} from "react-router-dom";

const Body =  () => {
  return(
    <>
         <section className="userProfile">
          <Switch>
             <Route exact path='/' component={Home} /> 
             <Route path='/time' component={TimeMain} />
             <Route path='/info' component={PersonalInfoMain} />
             <Route path='/off' component={AbsenceMain} />
             <Route path='/career' component={Career} />
             <Route path='/expenses' component={Expenses}></Route>
             <Route component={Error} />
          </Switch>
        </section>                    
    </>
  )
}

export default Body;