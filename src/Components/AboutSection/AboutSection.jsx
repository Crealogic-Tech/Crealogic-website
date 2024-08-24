import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AboutImage from "../../assets/images/aboutus.svg";
import ProfitSection from "./ProfitSection";
import Divider from "../Divider";


export const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section id="about">
      <div className="container">
        <Divider title="About" />
        
        <div className="mt-20">
          <ProfitSection
            title="Innovating Digital Solutions to Drive Your Business Success"
            description="At Crealogic, we are committed to driving innovation and creating digital solutions tailored to your business needs. With a passion for creativity and a focus on technology, we deliver exceptional experiences that help you stand out in a crowded marketplace."
            imageSrc={AboutImage}
            imageAlt="Profit Image"
          />
        </div>
      </div>
    </section>
  );
};
