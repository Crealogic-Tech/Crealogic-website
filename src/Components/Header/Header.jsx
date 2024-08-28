import React, { useEffect, useState } from "react";
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
      const headerOffset = 80;
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

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Add any logic here if you want to handle the logo click without reloading the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
            <a href="/" onClick={handleLogoClick}>
              {isScrolled ? (
                <img
                  src={HeaderLogo}
                  alt="Logo"
                  className="w-14 transition-opacity duration-1000"
                />
              ) : (
                <span className="text-secondry text-5xl font-amiri font-normal  transition-opacity duration-300">
                  Crealogic
                </span>
              )}
            </a>
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
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="text-secondry hover:text-primaryLight"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-secondry hover:text-primaryLight"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="text-secondry hover:text-primaryLight"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-secondry hover:text-primaryLight"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
                onClick={(e) => handleNavClick(e, "home")}
                className="text-secondry text-2xl capitalize font-medium hover:text-primaryLight"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-secondry text-2xl capitalize font-medium hover:text-primaryLight"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-secondry text-2xl capitalize font-medium hover:text-primaryLight"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-secondry text-2xl capitalize font-medium hover:text-primaryLight"
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
