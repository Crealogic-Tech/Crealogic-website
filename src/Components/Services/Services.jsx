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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
      icon1: SoftwaredevIcon1,
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-[calc(50%-50px)] bottom-[-60px] flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-full shadow"
      onClick={onClick}
    >
      <FaChevronLeft className="text-xl" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute right-[calc(50%-50px)] bottom-[-60px] flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-full shadow"
      onClick={onClick}
    >
      <FaChevronRight className="text-xl" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section id="services" className="pb-20 relative">
      <div className="absolute block sm:hidden -top-36 sm:-top-20 -right-36 ght sm:-right-20 w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.3]"></div>
      <div className="container">
        <Divider title="Services" />

        <div className="mt-20 md:px-3 relative">
          <Slider {...settings}>
            {cardsData.map((card) => (
              <div key={card.id} className="md:px-3 slick-slide">
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
