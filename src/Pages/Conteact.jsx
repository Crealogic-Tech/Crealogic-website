import React, { useState, useEffect } from 'react';
import TidyCalEmbed from '../Components/TidyCalEmbed/TidyCalEmbed';
import SecondHeader from '../Components/Header/SecondHeader';

import HeaderLogo from "../assets/images/favicon.svg";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay to match your data fetching time

    // Clean up the timer if the component unmounts
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
