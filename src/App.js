import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar/Navbar';
import LeadPage from './components/LeadPage/LeadPage';
import MenuItems from './components/MenuItems/MenuItems';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LeadPage />
      <MenuItems />
    </div>
  );
}

export default App;
