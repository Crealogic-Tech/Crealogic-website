import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Divider from "../Divider";

const CTASection = ({ ctaText }) => {
  return (
    <section id="contact" className="py-8">
      <div className="container">
        <Divider title="Contact Us" />
        <div className="pb-30 my-20 flex  justify-center items-center ">/
          <div className="heroHeadding rounded-lg flex flex-col justify-center p-12 items-center gap-6 md:gap-12 text-white">
            <p className="text-2xl lg:text-[64px] font-semibold text-white text-center md:mb-6">
              {ctaText}
            </p>
            <div className="flex justify-center items-center pt-2">
              <Button href="#contact">Book a call</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  ctaText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default CTASection;
