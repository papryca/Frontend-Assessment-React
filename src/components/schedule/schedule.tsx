import React from "react";
import face2 from "@assets/images/face2.png";
import schedule from "@components/schedule/schedule-tabs";
import {ISchedule} from "../../interfaces/schedule";

const Schedule: React.FC = () => {
  return (
    <div>
      < p className='text-2xl dark:text-gray-soft'>Schedule</p>
      <div className='grid lg:grid-cols-2 gap-5 mt-10 grid-cols-1 '>
        {schedule.map((schedule: ISchedule, key: number) => (
          <div>
            <div
              className='bg-white rounded-md shadow-[-4px_0_#7e77e5] p-3 mb-1 dark:bg-article-background-dark dark:text-white'>
              <div className='flex items-center gap-5'>
                <img className="inline-block w-[10%] rounded-full ring-2 ring-white"
                     src={face2}
                     alt=""/>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{schedule.name}</h3>
                  <p className="text-sm font-semibold text-indigo-600">{schedule.age}</p>
                </div>
              </div>
              <div className='grid grid-cols-4 m-3 gap-5'>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Date</h3>
                  <p className="text-sm font-semibold text-indigo-600">{schedule.date}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Visit time</h3>
                  <p className="text-sm font-semibold text-indigo-600">{schedule.visitTime}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Doctor</h3>
                  <p className="text-sm font-semibold text-indigo-600">{schedule.doctor}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                  <p className="text-sm font-semibold text-indigo-600">{schedule.address}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Schedule;
