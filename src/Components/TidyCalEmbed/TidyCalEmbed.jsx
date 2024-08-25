import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TidyCalEmbed = () => {
  useEffect(() => {
    // Disable body scroll when the component is mounted
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when the component is unmounted
  }, []);

  return (
    <div className="relative py-20">
      {/* <Helmet>
        <script src="https://assets.tidycal.com/js/embed.js" async></script>
      </Helmet> */}
      <section className="py-[100px] flex relative justify-center items-start">
        <div className=" ">
          <div className="absolute -left-20 top-[80%] w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.5]"></div>
          <div className="absolute  -top-20 -right-20 w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.5]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center w-full items-center gap-16">
            {/* Left Side Content */}
            <div className=" md:flex-1 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Chat with Crealogic
              </h2>
              <p className="text-primaryMedium text-lg mb-6">🕒 30 mins</p>
              <ul className="list-disc list-inside text-lg text-primaryMedium space-y-2">
                <li>Let's talk about your product /business /service</li>
                <li>‘Overarching’ goal</li>
                <li>Challenges you want to overcome</li>
                <li>Next steps</li>
              </ul>
            </div>

            {/* Right Side Content (TidyCal Embed) */}
            <div className="w-full  md:flex-1 calender-script">
              <div className="heroHeadding rounded-3xl flex flex-col justify-center p-3  gap-6 md:gap-12 text-white">
                <div className="video-wrapper-1">
                  <iframe
                    src="https://tidycal.com/crealogic/30-minute-meeting"
                    width="100%"
                    title="TidyCal Booking"
                    className="border-0 overflow-hidden w-full h-[687px] min-h-[500px]"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TidyCalEmbed;
