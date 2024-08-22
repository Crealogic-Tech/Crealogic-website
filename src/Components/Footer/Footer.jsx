import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  return (
    // <footer className=" flex w-full items-center justify-center border-t-2 border-primaryLight">
    //   <div className="container ">
    //     <div className="py-5">
    //       <div className="flex items-center justify-between ">
    //         <div className="flex justify-center items-center">
    //           <p className="text-primaryMedium">
    //             Copyright © 2024 Crealogic All right reserved
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <ul className="flex justify-evenly ">
    //             <li></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // // </footer>
    // import React from 'react';


    <footer className="bg-transparent py-5  border-t-2 border-primaryLight">
      <div className="container flex justify-between items-center">
        <p className="text-sm text-primaryMedium">Copyright&copy; 2022 Qirub Systems. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-primaryMedium hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-primaryMedium hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-primaryMedium hover:text-gray-300">
            <FaLinkedin />
          </a>

          <a href="#" className="text-primaryMedium hover:text-gray-300">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
