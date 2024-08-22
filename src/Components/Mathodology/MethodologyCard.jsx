import React from "react";

const MethodologyCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col justify-center w-full items-start vertical-timeline-element-content !ml-0 bg-[#1d1836] bg-opacity-[0.3] backdrop-blur-3xl p-6 rounded-xl ">
      <div className="flex justify-center items-center gap-2">
        <div className="w-16 h-16 mb-4">
          <img src={icon} alt={`${title} Icon`} className="w-full h-full" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-gray-400 text-left">{description}</p>
    </div>
  );
};

export default MethodologyCard;
