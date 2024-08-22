import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Hero } from "./Components/HeroSection/HeroSection";
import LogoSection from "./Components/LogoSection/LogoSection";
import { AboutSection } from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";

import Services from "./Components/Services/Services";
import WhyUs from "./Components/WhyUs/WhyUs";
import Methodologies from "./Components/Mathodology/MAthodology";

function App() {
  return (
    <div className="">
      
      <Header />
      <Hero />
      <AboutSection />
      <Features />
      <WhyUs />
      <Services />
      <Methodologies />
      <Footer />
    </div>
  );
}

export default App;
