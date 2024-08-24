import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Customsolution from "../../assets/images/customsolution.svg";
import Fullstack from "../../assets/images/fullstack.svg";
import Uiux from "../../assets/images/uiux.svg";
import Software from "../../assets/images/software.svg";
import DateImage from "../../assets/images/24.svg";
import Methodology from "../../assets/images/methodology.svg";
import Timeline from "./Timeline";
import Divider from "../Divider";

const timelineData = [
  {
    title: "Custom Solutions",
    description: "Tailored services that meet your unique business needs.",
    icon: Customsolution,
  },
  {
    title: "Full-Stack Development",
    description: "Expertise across a wide range of platforms and technologies.",
    icon: Fullstack,
  },
  {
    title: "Scalable Software",
    description: "Future-proof solutions designed to grow with your business.",
    icon: Software,
  },
  {
    title: "Creative UI/UX",
    description: "Designs that engage and convert your audience.",
    icon: Uiux,
  },
  {
    title: "24/7 Support",
    description: "Reliable, around-the-clock customer service.",
    icon: DateImage,
  },
  {
    title: "Agile Methodology",
    description: "Fast, flexible development for efficient delivery.",
    icon: Methodology,
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-[100px]">
      <div className="container">
        <Divider 
          title="Features" 
        />
        <div className="grid grid-cols-1 items-stretch mt-20 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {timelineData.map((item, index) => (
            <Timeline
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              aosType="fade-up" // You can change this to any AOS animation type
              aosDelay={index * 100} // Stagger delay by 100ms for each card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
