import React from "react";
import Button from "./Button";
import HeaderLogo from "../assets/images/HeaderLogo.svg";

const DialogBox = ({ isVisible, onClose ,aosType}) => {
  if (!isVisible) return null;

  return (

    <div className="fixed inset-auto left-1/2 bottom-8 transform -translate-x-1/2 w-9/12 md:w-9/12 mx-auto max-w-[800px] rounded-2xl bg-#3f1e1d14  text-secondry backdrop-blur-xl p-2 md:p-4 flex items-center justify-between gap-6 z-10 shadow-lg border border-[#d7cccc]">
      <div className="flex justify-between rounded-lg w-full gap-1 md:gap-24 items-center">
        <div className="flex gap-3 items-center">
          <img
            src={HeaderLogo}
            alt="Dialog Image"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-xl ">Get Started with Us</p>
          </div>
        </div>
        <Button onClick={onClose} aosType="zoom-in">Get Started!</Button>
      </div>
    </div>
  );
};

export default DialogBox;
