import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import { AboutSection } from "../Components/AboutSection/AboutSection";
import Features from "../Components/Features/Features";
import Services from "../Components/Services/Services";
import WhyUs from "../Components/WhyUs/WhyUs";
import Methodologies from "../Components/Mathodology/Mathodology";
import CTASection from "../Components/ConteactUs/ContactUs";
import Header from "../Components/Header/Header";
import Blog from "../Components/Blog/Blog";
import BlogDetails from "../Components/BlogDetails/BlogDetails";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Header /> 
      <HeroSection />
      <AboutSection />
      <Services />
      <Features />
      <WhyUs />
      {/* <Blog /> 
      <BlogDetails /> */}
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
