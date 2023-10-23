import React from "react";
import { faSackDollar,faBell,faCircleQuestion,faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Header = ({ props }: { props?: React.ReactNode }) => {
  return (
    <nav
      className="w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-5 flex-col flex-col-reverse md:flex-row">
        <div>
          {props}
        </div>
        <div>
          <ul
            className="flex items-center space-x-0 xl:space-x-6 p-4 font-sm rounded-lg">
            <li>
              <a href="#"
                 className=" pl-3 pr-4 hover:text-gray-dark  text-gray-soft">
                <FontAwesomeIcon className='mr-3' icon={ faSackDollar}/>
                My Savings</a>
            </li>
            <li>
              <a href="#"
                 className=" pl-3 pr-4 rounded hover:text-gray-dark  text-gray-soft">
                <FontAwesomeIcon className='mr-3' icon={faBell}/>
                Notifications</a>
            </li>
            <li>
              <a href="#"
                 className=" pl-3 pr-4 rounded hover:text-gray-dark  text-gray-soft">
                <FontAwesomeIcon className='mr-3' icon={faCircleQuestion}/>
                Help</a>
            </li>
            <li>
              <button type="button"
                      className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-2 text-center">
                <FontAwesomeIcon className='mr-3' icon={faPlus}/>
                Check bill
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
