import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css'; // Import AOS styles

export const Hero = () => {
  const fullText = "Crafting Your Business with Innovative IT Solutions!";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Manage typing and deleting

  useEffect(() => {
    const handleTyping = () => {
      if (isTyping) {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsTyping(false), 2000); // Wait before starting to delete
        }
      } else {
        if (index > 0) {
          setText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setTimeout(() => setIsTyping(true), 1000); // Wait before starting to type again
        }
      }
    };

    const timeout = setTimeout(handleTyping, isTyping ? 100 : 50); // Typing and deleting speeds
    return () => clearTimeout(timeout);
  }, [index, isTyping, fullText]);

  return (
    <div id="home" className="relative ">
      <Helmet>
        <title>Crealogic - Custom Web & App Development | Innovative IT Solutions for Business Growth</title>
        <meta name="description" content="Crealogic delivers custom IT services, including web and app development, UI/UX design, digital marketing, and software solutions. Empower your business with innovative, scalable, and results-driven digital solutions." />
        <meta name="keywords" content="IT solutions, web development, app development, digital marketing, custom software development, UI/UX design, full-stack development, agile methodology, business growth, Crealogic" />
      </Helmet>
      <section className="max-h-screen heroBG  w-full py-48 md:py-72">
        <div className=" ">
          <div
            className="absolute -left-20 top-[80%] w-[300px] h-[300px] rounded-full blur-[100px] bg-gradient-45 opacity-[0.5]"
           
          ></div>
          <div
            className="absolute  -top-20 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-gradient-45 opacity-[0.5]"
            
          ></div>
        </div>
        <div className="container z-10">
          <div className="flex items-center flex-col justify-center text-center">
            <div className="max-w-[950px]">
              <h1 className={`font-amiri -tracking-tighter text-white inline-block`}>
                {text}
                {isTyping && <span className="blinking-cursor">|</span>}
              </h1>
              <p
                className="mx-auto max-w-[800px] text-xl font-chakra pt-5 -tracking-tighter text-primaryMedium"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800" // Starts after <h1> animation
              >
                "Transforming Ideas into Reality with Innovative Web, App, and Marketing Solutions to Elevate Your Business!"
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 pt-2">
              <Button
              href="#contact"
               aosType="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1800" // Starts after <p> animation
              >
                Let's Get Started!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
