import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar/Navbar';
import LeadPage from './components/LeadPage/LeadPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LeadPage />
    </div>
  );
}

export default App;
