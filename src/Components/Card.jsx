import React from "react";

const SecurityCard = ({ title, description, icon1 }) => {
  return (
    <div className="servicsCard flex justify-center items-stretch relative before:absolute before:top-2 before:right-1 before:w-16 before:h-16 before:bg-gradient-45 before:rounded-xl">
      <div
        className="cardShadow flex justify-center items-center gap-4 relative bg-[#121215] text-white p-6 rounded-xl"
        style={{
          clipPath: "polygon(90% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <div className="flex flex-col h-80 justify-between gap-3 items-center">
          <div className="servicesImages rounded-lg flex text-center items-center justify-center">
            <img src={icon1} alt="Security Icon" className="w-[100px]" />
          </div>
          <div>
            <h3 className="text-center">{title}</h3>
          </div>
          <div>
            <p className="text-primaryMedium text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
