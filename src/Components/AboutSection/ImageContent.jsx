import React from "react";

const ImageContent = ({ src, alt, justify }) => {
  return (
    <div
      className={`max-w-sm text-center items-center flex about__thumb-image ${justify}`}
      data-aos="fade-up"
      data-aos-delay="400" 
    >
      <div className="absolute top-[30%] right-6 w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 bg-gradient-45"></div>
      <img src={src} alt={alt || "Image"} className="w-full h-full" />
    </div>
  );
};

export default ImageContent;
