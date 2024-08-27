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
        <div className="grid  grid-cols-1 md:grid-cols-2  justify-center md:justify-between gap-14 items-center">
          <div
            className="max-w-[736px] order-2 md:order-1 opacity-20"
            data-aos="fade-up"
            data-aos-delay="200" 
          >
            <TextContent
              title={title}
              highlightedText={highlightedText}
              description={description}
            />
          </div>
          <div
            className="relative order-1 md:order-2 flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400" 
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
