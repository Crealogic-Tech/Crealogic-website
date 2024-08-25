import React from "react";

const TextContent = ({ title, description}) => {
  return (
    <div
      className="flex flex-col about__content-inner justify-center items-center text-3xl text-white"
      data-aos="fade-up"
      data-aos-delay="200" 
    >
      {/* <h2 className="text-center text-4xl md:text-5xl lg:text-start mb-3">
        {title}
      </h2> */}
      <p className=" md:pr-10 mt-4 text-primaryMedium text-justify  md:text-start text-2xl">
        {description}
      </p>

    </div>
  );
};

export default TextContent;
