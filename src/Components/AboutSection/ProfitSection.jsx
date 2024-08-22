// ProfitSection.js
import React from "react";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";

const ProfitSection = ({
  reverse,
  title,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="relative ">
      <div className="container">
        <div className="flex justify-center lg:justify-between gap-14 items-center">
          {reverse ? (
            <div className="flex gap-10 flex-col lg:flex-row justify-center lg:justify-between items-center ">
              <div className="">
                <ImageContent
                  src={imageSrc}
                  alt={imageAlt}
                  justify="justify-start"
                />
              </div>
              <div className="max-w-[736px] ">
                <TextContent
                  title={title}
                  highlightedText={highlightedText}
                  description={description}
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-10 flex-col lg:flex-row justify-center lg:justify-between items-center ">
              <div className="max-w-[736px] ">
                <TextContent
                  title={title}
                  highlightedText={highlightedText}
                  description={description}
                />
              </div>
              <div className="w-full h-full">
                <ImageContent
                  src={imageSrc}
                  alt={imageAlt}
                  justify="justify-start"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;
