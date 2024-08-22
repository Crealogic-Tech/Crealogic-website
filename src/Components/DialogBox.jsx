import React from 'react';
import Button from './Button';

const DialogBox = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-auto left-1/2 bottom-11 transform -translate-x-1/2 mx-auto max-w-[500px] rounded-2xl bg-primaryLight text-white p-6 flex items-center justify-between z-50 shadow-lg">
      <div className="flex items-center">
        <img
          src="/path/to/your/image.jpg"
          alt="Dialog Image"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-lg">Your text here</p>
        </div>
      </div>
      <Button onClick={onClose}>
        Let's Get Started!
      </Button>
    </div>
  );
};

export default DialogBox;
