import React from 'react';

const LogoSection = () => {
  const items = ['Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello'];

  return (
    <div className='overflow-hidden'>
      <div className='flex justify-between items-center'>
        {items.concat(items).map((item, index) => (
          <div className='box' key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
