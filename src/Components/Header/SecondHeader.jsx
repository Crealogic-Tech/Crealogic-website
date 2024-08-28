import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderLogo from "../../assets/images/HeaderLogo.svg";
import { IoHome } from "react-icons/io5"; 

const SecondHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    if (location.pathname === "/" && location.state?.scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        alert(`Section with ID ${targetId} not found on the current page!`);
      }
    } else {
      navigate("/", { state: { scrollToTop: true } });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToTop: true } });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      className={`transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed top-0 left-0 w-full py-4 z-40 bg-transparent transition-transform duration-1000 ease-in-out backdrop-blur-lg transform translate-y-0 shadow-xl"
          : "absolute top-0 left-0 w-full py-4 z-30"
      }`}
    >
      <div className="absolute hidden md:block -top-[450px] overflow-hidden left-1/4 w-[500px] h-[500px] rounded-full blur-[190px] bg-gradient-45 opacity-[0.5]"></div>

      <div className="container mx-auto px-6 md:px-12 py-3 flex justify-between items-center relative">
        <div className="logo relative group">
          <Link to="/" onClick={handleLogoClick}>
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
          </Link>
        </div>
        <div className="flex items-center justify-center lg:border-l-0">
          <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
            <ul className="space-y-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
              <li>
                <Link
                  to="/"
                  className="group relative before:absolute before:inset-x-[-10px] before:bottom-[-20px] before:h-0.5 before:origin-right before:scale-x-0 before:bg-primaryLight before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                  onClick={(e) => handleNavClick(e, "home")}
                >
                  <span
                    className={`relative group-hover:text-primaryLight font-medium transition-colors duration-300 ${
                      isScrolled ? "text-primaryDark" : "text-secondry"
                    }`}
                  >
                    <span className="hidden capitalize lg:inline">Home</span>
                    <IoHome
                      className={`inline lg:hidden text-3xl transition-colors duration-300 ${
                        isScrolled ? "text-primaryLight" : "text-secondry"
                      }`}
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondHeader;
