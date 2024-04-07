import React, {useState} from "react";
import {faAngleDown, faAngleUp, faFileMedical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import services from "@components/service-accordion/tabs-service";

const ServiceAccordion = () => {
  const [accordion, setAccordion] = useState(true);

  const toggleAccordion = (accordionNumber: number) => {
    setAccordion(!accordion);
  };
  return (
    <div className="w-full rounded-lg bg-white p-4 relative dark:bg-article-background-dark">
      <p className='text-sm text-gray-dark pb-2'>BILL BREAKDOWN</p>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full font-medium text-left text-purple border-b dark:text-white"
          onClick={() => toggleAccordion(1)}
        >
          <div className='flex space-x-2'>
            <FontAwesomeIcon icon={faFileMedical} className='m-auto'/>
            <span className='text-base py-4'>Service breakdown</span>
          </div>
          <FontAwesomeIcon icon={accordion ? faAngleDown : faAngleUp} className='text-gray-dark'/>
        </button>
      </h2>
      {services.map((service) => (<div
        className={`${accordion ? 'block' : 'hidden'}`}
      >
          <ul className="list-inside list-none pl-6">
            <li className="mb-2 relative">
              <div className="w-4 h-4 absolute -left-6 top-1 bg-purple rounded-full dark:text-white"></div>
              Service {service.index} {service.name}
            </li>
          </ul>
          <div>
          <span className='bg-purple-medium rounded-md px-2 py-2 text-purple text-sm ml-2'>CPT code:{service.code}</span>
          <span className='bg-purple-medium rounded-md px-2 py-2 text-purple text-sm ml-2'>Sticker price:{service.price}</span>
          <p className='py-4 px-2 text-sm text-gray-soft dark:text-white'>{service.content1} </p>
          <p className='text-sm px-2 text-gray-soft pb-2 dark:text-white'>{service.content2}</p>
          </div>
      </div>
      ))}
      <button type="button"
              className="text-white bg-purple text-xl rounded-lg w-full text-sm px-4 py-2 text-center">
        Let BeAware help you!
      </button>
    </div>

  );
};
export default ServiceAccordion;
