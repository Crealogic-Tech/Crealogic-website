import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  return (
    <div className="mt-20 flex justify-center items-center flex-col">
      <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
