import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Conteact';
import Footer from './Components/Footer/Footer'; 
import './App.css';

function App() {
  return (
    <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
