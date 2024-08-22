import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyUsCard from "./WhyUsCard";
import CustomerImage from "../../assets/images/customer.svg";
import RecordImage from "../../assets/images/record.svg";
import ResultImage from "../../assets/images/result.svg";
import ServicesImage from "../../assets/images/services.svg";
import SolutionsImage from "../../assets/images/solutions.svg";
import TeamImage from "../../assets/images/team.svg";
import WhyUsImage from "../../assets/images/whyUs.svg";
import SectionName from "../SectionName";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "Customer-Centric Approach",
      description:
        "We prioritize your needs and deliver solutions that align with your vision.",
      icon: CustomerImage,
    },
    {
      id: 2,
      title: "Proven Track Record",
      description:
        "Trusted by numerous clients for delivering quality IT solutions on time and on budget.",
      icon: RecordImage,
    },
    {
      id: 3,
      title: "Innovative Solutions",
      description:
        "We stay ahead of industry trends to provide you with the latest technology and creative solutions.",
      icon: SolutionsImage,
    },
    {
      id: 4,
      title: "Comprehensive Services",
      description:
        "From web development to digital marketing, Crealogic offers a one-stop solution for all your IT needs.",
      icon: ServicesImage,
    },
    {
      id: 5,
      title: "Results-Driven Approach",
      description:
        "Focused on measurable outcomes that add value and drive business growth.",
      icon: ResultImage,
    },
    {
      id: 6,
      title: "Experienced Team",
      description:
        "Our team of experienced developers, designers, and marketing experts are dedicated to helping you achieve your business goals.",
      icon: TeamImage,
    },
  ];

  return (
    <section className="pb-[100px]">
      <div className="container">
        <SectionName title="Why Us" />
        
        <div className="text-white mt-14 pb-16">
          <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
            <div className="order-2 lg:order-1 flex flex-col w-full items-start justify-center gap-5 space-y-5">
              {servicesData.slice(0, 3).map((service, index) => (
                <WhyUsCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`} // Delay for each card
                />
              ))}
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="absolute top-[0] right-6 w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 bg-gradient-45 "></div>
              <img src={WhyUsImage} alt="Center Graphic" className="max-w-sm" />
            </div>

            <div className="order-3 lg:order-3 w-full flex flex-col items-center justify-center gap-5 space-y-5">
              {servicesData.slice(3).map((service, index) => (
                <WhyUsCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 3) * 100}`} // Delay for each card, adjusted for the second group
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
