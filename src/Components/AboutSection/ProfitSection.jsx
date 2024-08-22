import React from "react";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";

const ProfitSection = ({
  title,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-14 items-center">
          <div
            className="max-w-[736px] order-2 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="200" // Adjust the delay
          >
            <TextContent
              title={title}
              highlightedText={highlightedText}
              description={description}
            />
          </div>
          <div
            className="w-full h-full order-1 lg:order-2"
            data-aos="fade-up"
            data-aos-delay="400" // Adjust the delay
          >
            <ImageContent
              src={imageSrc}
              alt={imageAlt}
              justify="justify-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;
