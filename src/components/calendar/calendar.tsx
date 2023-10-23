import {useState} from 'react';
import ReactCalendar from 'react-calendar';
import './calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = () => {
  const [startDate, setStartDate] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-md p-4'>
      <p className='text-gray-dark text-md'>CALENDAR</p>
      <ReactCalendar
        value={startDate}
        onChange={setStartDate}
      />
      <p className='text-sm p-4'>No medical bills due today</p>
      <div className='bg-page-background rounded-md shadow-[-4px_0_#7e77e5] p-3'>
        <p className='text-sm'>Thusday,September 13, 2023</p>
        <p className=''>Bills from Provider's name</p>
      </div>
    </div>
  );
};

export default Calendar;
