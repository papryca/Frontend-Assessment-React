import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "@components/card/card";
import money from "@assets/images/money.svg";
import cards from "@components/card/card-tabs";

const Main = () => {
  return (
    <div className='lg:w-2/3 px-5 box-border'>
      <p className='text-2xl'>My bills</p>
      <div>
        <ul
          className="flex justify-between space-x-8 px-0 py-4 font-sm rounded-lg">
          <li>
            <button type="button"
                    className="text-gray-soft bg-white font-medium rounded-lg text-sm px-4 py-2 text-center">
              All({cards.length})
            </button>
          </li>
          <li>
            <button type="button"
                    className="text-gray-soft bg-white font-medium rounded-lg text-sm px-4 py-2 text-center">
              Unpaid bills(3)
            </button>
          </li>
          <li>
            <button type="button"
                    className="text-gray-soft bg-white font-medium rounded-lg text-sm px-4 py-2 text-center">
              Paid bills
            </button>
          </li>
          <FontAwesomeIcon icon={faAngleRight} className='m-auto text-purple'/>
        </ul>
      </div>
      {cards.map(card =><Card card={card} key={card.index}/> )}
    </div>

  );
};

export default Main;
