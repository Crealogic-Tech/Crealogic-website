import React from "react";
import AboutImage from "../../assets/images/aboutus.svg";
import ProfitSection from "./ProfitSection";
import SectionName from "../SectionName";

export const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <SectionName title="About" />
        <div className="mt-14">
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
