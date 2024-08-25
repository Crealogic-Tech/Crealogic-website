import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Conteact';
import Header from './Components/Header/Header'; 
import Footer from './Components/Footer/Footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
