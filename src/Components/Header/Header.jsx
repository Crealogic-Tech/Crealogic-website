import React, { useEffect, useState } from "react";
import HeaderLogo from "../../assets/images/HeaderLogo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import DialogBox from "../DialogBox"; // Adjust the import path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
        setIsDialogVisible(true); // Show dialog when scrolled
      } else {
        setIsScrolled(false);
        setIsDialogVisible(false); // Hide dialog when at the top
      }
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

  const closeDialog = () => {
    setIsDialogVisible(false);
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
        <div className="absolute -top-[450px] overflow-hidden left-1/4 w-[500px] h-[500px] rounded-full blur-[190px] bg-gradient-45 opacity-[0.5]"></div>

        <div className="container mx-auto px-6 md:px-12 py-3 flex justify-between items-center relative">
          <div className="logo relative group">
            <a href="/home">
              {isScrolled ? (
                <img
                  src={HeaderLogo}
                  alt="Logo"
                  className="w-14 transition-opacity duration-1000 headerLogo"
                />
              ) : (
                <span className="text-secondry text-5xl font-amiri font-normal transition-opacity duration-300">
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
            <div className="flex items-center justify-center border-l lg:border-l-0">
              <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                <ul className="pt-20 text-accentLight space-y-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                  <li>
                    <a
                      href="#home"
                      className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span className="relative group-hover:text-primaryLight lg:text-primaryMedium font-medium">
                        Home
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span className="relative group-hover:text-primaryLight lg:text-primaryMedium font-medium">
                        About Us
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span className="relative group-hover:text-primaryLight lg:text-primaryMedium font-medium">
                        Services
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                    >
                      <span className="relative group-hover:text-primaryLight lg:text-primaryMedium font-medium whitespace-nowrap">
                        Contact Us
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
          className={`relative top-0 left-0 w-full h-full bg-transparent transition-transform duration-300 flex flex-col items-center justify-center ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-8">
            <li>
              <a
                href="#home"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-secondry text-2xl font-medium hover:text-primaryLight"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <DialogBox isVisible={isDialogVisible} onClose={closeDialog} />
    </>
  );
};

export default Header;
