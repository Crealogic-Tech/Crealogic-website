import React from "react";

const ImageContent = ({ src, alt, justify }) => {
  return (
    <div
      className={`max-w-sm text-center items-center flex about__thumb-image ${justify}`}
      data-aos="fade-up"
      data-aos-delay="400" 
    >
      
      <img src={src} alt={alt || "Image"} className="w-full h-full" />
    </div>
  );
};

export default ImageContent;
