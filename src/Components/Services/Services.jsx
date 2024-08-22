import React from "react";
import SecurityCard from "../Card";
import ShopifyIcon1 from "../../assets/images/shopify1.svg";
import WebIcon1 from "../../assets/images/wb1.svg";
import MarketingIcon1 from "../../assets/images/marketing1.svg";
import AdsIcon1 from "../../assets/images/ads1.svg";
import GraphicsIcon1 from "../../assets/images/graphics1.svg";
import MarketingServicesIcon1 from "../../assets/images/marketingServices1.svg";
import SectionName from '../SectionName';

const Services = () => {
  const cardsData = [
    {
      id: 1,
      title: "Website & App Development",
      description:
        "We create custom websites and mobile apps that are user-friendly, visually appealing, and optimized for performance.",
      icon1: WebIcon1,
    },
    {
      id: 2,
      title: "Shopify Development",
      description:
        "We help you build and manage successful online stores using the Shopify platform.",
      icon1: ShopifyIcon1,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "We provide a comprehensive range of digital marketing services, including SEO, PPC, social media marketing, and email marketing.",
      icon1: MarketingIcon1,
    },
    {
      id: 4,
      title: "Ads Campaign",
      description:
        "We design and execute targeted advertising campaigns to reach your ideal audience and drive conversions.",
      icon1: AdsIcon1,
    },
    {
      id: 5,
      title: "Marketing Services",
      description:
        "We offer various marketing services such as content creation, branding, and market research.",
      icon1: MarketingServicesIcon1,
    },
    {
      id: 6,
      title: "Graphic Design",
      description:
        "Our skilled designers create stunning visuals for your website, marketing materials, and other branding needs.",
      icon1: GraphicsIcon1,
    },
  ];
  return (
    <section className="pb-[100px]">
      <div className="container">
        <SectionName title="Services" />
        <div className="flex justify-center items-center mt-14">
          <h2 className="text-center max-w-[800px] mb-3">
          Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 justify-between px-3">
          {cardsData.map((card) => (
            <SecurityCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon1={card.icon1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
