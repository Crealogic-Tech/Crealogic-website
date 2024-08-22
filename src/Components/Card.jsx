import React from "react";

const SecurityCard = ({ title, description, icon1 }) => {
  return (
    <div className="servicsCard flex justify-center items-center relative before:absolute before:top-2 before:right-1 before:w-16 before:h-16 before:bg-gradient-45 before:rounded-xl">
      <div
        className="cardShadow flex flex-col justify-between h-full items-center gap-4 relative bg-[#121215] text-white p-6 rounded-xl"
        style={{
          clipPath: "polygon(90% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 0%)",
          height: "350px", // Set a fixed height for all cards
          width: "100%", // Ensures the card takes up the full width within the slide
        }}
      >
        <div className="servicesImages w-16 h-16 rounded-lg flex items-center justify-between">
          <img src={icon1} alt="Security Icon" className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-center">{title}</h3>
        </div>
        <div>
          <p className="text-primaryMedium text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
