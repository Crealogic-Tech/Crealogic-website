import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import AOS from "aos";
import Button from "../Button";

const HeroSection = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init();
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();

    // Navigate to the contact page
    navigate("/contact", { replace: true });

    setTimeout(() => {
      window.location.reload();
    }, 100); // Adjust the delay if necessary
  };

  return (
    <div id="home" className="relative">
      <Helmet>
        <title>
          Crealogic - Custom Web & App Development | Innovative IT Solutions for
          Business Growth
        </title>
        <meta
          name="description"
          content="Crealogic delivers custom IT services, including web and app development, UI/UX design, digital marketing, and software solutions. Empower your business with innovative, scalable, and results-driven digital solutions."
        />
        <meta
          name="keywords"
          content="IT solutions, web development, app development, digital marketing, custom software development, UI/UX design, full-stack development, agile methodology, business growth, Crealogic"
        />
      </Helmet>
      <section className="heroBG relative w-full pt-48 pb-36 md:py-72">
        <div className=" ">
          <div className="absolute -left-20 top-[80%] w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.5]"></div>
          <div className="absolute  -top-20 -right-20 w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.5]"></div>
        </div>
        <div className="container z-10">
          <div className="flex items-center flex-col justify-center text-center">
            <div className="max-w-[950px]">
              <h1
                className="font-amiri  text-4xl -z-10 sm:text-5xl md:text-6xl lg:text-7xl text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Crafting Your Business with Innovative IT Solutions!
              </h1>
              <p
                className="mx-auto md:max-w-[800px] text-justify sm:text-center text-lg md:text-xl font-chakra pt-5 text-primaryMedium"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                "Transforming Ideas into Reality with Innovative Web, App, and
                Marketing Solutions to Elevate Your Business!"
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 pt-2">
              <Button onClick={handleButtonClick}>Let's Get Started!</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
