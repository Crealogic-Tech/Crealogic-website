import React from "react";

const TextContent = ({ title, description , description2}) => {
  return (
    <div className="flex flex-col  about__content-inner justify-center items-center text-3xl text-white">
      <h2 className="text-center lg:text-start mb-3">
        {title}
      </h2>
      <p className="text-center pr-10 mt-4 lg:text-start text-[16px]">
        {description}
      </p>
      <p className="text-center pr-10 mt-4 lg:text-start text-[16px]">
        {description2}
      </p>
    </div>
  );
};

export default TextContent;
