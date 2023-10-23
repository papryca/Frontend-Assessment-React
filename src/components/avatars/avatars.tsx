import face1 from "@assets/images/face1.png";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import face4 from "@assets/images/face4.png";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Avatars = () => {
  return (
    <div className='bg-white rounded-lg my-6 '>
      <div className='flex justify-between p-4 text-gray-soft text-sm '>
        <p>INSURANCE ACCOUNT</p>
        <p>Edit</p>
      </div>
      <div className='flex p-4 text-gray-soft text-sm items-center justify-between'>
        <p className='text-base text-gray-dark'>Anthem Family</p>
        <div className='flex items-center '>
          <div className="flex -space-x-2 overflow-hidden pr-3 justify-end">
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face1}
                 alt=""/>
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face2}
                 alt=""/>
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face3}
                 alt=""/>
            <img className="inline-block w-[15%] rounded-full ring-2 ring-white"
                 src={face4}
                 alt=""/>
          </div>
          <FontAwesomeIcon icon={faAngleDown}/>
        </div>

      </div>
    </div>

  );
};

export default Avatars;
