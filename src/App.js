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


  return (
    <div className="App">
      <SignIn display={display} />
      <div>
        <Navbar display={display}
                setDisplay={setDisplay} />
        <LeadPage display={display}/>
        <MenuItems />
      </div>
    </div>
  );
}

export default App;
