// ImageContent.js
import React from "react";

const ImageContent = ({ src, alt, justify }) => {
  return (
    <div className= {`flex about__thumb-image ${justify} `}>
      {/* <div className="absolute top-[30%] right-6 w-[300px] h-[300px] animate-pulse rounded-full blur-[100px] opacity-10 bg-gradient-45 "></div> */}
      <img src={src} alt={alt || "Image"} className="w-full h-full "/>
    </div>
  );
};

export default ImageContent;
