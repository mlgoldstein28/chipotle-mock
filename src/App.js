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


function App() {
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(false);
  const [bagDisplay, setBagDisplay] = useState(false);

  const handleClick = (event) => {
    setDisplay(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    console.log(display);
  }

  const handleBag = (event) => {
    window.scrollTo(0,0);
    setBagDisplay(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="App">
      <SignIn display={display}
              setDisplay={setDisplay}
              hide={hide}
              setHide={setHide} />
      <ShoppingBag bagDisplay={bagDisplay}
                   setBagDisplay={setBagDisplay}
                   />
      <div className={`${bagDisplay ? styles.blur : null}`}>
        <div className={bagDisplay ? styles.dim : styles.hide}></div>
        <Navbar handleClick={handleClick} 
                handleBag={handleBag}
                bagDisplay={bagDisplay}
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
