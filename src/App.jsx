import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer /> {/* Ensure Footer is outside the Routes */}
      </div>
    </Router>
  );
}

export default App;
