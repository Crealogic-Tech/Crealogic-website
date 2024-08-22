import React from 'react';

const BrandLogo = ({ title }) => {
  return (
    <div className="flex items-center justify-center space-x-4 py-6">
      <hr className="flex-1 border-t opacity-[0.5] border-white" />
      <div
        className="bg-white text-primaryDark uppercase font-semibold text-lg tracking-wide py-2 px-9"
        style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        }}
      >
        {title}
      </div>
      <hr className="flex-1 border-t opacity-[0.5] border-white" />
    </div>
  );
};

export default BrandLogo;
