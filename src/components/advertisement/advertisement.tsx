import pig from "@assets/images/pig.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Advertisement = () => {
  return (
    <div className='bg-purple text-white rounded-lg max-h-36 p-4 mb-7 relative'>
      <p className='text-xs'>Do you now that 80%of medical bills contain errors?</p>
      <p>Picture,upload, and check a bill.</p>
      <button type="button"
              className="text-purple bg-white font-medium rounded-lg text-sm px-4 py-1 text-center mt-2">
        Checking now
      </button>
      <img src={pig} className='hidden sm:block w-[20%] absolute -top-[35%] right-[10%]' alt="Pig illustration" />
      <button className="w-6 h-6 bg-white opacity-40 rounded-full border border-gray-soft text-gray-dark shadow-md absolute top-4 right-4">
        <FontAwesomeIcon icon={faXmark} className='m-auto'/>
      </button>
    </div>

  );
};

export default Advertisement;
