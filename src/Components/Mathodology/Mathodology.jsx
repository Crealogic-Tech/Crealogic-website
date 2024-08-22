import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MethodologyCard from "./MethodologyCard";

import DesignImage from "../../assets/images/design.svg";
import DiscoverImage from "../../assets/images/discover.svg";
import FeedbackImage from "../../assets/images/feedback.svg";
import PlanningImage from "../../assets/images/planning.svg";
import SupportImage from "../../assets/images/support.svg";
import TestingImage from "../../assets/images/testing.svg";
import MethodImage from "../../assets/images/method.svg";
import SectionName from "../SectionName";

const Methodologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const methodologiesData = [
    {
      id: 1,
      title:"Discovery & Research: ",
      description: "Understanding your business goals and target audience.",
      icon:DiscoverImage,
    },
    {
      id: 2,
      title:"Strategy & Planning: ",
      description: "Creating a roadmap for success with clear objectives.",
      icon:PlanningImage,
    },
    {
      id: 3,
      title:"Design & Development:",
      description: "Crafting visually stunning and functional solutions.",
      icon:DesignImage,
    },
    {
      id: 4,
      title:"Testing & Launch: ",
      description: "Ensuring all aspects are tested rigorously before going live.",
      icon:TestingImage,
    },
    {
      id: 5,
      title:"Ongoing Support: ",
      description: "Providing continuous maintenance and support post-launch.",
      icon:SupportImage,
    },
    {
      id: 6,
      title:"Collaboration & Feedback:",
      description: "Open communication ensures your vision is integrated.",
      icon:FeedbackImage,
    },
  ];

  return (
    <section className="pb-[100px]">
      <div className="container">
        <SectionName title="Methodologies" />
        
        <div className="text-white mt-14 pb-16">
          <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
            <div className="order-2 lg:order-1 flex flex-col w-full items-start justify-center gap-5 space-y-5">
              {methodologiesData.slice(0, 3).map((methodology, index) => (
                <MethodologyCard
                  key={methodology.id}
                  title={methodology.title}
                  description={methodology.description}
                  icon={methodology.icon}
                  aosDelay={index * 200} // Delay for each card
                />
              ))}
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center items-center">
              {/* <div className="absolute top-[0] right-6 w-[400px] h-[400px] rounded-full blur-[20px] opacity-10 bg-gradient-45"></div> */}
              <img
                src={MethodImage}
                alt="Center Graphic"
                className="max-w-sm text-center flex items-center"
              />
            </div>

            <div className="order-3 lg:order-3 w-full flex flex-col items-center justify-center gap-5 space-y-5">
              {methodologiesData.slice(3).map((methodology, index) => (
                <MethodologyCard
                  key={methodology.id}
                  title={methodology.title}
                  description={methodology.description}
                  icon={methodology.icon}
                  aosDelay={index * 200 + 600} // Adjust delay for second set
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodologies;
