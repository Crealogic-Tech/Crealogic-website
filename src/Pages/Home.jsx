import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import { AboutSection } from "../Components/AboutSection/AboutSection";
import Features from "../Components/Features/Features";
import Services from "../Components/Services/Services";
import WhyUs from "../Components/WhyUs/WhyUs";
import Methodologies from "../Components/Mathodology/Mathodology";
import CTASection from "../Components/ConteactUs/ContectUs";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <Features />
      <WhyUs />
      <Services />
      <Methodologies />
      <CTASection
        ctaText="Get started with an intro call"
        buttonText="Book a call"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Home;