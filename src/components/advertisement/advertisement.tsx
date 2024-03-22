import pig from "@assets/images/pig.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

const Advertisement = () => {
  const [isVisible, setIsVisible] = useState(true);

  function hideAdvertisement() {
    setIsVisible(false);
  }

  return (
    <>
      {isVisible && (
      <div className='bg-purple text-white rounded-lg h-24 p-4 mb-7 relative'>
        <p className='text-xs leading-6'>Are you keeping track of your medical expenses and appointments?</p>
        <p>Picture,upload, and be aware.</p>
        <img src={pig} className='hidden sm:block w-[20%] absolute -top-[42%] right-[10%]' alt="Pig illustration"/>
        <button
          className="w-6 h-6 bg-white opacity-40 rounded-full border border-gray-soft text-gray-dark shadow-md absolute top-4 right-4"
          onClick={hideAdvertisement}>
          <FontAwesomeIcon icon={faXmark} className='m-auto'/>
        </button>
      </div>
      )}
    </>
  );
};

export default Advertisement;
