import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Divider from "../Divider";

const CTASection = ({ ctaText }) => {
  
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      navigate("/Contact");
    }, 300);
    // window.scrollTo(0, 0);
  };

  return (
    <section id="contact" className="relative">
      <div className="container">
        <Divider title="Contact Us" />
        <div className="pb-30 my-20 flex relative justify-center items-center ">
          <div className=" ">
            
            <div className="absolute bolck sm:hidden -top-48 -right-36 ght w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.3]"></div>
          </div>
          <div className="heroHeadding rounded-lg flex flex-col justify-center p-12 items-center gap-6 md:gap-12 text-white">
            <p className="text-2xl lg:text-[60px] font-amiri font-semibold text-white text-center md:mb-6">
              {ctaText}
            </p>
            <div className="flex justify-center items-center pt-2">
              <Button onClick={handleButtonClick} >Book a call</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
