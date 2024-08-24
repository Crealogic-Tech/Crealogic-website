import React from "react";

const Timeline = ({ icon, title, description, aosType, aosDelay }) => {
  return (
    <div
      className="heroHeadding p-6 rounded-lg text-center text-white"
      data-aos={aosType}
      data-aos-delay={aosDelay}
    >
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-24 h-24 aboutImage" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className=" text-gray-400">{description}</p>
    </div>
  );
};

export default Timeline;
