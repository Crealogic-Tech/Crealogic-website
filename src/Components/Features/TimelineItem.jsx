import React from "react";

const TimelineItem = ({ title, description, icon, backgroundColor, isLeft }) => {
  return (
    <div className={`vertical-timeline-element ${isLeft ? "left-side-class" : "right-side-class"}`}>
      <span style={{ background: backgroundColor }} className="vertical-timeline-element-icon bounce-in">
        <div className="flex justify-center items-center w-full h-full">
        <div className="absolute -top-2 -right-2 w-[80px] h-[80px] -z-10 rounded-full blur-[30px]  bg-gradient-45 "></div>
          <img
            loading="lazy"
            className="w-[60%] h-[60%] object-contain"
            src={icon}
            alt={title}
          />
        </div>
      </span>
      <div  className="vertical-timeline-element-content bounce-in bg-[#1d1836] text-secondry bg-opacity-[0.3]  backdrop-blur-3xl">
      
        <div>
          <h3 className="text-white  font-bold">{title}</h3>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {description.map((desc, index) => (
            <li key={index} className="text-white-100 text-lg pl-1 tracking-wider">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
