import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TidyCalEmbed = () => {
  useEffect(() => {
    // Disable body scroll when the component is mounted
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <Helmet>
        <script src="https://assets.tidycal.com/js/embed.js" async></script>
      </Helmet>
      <section className="py-[100px] flex justify-center items-start">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side Content */}
            <div className="flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Chat with Crealogic
              </h2>
              <p className="text-primaryMedium text-lg mb-6">🕒 30 mins</p>
              <ul className="list-disc list-inside text-lg text-primaryMedium space-y-2">
                <li>Let's talk about your product/business/service</li>
                <li>‘Overarching’ goal</li>
                <li>Challenges you want to overcome</li>
                <li>Next steps</li>
              </ul>
            </div>

            {/* Right Side Content (TidyCal Embed) */}
            <div className="calender-script">
              <div className="video-wrapper-3">
                <div className="video-wrapper-1">
                  <iframe
                    src="https://tidycal.com/581meetmangukiya/30-minute-meeting"
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
