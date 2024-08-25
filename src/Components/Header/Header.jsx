import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/HeaderLogo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Adjust this offset if needed
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    } else {
      console.warn(`Section with ID ${targetId} not found!`);
    }
  };

  return (
    <>
      <header
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 w-full py-4 z-40 bg-transparent transition-transform duration-1000 ease-in-out backdrop-blur-lg transform translate-y-0 shadow-xl"
            : "absolute top-0 left-0 w-full py-4 z-30"
        }`}
      >
        <div className="absolute hidden md:block -top-[450px] overflow-hidden left-1/4 w-[500px] h-[500px] rounded-full blur-[190px] bg-gradient-45 opacity-[0.5]"></div>
        <div className="container mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
          <div>
          <Link to="/home">
            {isScrolled ? (
              <img
                src={HeaderLogo}
                alt="Logo"
                className="w-14 transition-opacity duration-1000"
              />
            ) : (
              <span className="text-secondry text-5xl font-amiri font-normal transition-opacity duration-300">
                Crealogic
              </span>
            )}
          </Link>
          </div>
          <button className="lg:hidden text-secondry p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-secondry" />
            ) : (
              <FaBars className="w-6 h-6 text-secondry" />
            )}
          </button>
          <div className="hidden lg:flex">
            <ul className="flex space-x-12">
              <li>
                <div className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-primaryLight font-medium transition-colors duration-300   text-secondry">
                    <a
                      href="#home"
                      className="hidden lg:inline"
                      onClick={(e) => handleNavClick(e, "home")}
                    >
                      Home
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-primaryLight font-medium transition-colors duration-300   text-secondry">
                    <a
                      href="#about"
                      className="hidden lg:inline"
                      onClick={(e) => handleNavClick(e, "about")}
                    >
                      about
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-primaryLight font-medium transition-colors duration-300   text-secondry">
                    <a
                      href="#services"
                      className="hidden lg:inline"
                      onClick={(e) => handleNavClick(e, "services")}
                    >
                      services
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-primaryLight font-medium transition-colors duration-300   text-secondry">
                    <a
                      href="#contact"
                      className="hidden lg:inline"
                      onClick={(e) => handleNavClick(e, "contact")}
                    >
                      Contact Us
                    </a>
                  </span>
                </div>
              </li>
             
            </ul>
          </div>
        </div>
      </header>

      <div
        className={`fixed lg:hidden w-full h-full left-0 z-20 bg-gray-800 backdrop-blur-md bg-opacity-80 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <nav
          className={`relative top-0 left-0 w-full h-full bg-transparent flex flex-col items-center justify-center transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-8">
            <li>
              <a
                href="#home"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
