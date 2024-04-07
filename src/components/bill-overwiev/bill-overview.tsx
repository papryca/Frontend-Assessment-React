import React from "react";
import hospital from "@assets/images/hospital.png";
import calendar from "@assets/images/calendar.png";
import money from "@assets/images/money.png";
import global from "@assets/images/global-network.png";
import category from "@assets/images/category.png";
import user from "@assets/images/user.png";
import due from "@assets/images/due-date.png";
import overviews from "@components/bill-overwiev/bill-overview-tsbs";
import {useParams} from "react-router-dom";

const BillOverview = () => {
  const { id } = useParams();
  return (
    <div className='w-full md:w-1/3 px-5 md:px-0 my-5 md:my-0'>
      {overviews.map((overview, i) => {
        if ((i + 1).toString() === id) {
          return (
            <div key={i} className='bg-white rounded-lg text-base relative dark:bg-article-background-dark'>
              <p className='text-sm text-gray-dark py-4 dark:text-white'>BILL OVERVIEW</p>
              <img src={overview.bill} alt="Bill image" className="w-full h-80 rounded-lg" />
              <div className='flex space-x-2 pt-2 items-baseline text-sm'>
                <img src={hospital} alt="Hospital image" className="w-4 h-4" />
                <p className='text-sm text-gray-soft'>Provider's name</p>
              </div>
              <p className='dark:text-white'>{overview.providersName}</p>
              <div className='flex flex-row space-x-10'>
                <div>
                  <div className='flex space-x-2 pt-2 items-baseline'>
                    <img src={user} alt="Hospital image" className="w-4 h-4" />
                    <p className='text-sm text-gray-soft'>Patient name</p>
                  </div>
                  <p className='dark:text-white'>{overview.name}</p>
                  <div className='flex space-x-2 pt-2 items-baseline'>
                    <img src={global} alt="Hospital image" className="w-4 h-4" />
                    <p className='text-sm text-gray-soft'>Status</p>
                  </div>
                  <p className='dark:text-white'>{overview.status}</p>
                  <div className='flex space-x-2 pt-2 items-baseline'>
                    <img src={money} alt="You owe" className="w-4 h-4" />
                    <p className='text-sm text-gray-soft'>You owe</p>
                  </div>
                  <p className='dark:text-white'>{overview.owe}</p>
                </div>
                <div>
                  <div className='flex space-x-2 pt-2 items-baseline'>
                    <img src={calendar} alt="Hospital image" className="w-4 h-4" />
                    <p className='text-sm text-gray-soft'>Visit date</p>
                  </div>
                  <p className='dark:text-white'>{overview.visitDate}</p>
                  <div className='flex space-x-2 pt-2 items-baseline'>
                    <img src={category} alt="Hospital image" className="w-4 h-4" />
                    <p className='text-sm text-gray-soft'>Category</p>
                  </div>
                  <p className='dark:text-white'>{overview.category}</p>
                  <div className='flex space-x-2 pt-2 items-baseline'>
                    <img src={due} alt="Hospital image" className="w-4 h-4" />
                    <p className='text-sm text-gray-soft'>Due date</p>
                  </div>
                  <p className='dark:text-white'>{overview.visitDue}</p>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
export default BillOverview;
