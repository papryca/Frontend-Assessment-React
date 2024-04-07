import {useLocation, useNavigate} from "react-router-dom";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

function Breadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();
  function capitalizeFirstLetter(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const pathParts = location.pathname.split('/').filter((part) => part !== '' && !part.match("[0-9]+"));

  return (
    <div className='text-gray-dark text-sm md:text-md font-bold lg:text-2xl ml-5'>
      <button onClick={() => navigate('/')} className='text-gray-soft'>Home</button>
      {pathParts.map((part, index) => (
        <span key={part}>
          <FontAwesomeIcon icon={faAngleRight} className='m-auto text-gray-dark mx-4'/>
          <button onClick={() => navigate(`/${pathParts.slice(0, index + 1).join('/')}`)}>
            {capitalizeFirstLetter(part)}
          </button>
        </span>
      ))}
    </div>
  );
}
export default Breadcrumbs;
