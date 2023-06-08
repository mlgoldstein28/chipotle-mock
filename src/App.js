import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import LeadPage from './components/LeadPage/LeadPage';
import MenuItems from './components/MenuItems/MenuItems';
import SignIn from './components/Account/SignIn/SignIn.js';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import NavMenu from './components/Navbar/NavMenu/NavMenu';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<UnderConstruction className="App"/>} />
        <Route path='/catering' element={<UnderConstruction className="App"/>} />
        <Route path='/rewards' element={<UnderConstruction className="App"/>} />
        <Route path='/our-values' element={<UnderConstruction className="App"/>} />
        <Route path='/nutrition' element={<UnderConstruction className="App"/>} />
      </Routes>
    </Router>
  )
}


function Home() {
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(false);
  const [bagDisplay, setBagDisplay] = useState(false);
  const [navMenuDisplay, setNavMenuDisplay] = useState(false);


  const handleClick = (event) => {
    setDisplay(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    document.body.style.webkitOverflowScrolling = "touch"
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }

  const handleBag = (event) => {
    window.scrollTo(0,0);
    setBagDisplay(true);
    document.body.style.overflow = "hidden";
    document.body.style.WebkitOverflowScrolling = "touch"
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }

  const handleNavMenu = (event) => {
    setNavMenuDisplay(true);
    window.scrollTo(0,0);
    document.body.style.overflow = "hidden"
    document.body.style.WebkitOverflowScrolling = "touch"
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }


  return (
    <div className="App" id="App">
      <SignIn display={display}
              setDisplay={setDisplay}
              hide={hide}
              setHide={setHide} />
      <ShoppingBag bagDisplay={bagDisplay}
                   setBagDisplay={setBagDisplay} />
      <NavMenu navMenuDisplay={navMenuDisplay}
              setNavMenuDisplay={setNavMenuDisplay}
              setDisplay={setDisplay} 
              setHide={setHide}/>
      <div className={`${bagDisplay ? styles.blur : null}`}>
        <div className={bagDisplay ? styles.dim : styles.hide}></div>
        <Navbar handleClick={handleClick} 
                handleBag={handleBag}
                bagDisplay={bagDisplay}
                handleNavMenu={handleNavMenu}
                />
        <LeadPage display={display}
                  setDisplay={setDisplay}
                  handleClick={handleClick}
                  hide={hide}
                  setHide={setHide}
                  />
        <MenuItems />
      </div>
    </div>
  );
}

export default App;
