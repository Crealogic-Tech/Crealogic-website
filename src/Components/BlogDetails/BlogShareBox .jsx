import React from "react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaMedium } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const BlogShareBox = () => {
  return (
    <div className="container">
      <div className="blog-share-box h-44 sticky top-12">
        <div className="body-m-1 blog-share-title text-gray-800 font-medium text-lg">
          Social links:
        </div>

        <div className="b-share-link-wrap flex flex-col items-center mt-6 space-y-6">
          <a
            href="https://www.linkedin.com/company/crealogictech"
            target="_blank"
            className="w-inline-block"
          >
            <FaLinkedin />
          </a>
          {/* <a
                  href="https://x.com/Crealogictech"
                  target="_blank"
                  className="w-inline-block"
                >
                  <FaSquareXTwitter />
                </a> */}

          <a
            href="https://medium.com/@crealogictech"
            target="_blank"
            className="w-inline-block"
          >
            <FaMedium />
          </a>
          <a
            href="https://www.instagram.com/crealogictech"
            target="_blank"
            className="w-inline-block"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/crealogictech"
            target="_blank"
            className="w-inline-block"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogShareBox;
