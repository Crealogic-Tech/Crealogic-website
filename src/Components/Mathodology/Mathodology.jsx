import React from "react";
import MethodologyCard from "./MethodologyCard";

import AboutImage from "../../assets/images/person-1.png";
import SectionName from "../SectionName";

const Methodologies = () => {
  const methodologiesData = [
    {
      id: 1,
      title: "In-depth Consultation",
      description:
        "We start by understanding your specific needs and goals through detailed discussions and analysis.",
      icon:AboutImage, // Replace with actual icon
    },
    {
      id: 2,
      title: "Project Planning & Strategy",
      description:
        "We develop a comprehensive project plan with clear timelines, milestones, and deliverables.",
      icon:AboutImage, // Replace with actual icon
    },
    {
      id: 3,
      title: "Agile Development",
      description:
        "We use an agile development methodology to ensure flexibility and continuous improvement throughout the project.",
      icon:AboutImage, // Replace with actual icon
    },
    {
      id: 4,
      title: "Quality Assurance",
      description:
        "We implement rigorous quality assurance measures to ensure the highest standards of work.",
      icon:AboutImage, // Replace with actual icon
    },
    {
      id: 5,
      title: "Ongoing Support",
      description:
        "We provide ongoing support and maintenance to ensure your continued success.",
      icon:AboutImage, // Replace with actual icon
    },
  ];

  return (
    <section className="pb-[100px]">
      <div className="container">
        <SectionName title="Methodologies" />
        <div className="flex justify-center items-center mt-14">
          <h2 className="text-center max-w-[800px] mb-3">
            Our Approach to Success
          </h2>
        </div>
        <div className="text-white py-16">
          <div className="flex flex-col lg:flex-row justify-center gap-10 items-center lg:items-start">
            <div className="order-2 lg:order-1 flex flex-col w-full items-start justify-center gap-5 space-y-5">
              {methodologiesData.slice(0, 2).map((methodology) => (
                <MethodologyCard
                  key={methodology.id}
                  title={methodology.title}
                  description={methodology.description}
                  icon={methodology.icon}
                />
              ))}
            </div>

            <div className="order-1 lg:order-2 flex justify-center items-center">
              <img
                src={AboutImage} // Replace with actual image
                alt="Center Graphic"
                className="max-w-sm text-center flex items-center"
              />
            </div>

            <div className="order-3 lg:order-3 w-full flex flex-col items-center justify-center gap-5 space-y-5">
              {methodologiesData.slice(2).map((methodology) => (
                <MethodologyCard
                  key={methodology.id}
                  title={methodology.title}
                  description={methodology.description}
                  icon={methodology.icon}
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
