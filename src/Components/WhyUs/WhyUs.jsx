import React from "react";
import WhyUsCard from "./WhyUsCard";
import AboutImage from "../../assets/images/person-1.png";
import WhyUsImage from "../../assets/images/about.svg";
import SectionName from "../SectionName";
const WhyUs = () => {
  const servicesData = [
    {
      id: 1,
      title: "Comprehensive Services",
      description:
        "We offer a wide range of IT services under one roof, eliminating the need to work with multiple vendors.",
      icon: AboutImage,
    },
    {
      id: 2,
      title: "Experienced Team",
      description:
        "Our team of experts possesses extensive knowledge and experience in various IT domains.",
      icon: AboutImage,
    },
    {
      id: 3,
      title: "Data-Driven Approach",
      description:
        "We leverage data and analytics to create effective and targeted solutions for your business.",
      icon: AboutImage,
    },
    {
      id: 4,
      title: "Transparent Communication",
      description:
        "We believe in open and honest communication, keeping you informed throughout the entire process.",
      icon: AboutImage,
    },
    {
      id: 5,
      title: "Cost-Effective Solutions",
      description:
        "We offer competitive pricing and flexible engagement models to suit your budget.",
      icon: AboutImage,
    },
  ];
  return (
    <section className="pb-[100px]">
      <div className="container">
        <SectionName title="Why Us" />
        <div className="flex justify-center items-center mt-14">
          <h2 className="text-center max-w-[800px] mb-3">
            Why to have Crealogic?
          </h2>
        </div>
        <div className="text-white py-16">
          <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
            <div className="order-2 lg:order-1 flex flex-col w-full items-start justify-center gap-5 space-y-5">
              {servicesData.slice(0, 2).map((service) => (
                <WhyUsCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="absolute top-[0] right-6 w-[300px] h-[300px] animate-pulse rounded-full blur-[100px] opacity-10 bg-gradient-45 "></div>
              <img src={WhyUsImage} alt="Center Graphic" className="max-w-sm" />
            </div>

            <div className="order-3 lg:order-3 w-full flex flex-col items-center justify-center gap-5 space-y-5">
              {servicesData.slice(2).map((service) => (
                <WhyUsCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
