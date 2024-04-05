import React from "react";
import {Link} from "react-router-dom";
import {ICard} from "../../interfaces/tabs-card";

interface CardProps {
  card: ICard
}

const Card = ({card}: CardProps) => {
  return (
    <div>
        <div className="flex bg-white rounded-lg  mb-2.5 dark:bg-article-background-dark sm:flex-col md:flex-row">
          <div className="w-32 h-32 rounded-lg relative m-4 ring-1 ring-purple-medium shadow-custom sm:mx-auto">
            <img src={card.bill} alt="bill image" className="absolute w-full h-full rounded-lg"/>
          </div>
          <form className="flex-auto px-3 pt-3 md:text-sm xm:text-xs">
            <div className="flex flex-wrap">
              <h1 className="flex-auto font-primary md:text-sm xm:text-xs dark:text-gray-soft">
                Visited
                <span className='bg-green-soft rounded-md px-2 py-1 text-green-bright ml-2'>New</span>
              </h1>
              <div className="text-gray-dark dark:text-white">
                {card.price} <span className='text-gray-soft'>billing amount</span>
              </div>
              <div className="w-full flex space-x-16 text-sm font-medium text-slate-700 mt-2">
                <div className='flex flex-col items-start max-w-max'>
                  <p className='text-gray-soft dark:text-white'>Bill owner</p>
                  <div className='flex flex-row items-center space-x-2 '>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                         src={card.icon} alt="Bill owner photo"/>
                    <p className='dark:text-white'>{card.name}</p>
                  </div>
                </div>
                <div className='flex flex-col items-start max-w-max'>
                  <p className='text-gray-soft'>Date of bill</p>
                  <div className='flex flex-row items-center space-x-2'>
                    <p className='dark:text-white'>{card.date}</p>
                  </div>
                </div>
                <div className='flex flex-col items-start max-w-max'>
                  <p className='text-gray-soft'>Due of bill</p>
                  <div className='flex flex-row items-center space-x-2'>
                    <p className='dark:text-white'>{card.due}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 text-sm p-2 bg-page-background rounded-lg dark:bg-page-background-dark">
              <div className=" space-x-4 flex justify-between font-semibold">
                <a href="#"
                   className="text-red-bright inline-block bg-red-soft rounded-md text-sm p-1">
                  Unpaid
                </a>
                <Link to={`/bill-summary/${card.index}`}>
                  <button type="button"
                          className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-1 text-center">
                  Check It
                </button>
                  </Link>
              </div>
            </div>
          </form>
        </div>
    </div>

  );
};

export default Card;
