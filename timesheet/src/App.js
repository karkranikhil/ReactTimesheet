import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { BrowserRouter as Router} from "react-router-dom";
import './style/global.css'

import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
        <Header/>
          <div className="topSection">
             <Body/>
             <Router>
                <Nav/>
              </Router>
           </div>
        <Footer/>
    </div>
  );
}

export default App;
