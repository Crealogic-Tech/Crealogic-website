import React, { useEffect, useState, useRef } from "react";
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
import Divider from "../Divider";
// import DialogBox from "../DialogBox"; // Assuming you have a DialogBox component

const Methodologies = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const methodologiesRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const section = methodologiesRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (sectionTop <= viewportHeight && sectionBottom >= 0) {
        setIsDialogVisible(true);
      } else {
        setIsDialogVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeDialog = () => {
    setIsDialogVisible(false);
  };

  const methodologiesData = [
    {
      id: 1,
      title: "Discovery & Research: ",
      description: "Understanding your business goals and target audience.",
      icon: DiscoverImage,
    },
    {
      id: 2,
      title: "Strategy & Planning: ",
      description: "Creating a roadmap for success with clear objectives.",
      icon: PlanningImage,
    },
    {
      id: 3,
      title: "Design & Development:",
      description: "Crafting visually stunning and functional solutions.",
      icon: DesignImage,
    },
    {
      id: 4,
      title: "Testing & Launch: ",
      description:
        "Ensuring all aspects are tested rigorously before going live.",
      icon: TestingImage,
    },
    {
      id: 5,
      title: "Ongoing Support: ",
      description: "Providing continuous maintenance and support post-launch.",
      icon: SupportImage,
    },
    {
      id: 6,
      title: "Collaboration & Feedback:",
      description: "Open communication ensures your vision is integrated.",
      icon: FeedbackImage,
    },
  ];

  return (
    <section className="pb-20 relative" ref={methodologiesRef}>
      <div className=" ">
        <div className="absolute block sm:hidden -left-20 -top-36 w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.3]"></div>
        
      </div>
      <div className="container">
        <Divider title="Methodologies" />

        <div className="text-whitef  mt-20 ">
          <div className="flex flex-col lg:flex-row justify-center gap-10 items-stretch">
            <div className="order-2 lg:order-1 flex flex-col w-full items-stretch justify-between gap-5 space-y-5">
              {methodologiesData.slice(0, 3).map((methodology, index) => (
                <MethodologyCard
                  key={methodology.id}
                  title={methodology.title}
                  description={methodology.description}
                  icon={methodology.icon}
                  aosDelay={index * 200} 
                />
              ))}
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center items-center">
              <div className="absolute hidden lg:block top-0 right-6  md:w-[300px] md:h-[300px] rounded-full blur-[50px] opacity-15 bg-gradient-45 "></div>
              <img
                src={MethodImage}
                alt="Center Graphic"
                className="max-w-sm text-center flex items-center"
              />
            </div>

            <div className="order-3 lg:order-3 w-full flex flex-col items-center justify-between gap-5 space-y-5">
              {methodologiesData.slice(3).map((methodology, index) => (
                <MethodologyCard
                  key={methodology.id}
                  title={methodology.title}
                  description={methodology.description}
                  icon={methodology.icon}
                  aosDelay={index * 200 + 600}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {/* {isDialogVisible && (
        <DialogBox
          isVisible={isDialogVisible}
          onClose={closeDialog}
          className="fixed top-10 right-10"
        />
      )} */}
    </section>
  );
};

export default Methodologies;
