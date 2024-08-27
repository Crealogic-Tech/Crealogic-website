import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Divider from "../Divider";

const CTASection = ({ ctaText }) => {
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
              <Button href="/contact">Book a call</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
