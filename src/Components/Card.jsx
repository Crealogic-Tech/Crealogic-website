import React from "react";

const SecurityCard = ({ title, description, icon1}) => {
  return (
    <div className=" flex justify-center   relative before:absolute before:top-2 before:right-1 before:w-16 before:h-16 before:bg-gradient-45 before:rounded-xl">
      <div
        className="flex justify-between flex-col gap-4 relative bg-[#121215]   text-white p-6 rounded-xl"
        style={{
          clipPath: "polygon(90% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <div className=" pl- w-14 h-14 rounded-lg flex items-center  justify-between">
          <img src={icon1} alt="Security Icon" className="w-12 h-12 " />
        </div>
        <div>
          <h3 className=" ">{title}</h3>
        </div>
        <div>
          <p className="text-primaryMedium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
