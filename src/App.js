import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar/Navbar';
import LeadPage from './components/LeadPage/LeadPage';
import MenuItems from './components/MenuItems/MenuItems';
import SignIn from './components/Account/SignIn/SignIn.js';


function App() {
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(false);

  const handleClick = (event) => {
    setDisplay(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    console.log(display);

  }

  return (
    <div className="App">
      <SignIn display={display}
              hide={hide}
              setHide={setHide} />
      <div>
        <Navbar display={display}
                setDisplay={setDisplay}
                handleClick={handleClick} />
        <LeadPage display={display}
                  setDisplay={setDisplay}
                  handleClick={handleClick}
                  hide={hide}
                  setHide={setHide}/>
        <MenuItems />
      </div>
    </div>
  );
}

export default App;
