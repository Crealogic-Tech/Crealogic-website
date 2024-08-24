import React from "react";
const Divider = ({ title, images }) => {
  return (
    <div className="flex justify-between items-center">
      <div class="flex mx-auto w-full gap-y-2 gap-x-2">
        <div className="hidden md:flex bg-[#d7cccc] w-[7px] round h-[7px] justify-center items-center rounded-full  self-center"></div>
        <div class="flex items-center justify-center flex-1">
          <div class="hidden md:flex justify-center items-center flex-1 gap-2">
            <div class="flex w-full h-0.5 rounded-[50px] bg-[#d7cccc] round "></div>
            <div class="flex bg-[#d7cccc] w-[7px] round h-[7px] justify-center items-center rounded-full  self-center"></div>
          </div>
          <div class="flex p-5">
            <div class="w-[5px] h-[5px] md:w-[10px] md:h-[10px] bg-[#d7cccc] rounded-full"></div>
          </div>

          <div class="block items-center justify-center flex-none">
            <div class="tag  flex justify-center items-center rounded-lg gap-3 py-1">
              <p class="text-secondry uppercase font-medium text-lg ">
                {title}
              </p>
            </div>
          </div>
          <div class="flex p-5">
            <div class="w-[5px] h-[5px] md:w-[10px] md:h-[10px] bg-[#d7cccc] rounded-full"></div>
          </div>

          <div class="hidden md:flex justify-center items-center flex-1 gap-2">
            <div class="flex bg-[#d7cccc] w-[7px] round h-[7px] justify-center items-center rounded-full  self-center"></div>
            <div class="flex w-full h-0.5 rounded-[50px] bg-[#d7cccc] round "></div>
          </div>
        </div>
        <div className="hidden md:flex bg-[#d7cccc] w-[7px] round h-[7px] justify-center items-center rounded-full  self-center"></div>
      </div>
    </div>
  );
};

export default Divider;
