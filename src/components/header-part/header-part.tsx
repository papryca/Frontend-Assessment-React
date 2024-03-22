import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSparkles} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function HeaderPart() {

  return (
    <div className='flex items-center space-x-2'>
      <span className='text-xl font-bold tracking-wider md:text-2xl lg:text-3xl'>Hello, Jim</span>
      <span className="text-3xl text-yellow-400">
          <FontAwesomeIcon className='ml-0' icon={ faHandSparkles}/>
        </span>
    </div>
  );
}
export default HeaderPart;
