import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faCheck} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Instruction = () => {
  return (
    <div className='bg-purple-medium rounded-lg p-3 relative'>
      <p className='text-sm text-gray-dark'>LETS START WITH THE SAVING</p>
      <p className='text-base'>4 steps for bill negotiation :)</p>
      <button className="w-6 h-6 text-gray-dark absolute top-4 right-4">
        <FontAwesomeIcon icon={faXmark} className='m-auto'/>
      </button>
      <p className="h-2 bg-red rounded-full my-2"></p>
      <div className='my-2 flex space-x-4' >
        <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
        <p className='text-base text-gray-dark line-through decoration-purple decoration-2'>Upload a bill</p>
      </div>
      <div className='my-2 flex space-x-4'>
        <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
        <p className='text-base text-gray-dark line-through decoration-purple decoration-2'>Check your bill to find saving opportunities</p>
      </div>
      <div className='my-2 flex space-x-4'>
        <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
        <p className='text-base text-gray-dark line-through decoration-purple decoration-2'>Improve basic information</p>
      </div><div className='my-2 flex space-x-4'>
        <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
        <p className='text-base text-gray-dark line-through decoration-purple decoration-2'>Leave the negotiation work to Truffle</p>
      </div>
    </div>

  );
};

export default Instruction;
