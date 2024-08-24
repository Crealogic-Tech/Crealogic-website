import React, { useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterLogo from "../../assets/images/footer.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <footer className="bg-transparent py-16 pb-5  border-t-2 border-primaryLight">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex justify-between w-full items-stretch flex-col px-4 gap-8 ">
              <div className="flex flex-col md:flex-row gap-14 md:gap-0 justify-center md:justify-between">
                <div className="flex flex-col gap-4 md:gap-8">
                  <div className="inline-flex items-center md:items-start flex-col gap-2">
                    <a href="#home" className="inline-block">
                      <span className="text-secondry text-5xl font-amiri font-normal transition-opacity duration-300">
                        Crealogic
                      </span>
                    </a>
                    <div className="flex justify-center items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primaryMedium"></div>
                      <p className="font-normal text-secondry">Surat</p>
                    </div>
                  </div>

                  <div className="inline-flex items-start justify-center my-5 md:mb-0 md:justify-start flex-row gap-2 [&>a]:text-secondry [&>a]:text-xl">
                    <a
                      href="https://in.linkedin.com/company/logicwind"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://x.com/i/flow/login?redirect_after_login=%2Flogicwind"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.instagram.com/logicwind/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.facebook.com/logicwindhq/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <FaFacebookF />
                    </a>
                  </div>

                  <div
                    className="flex flex-col text-primaryMedium justify-between gap-3 text-md items-start"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="flex items-center gap-5 text-lg"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <FaPhoneSquareAlt className="text-xl" />
                      <a
                        href="tel:+918160343175"
                        className="hover:underline text-sm  md:text-lg"
                      >
                        +91 8160343175
                      </a>
                    </div>
                    <div
                      className="flex gap-5 text-lg items-center"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <IoIosMail className="text-xl" />
                      <a
                        href="mailto:crealogictech@gmail.com"
                        className="hover:underline text-sm  md:text-lg"
                      >
                        crealogictech@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-none gap-[60px]">
                  <ul
                    role="list"
                    className="flex flex-col gap-y-4 text-secondry [&>ul>li>a]:flex [&>ul>li>a]:justify-center [&>ul>li>a]:items-center [&>ul>li>a]:py-3 [&>ul>li>a]:text-sm [&>ul>li>a]:h-6 [&>ul>li>a]:text-secondry"
                  >
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li className="flex gap-2 items-center">
                      <a href="#">Blogs</a>
                      <sup>

                      <p className="bg-[#f04f4b] text-[10px] lg:text-lg rounded-2xl text-secondry py-0.5 px-2">
                        Coming soon
                      </p>
                      </sup>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex w-full h-0.5 rounded-[50px] bg-[#d7cccc] round"></div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
                <div className="text-sm text-secondry">
                  © 2024 Logicwind - We create solutions that grow with your
                  business
                </div>
                <div className="flex gap-2 text-secondry">
                  <p className="">
                    Innovated with care at{" "}
                    <span className="text-secondry text-2xl font-amiri font-normal transition-opacity duration-300">
                      Crealogic
                    </span>
                  <img src={FooterLogo} alt="" className="block md:hidden w-8" />
                  </p>
                  <img src={FooterLogo} alt="" className="hidden md:block  w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
