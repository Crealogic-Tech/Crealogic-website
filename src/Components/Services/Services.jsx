import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import SecurityCard from "../Card";
import SoftwaredevIcon1 from "../../assets/images/softwaredev.svg";
import GraphicsIcon1 from "../../assets/images/Graphics.svg";
import UiuxDesignIcon1 from "../../assets/images/uiuxDesign.svg";
import MarketingIcon1 from "../../assets/images/marketing.svg";
import ApplicationIcon1 from "../../assets/images/application.svg";
import WebIcon1 from "../../assets/images/web.svg";
import Divider from "../Divider";

const Services = () => {
  const cardsData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Transform your ideas into reality with responsive and user-friendly websites built to engage and convert visitors.",
      icon1: WebIcon1,
    },
    {
      id: 2,
      title: "Application Development",
      description:
        "From concept to deployment, we develop mobile and web applications that enhance productivity and streamline business operations.",
      icon1: ApplicationIcon1,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing services that boost your online presence and drive measurable results.",
      icon1: MarketingIcon1,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Intuitive and visually appealing designs that deliver an exceptional user experience and keep customers coming back.",
      icon1: UiuxDesignIcon1,
    },
    {
      id: 5,
      title: "Graphics Design",
      description:
        "High-quality graphics that align with your brand and captivate your target audience.",
      icon1: GraphicsIcon1,
    },
    {
      id: 6,
      title: "Software Development",
      description:
        "Robust software solutions tailored to meet your business requirements and improve efficiency.",
      icon1:  SoftwaredevIcon1,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
    <section id="services" className="pb-[100px]">
      <div className="container">
        <Divider title="Services" />
        
        <div className="mt-20 px-3">
          <Slider {...settings}>
            {cardsData.map((card) => (
              <div key={card.id} className="px-3 slick-slide">
                <SecurityCard
                  title={card.title}
                  description={card.description}
                  icon1={card.icon1}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
