import face1 from "@assets/images/face1.png";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import face4 from "@assets/images/face4.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Profile =() => {
  return (
    <div className="bg-white rounded-lg sm:py-30 dark:bg-article-background-dark ">
      <div className='flex justify-between p-6 pb-0 text-gray-soft text-sm'>
        <p>FAMILY ACCOUNT</p>
        <p className='hover:text-gray-dark cursor-pointer dark:hover:text-white'>Edit</p>
      </div>
      <div className="mx-auto px-6">
        <div className="max-w-2xl pt-6 pb-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">Your family</h2>
          <button type="button"
                  className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-2 text-center">
            <FontAwesomeIcon className='mr-3' icon={faPlus}/>
            Add new
          </button>
        </div>
        <ul role="list" className="flex">
          <li>
            <div className="flex items-center gap-x-14 pb-6">
              <img className="h-16 w-16 rounded-full" src={face1} alt="Family memders image"/>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">John Smith</h3>
                <p className="text-sm font-semibold text-indigo-600">Age:12</p>
              </div>
            </div>
            <div className="flex items-center gap-x-14 pb-6">
              <img className="h-16 w-16 rounded-full" src={face2} alt="Family memders image"/>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Emily Johnson</h3>
                <p className="text-sm font-semibold text-indigo-600">Age:19</p>
              </div>
            </div>
            <div className="flex items-center gap-x-14 pb-6">
              <img className="h-16 w-16 rounded-full" src={face3} alt="Family memders image"/>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Michael Williams</h3>
                <p className="text-sm font-semibold text-indigo-600">Age:32</p>
              </div>
            </div>
            <div className="flex items-center gap-x-14 pb-6">
              <img className="h-16 w-16 rounded-full" src={face4} alt="Family memders image"/>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Sarah Brown</h3>
                <p className="text-sm font-semibold text-indigo-600">Age:90</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Profile;
