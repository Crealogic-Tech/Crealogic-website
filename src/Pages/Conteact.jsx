import React, { useState, useEffect } from 'react';
import TidyCalEmbed from '../Components/TidyCalEmbed/TidyCalEmbed';
import SecondHeader from '../Components/Header/SecondHeader';

import HeaderLogo from "../assets/images/favicon.svg";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SecondHeader />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="inline-block " role="status">
            <img src={HeaderLogo} alt="" className=' animate-spin'/>
          </div>
        </div>
      ) : (
        <TidyCalEmbed />
      )}
    </div>
  );
};

export default Contact;
