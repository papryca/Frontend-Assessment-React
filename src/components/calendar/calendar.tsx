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
      <p className='text-sm p-4 underline dark:text-white'>No medical bills and appointments due today</p>
    </div>
  );
};

export default Calendar;
