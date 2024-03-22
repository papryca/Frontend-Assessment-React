import face1 from "@assets/images/face1.png";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import face4 from "@assets/images/face4.png";
import {faAngleDown, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";

const Avatars = () => {
  const [isAvatarsOpen, setAvatarsOpen] = useState(false);

  function handleOpenAvatars() {
    setAvatarsOpen(true);
  }
  function handleCloseAvatars() {
    setAvatarsOpen(false);
  }

  return (
    <div className='bg-white rounded-lg mb-6'>
      <div className='flex justify-between p-4 text-gray-soft text-sm '>
        <p>FAMILY ACCOUNT</p>
        <p>Edit</p>
      </div>
      <div className='flex p-4 text-gray-soft text-sm items-center justify-between'>
        <p className='text-base text-gray-dark'>Our Family</p>
        <div className='flex items-center '>
          <div className="flex -space-x-2 overflow-hidden pr-3 justify-end">
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face1}
                 alt="Family members avatar"
                 onMouseEnter={handleOpenAvatars}
                 onMouseLeave={handleCloseAvatars}/>
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face2}
                 alt="Family members avatar"
                 onMouseEnter={handleOpenAvatars}
                 onMouseLeave={handleCloseAvatars}/>
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face3}
                 alt="Family members avatar"
                 onMouseEnter={handleOpenAvatars}
                 onMouseLeave={handleCloseAvatars}/>
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face4}
                 alt="Family members avatar"
                 onMouseEnter={handleOpenAvatars}
                 onMouseLeave={handleCloseAvatars}/>
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faAngleDown}/>
            {isAvatarsOpen && (
              <div className="absolute mt-5 flex -translate-x-96 px-4">
                <div
                  className="w-screen max-w-sm flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div className="flex items-center gap-x-14 pb-6">
                      <img className="h-16 w-16 rounded-full" src={face1} alt="Family memders image"/>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">John Smith</h3>
                        <p className="text-sm font-semibold text-indigo-600">Age:12</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-14 pb-6">
                      <img className="h-16 w-16 rounded-full" src={face2} alt="Family memders image"/>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">Emily Johnson</h3>
                        <p className="text-sm font-semibold text-indigo-600">Age:19</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-14 pb-6">
                      <img className="h-16 w-16 rounded-full" src={face3} alt="Family memders image"/>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">Michael Williams</h3>
                        <p className="text-sm font-semibold text-indigo-600">Age:32</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-14 pb-6">
                      <img className="h-16 w-16 rounded-full" src={face4} alt="Family memders image"/>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">Sarah Brown</h3>
                        <p className="text-sm font-semibold text-indigo-600">Age:90</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Avatars;
