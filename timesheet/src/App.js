import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { BrowserRouter as Router} from "react-router-dom";
import './style/global.css'
import Nav from './components/Nav'

const App = () => {
  const {user={}} = useSelector(state => state.user)
  return (
    <div className="App">
        <Header/>
          <div className="topSection">
          <div className="userName">
          {user.name}
          </div>
             <Router>
                <div className="sectionWrapper">
                   <Body/>
                   <Nav/>
                </div>
              </Router>
           </div>
        <Footer/>
    </div>
  );
}

export default App;
