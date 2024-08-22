import React from "react";
import SectionName from "../SectionName";
import ReSearch from "../../assets/images/research.svg";
import Integration from "../../assets/images/integration.svg";
import Deployment from "../../assets/images/deployment.svg";
import Colobrative from "../../assets/images/colobrative.svg";

import Timeline from "./Timeline";

const timelineData = [
  {
    title: "Deep Research",
    description: [
      "We take the time to understand your business goals and user needs. We delve into data and insights to create actionable plans for building scalable and future-proof products.",
    ],
    icon: ReSearch,
    backgroundColor: "#383E56",
    borderColor: "#232631",
  },
  {
    title: "Seamless Integration",
    description: [
      "We combine research and design into a cohesive framework, building with a focus on continuous growth. This applies to all aspects, from front-end and back-end development to databases and servers, across mobile apps, web applications, and desktop software.",
    ],
    icon: Integration,
    backgroundColor: "#383E56",
    borderColor: "#232631",
  },
  {
    title: "Collaborative Design",
    description: [
      "We believe in collaborative design, encouraging input from all stakeholders. This ensures that the final product delivers intuitive and user-friendly interfaces that are both visually appealing and functionally sound.",
    ],
    icon: Colobrative,
    backgroundColor: "#383E56",
    borderColor: "#232631",
  },
  {
    title: "Smooth Deployment",
    description: [
      "We handle the launch of your product and set up the necessary maintenance systems to support integrations. This allows you to focus on growth and expansion.",
    ],
    icon: Deployment,
    backgroundColor: "#383E56",
    borderColor: "#232631",
  },
];

const Features = () => {
  return (
    <section className="py-[100px]">
      <div className="container">
        <SectionName title="Features" />
        <div className="flex justify-center items-center mt-14">

        <h2 className="text-center max-w-[800px] mb-3">Success in Digital Products Demands a Defined Process</h2>
        </div>
        <div className="mt-14 ">

            <Timeline items={timelineData} />

        </div>
      </div>
    </section>
  );
};

export default Features;
