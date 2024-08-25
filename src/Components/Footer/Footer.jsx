import React, { useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaPhoneSquareAlt,
  FaMedium,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterLogo from "../../assets/images/footer.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className=" py-16 pb-5  border-t-2 border-primaryLight">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex justify-between w-full items-stretch flex-col px-4 gap-8 ">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:gap-8">
                <div className="inline-flex items-center ju flex-col gap-2">
                  <a href="#home" className="inline-block">
                    <span className="text-secondry text-5xl font-amiri font-normal transition-opacity duration-300">
                      Crealogic
                    </span>
                  </a>
                  <div className="flex justify-center items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondry"></div>
                    <p className="font-normal text-secondry">Surat</p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col text-secondry justify-center text-start gap-3 text-sm items-center md:items-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="flex items-center gap-5 text-lg pr-16 md:pr-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex justify-center gap-2 items-center">
                    <FaPhoneSquareAlt className="text-2xl" />
                    <a
                      href="tel:+918160343175"
                      className="hover:underline text-[16px]  sm:text-lg"
                    >
                      +91 8160343175
                    </a>
                  </div>
                </div>
                <div
                  className="flex gap-5 text-lg items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex justify-center gap-2 items-center">
                    <IoIosMail className="text-2xl" />
                    <a
                      href="mailto:crealogictech@gmail.com"
                      className="hover:underline text-[16px]  sm:text-lg"
                    >
                      crealogictech@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start justify-center my-5 sm:mb-0 sm:justify-start flex-row gap-2 [&>a]:text-secondry [&>a]:text-2xl">
                <a
                  href="https://www.linkedin.com/company/crealogictech"
                  target="_blank"
                  className="w-inline-block"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/Crealogictech"
                  target="_blank"
                  className="w-inline-block"
                >
                  <FaSquareXTwitter />
                </a>

                <a
                  href="https://medium.com/@crealogictech"
                  target="_blank"
                  className="w-inline-block"
                >
                  <FaMedium />
                </a>
                <a
                  href="https://www.instagram.com/crealogictech "
                  target="_blank"
                  className="w-inline-block"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/crealogictech"
                  target="_blank"
                  className="w-inline-block"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div className="flex w-full h-0.5 rounded-[50px] bg-[#d7cccc] round"></div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
              <div className="text-sm text-secondry">
                © 2024 Crealogic - We create solutions that grow with your
                business
              </div>
              <div className="flex gap-2 text-secondry">
                <p className="flex gap-2 items-center">
                  Innovated with care at{" "}
                  <span className="text-secondry text-2xl font-amiri font-normal transition-opacity duration-300">
                    Crealogic
                  </span>
                  <img
                    src={FooterLogo}
                    alt=""
                    className="block sm:hidden w-8"
                  />
                </p>
                <img src={FooterLogo} alt="" className="hidden sm:block  w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
