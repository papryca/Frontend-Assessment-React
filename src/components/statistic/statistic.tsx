import React from "react";
import coins from "@assets/images/coins.svg";

const Statistic = () => {
  return (

    <div className=' rounded-lg p-3 mt-6 relative dark:bg-article-background-dark md:flex md:justify-between md:gap-3 lg:flex lg:flex-col lg:w-2/6 xl:flex xl:flex-col xl:w-2/6'>
      <div className='md:w-1/3 lg:w-full sm:mt-10'>
        <div className="p-4 bg-white shadow-lg w-full rounded-2xl dark:bg-article-background-dark">
          <div className="flex items-center">
            <p className="ml-2 text-md text-gray-dark font-semibold dark:text-white">Finance</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="my-4 text-3xl font-bold text-left text-gray-dark dark:text-white">12,500<span
              className="text-sm">$</span></p>
            <div className="flex items-center text-sm text-green-bright">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"/>
              </svg>
              <span>5.5%</span>
              <span className="text-gray-soft">vs last month</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-4 text-center bg-white border-t-4 border-indigo-500 rounded-2xl shadow w-84 mt-8 dark:bg-article-background-dark lg:w-full md:w-1/3 md:m-0">
        <div className="overflow-hidden">
          <div className="mb-8 text-2xl font-medium text-gray-800 dark:text-white xl:text-4xl">
            Premium
          </div>
          <div className="mb-10 text-sm font-light leading-loose">
            <div className="font-bold text-gray-800 dark:text-white xl:text-2xl">
              5000 clients
            </div>
            <div className='dark:text-white xl:text-xl'>
              All features
            </div>
            <div className='dark:text-white xl:text-xl'>
              Free support
            </div>
          </div>
          <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-white xl:text-4xl">
            <span>
                249 $
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            / month
          </div>
          <div className="px-4 mt-8">
            <button type="button"
                    className="py-2 px-4  bg-purple hover:bg-purple-soft focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Start
            </button>
          </div>
        </div>
      </div>
      <div className='lg:w-full md:w-1/3'>
        <img src={coins} alt="Coins image" className=""/>
      </div>
    </div>
  );
};

export default Statistic;
