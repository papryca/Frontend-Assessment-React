import {useState} from 'react';
import ReactCalendar from 'react-calendar';
import './calendar.css';
import face1 from "@assets/images/face1.png";
import face2 from "@assets/images/face2.png";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = () => {
  const [startDate, setStartDate] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-md p-4 dark:dark:bg-article-background-dark'>
      <p className='text-gray-dark text-md dark:text-white'>CALENDAR</p>
      <ReactCalendar
        value={startDate}
        onChange={setStartDate}
        className='dark:bg-article-background-dark dark:text-white'
      />
      <p className='text-sm p-4 underline '>No medical bills and appointments due today</p>
      <div className='bg-page-background rounded-md shadow-[-4px_0_#7e77e5] p-3 mb-1 dark:bg-page-background-dark dark:text-white'>
        <div className='flex items-center gap-5'>
          <img className="inline-block w-[10%] rounded-full ring-2 ring-white"
               src={face2}
               alt=""/>
          <div>
            <p className='text-sm'>Catrin-Thusday,September 13, 2023</p>
            <p className=''>Therapist - 123 Main Street </p>
          </div>
        </div>
      </div>
      <div className='bg-page-background rounded-md shadow-[-4px_0_#7e77e5] p-3 dark:bg-page-background-dark dark:text-white'>
        <div className='flex items-center gap-5'>
          <img className="inline-block w-[10%] rounded-full ring-2 ring-white"
               src={face1}
               alt=""/>
          <div>
            <p className='text-sm'>Catrin-Thusday,September 13, 2023</p>
            <p className=''>Therapist - 123 Main Street </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
