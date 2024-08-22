import React, { useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaPhoneSquareAlt
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-transparent py-5 mb-32 border-t-2 border-primaryLight">
      <div className="container">
        <div className="flex justify-between" data-aos="fade-up">
          <div
            className="flex flex-col text-primaryMedium justify-between text-md items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-5 text-lg" data-aos="fade-up" data-aos-delay="200">
              <FaPhoneSquareAlt className="text-xl" />
              <a href="tel:+918160343175" className="hover:underline">+91 8160343175</a>
            </div>
            <div className="flex gap-5 text-lg items-center" data-aos="fade-up" data-aos-delay="300">
              <IoIosMail className="text-xl" />
              <a href="mailto:crealogictech@gmail.com" className="hover:underline">crealogictech@gmail.com</a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="flex text-2xl space-x-4">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primaryMedium hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primaryMedium hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primaryMedium hover:text-gray-300">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primaryMedium hover:text-gray-300">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-sm text-primaryMedium">
            Copyright&copy; 2022 Qirub Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
