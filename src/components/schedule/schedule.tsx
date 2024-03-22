import face1 from "@assets/images/face1.png";
import React from "react";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import cards from "@components/card/card-tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faPlus} from "@fortawesome/free-solid-svg-icons";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-grey lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}
const Schedule =() => {
  return (
    <div className='px-5 box-border'>
      <p className='text-2xl'>Schedule</p>
      <div>
        <ul
          className="flex justify-between space-x-8 px-0 py-4 font-sm rounded-lg">
          <li>
            <button type="button"
                    className="text-gray-soft bg-white font-medium rounded-lg text-sm px-4 py-2 text-center hover:text-purple">
              All({cards.length})
            </button>
          </li>
          <li>
            <button type="button"
                    className="text-gray-soft text-red-bright font-medium bg-red-soft opacity-50 rounded-lg text-sm px-4 py-2 text-center">
              Feature visits(4)
            </button>
          </li>
          <li>
            <button type="button"
                    className="text-gray-soft bg-white font-medium rounded-lg text-sm px-4 py-2 text-center hover:text-purple">
              Previous visits
            </button>
          </li>
          <FontAwesomeIcon icon={faAngleRight} className='m-auto text-purple'/>
        </ul>
      </div>
      <section className='dark:bg-dark w-[99%]'>
        <div className='container mx-5'>
          <div className='flex flex-wrap'>
            <div className='w-full'>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full table-auto'>
                  <thead className='text-center bg-primary'>
                    <tr>
                      <th className={TdStyle.ThStyle}> Name</th>
                      <th className={TdStyle.ThStyle}> Date</th>
                      <th className={TdStyle.ThStyle}> Visit time</th>
                      <th className={TdStyle.ThStyle}> Doctor</th>
                      <th className={TdStyle.ThStyle}> Address</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className={TdStyle.TdStyle}>
                        <div className="flex items-center">
                          <img className="h-16 w-16 rounded-full" src={face1} alt="Family memders image"/>
                          <div>
                            <h3 className="font-semibold text-gray-900">Johna Johnson</h3>
                            <p className="text-sm font-semibold text-indigo-600">Age:12</p>
                          </div>
                        </div></td>
                      <td className={TdStyle.TdStyle2}>May 3, 2024</td>
                      <td className={TdStyle.TdStyle}>10 AM</td>
                      <td className={TdStyle.TdStyle2}>Dr. Olivia Davis - Therapist</td>
                      <td className={TdStyle.TdStyle}>123 Main Street</td>
                      <td className={TdStyle.TdStyle2}>
                        <button type="button"
                                className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-2 text-center">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={TdStyle.TdStyle}>
                        <div className="flex items-center">
                          <img className="h-16 w-16 rounded-full" src={face2} alt="Family memders image"/>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">Emilia Johnson</h3>
                          <p className="text-sm font-semibold text-indigo-600">Age:19</p>
                        </div>
                      </div></td>
                      <td className={TdStyle.TdStyle2}>September 13, 2024</td>
                      <td className={TdStyle.TdStyle}>11 AM</td>
                      <td className={TdStyle.TdStyle2}>Dr. Michael Patel - Dermatologist</td>
                      <td className={TdStyle.TdStyle}>45 Oxford Road</td>
                      <td className={TdStyle.TdStyle2}>
                        <button type="button"
                                className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-2 text-center">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={TdStyle.TdStyle}>
                        <div className="flex items-center">
                          <img className="h-16 w-16 rounded-full" src={face3} alt="Family memders image"/>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">Michael Williams</h3>
                          <p className="text-sm font-semibold text-indigo-600">Age:32</p>
                        </div>
                      </div></td>
                      <td className={TdStyle.TdStyle2}>May 30, 2024</td>
                      <td className={TdStyle.TdStyle}>9 AM</td>
                      <td className={TdStyle.TdStyle2}>Dr. Emily Chen - Dermatologist</td>
                      <td className={TdStyle.TdStyle}>123 Elm Street</td>
                      <td className={TdStyle.TdStyle2}>
                        <button type="button"
                                className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-2 text-center">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={TdStyle.TdStyle}>
                        <div className="flex items-center pb-6">
                          <img className="h-16 w-16 rounded-full" src={face3} alt="Family memders image"/>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">Michael Williams</h3>
                          <p className="text-sm font-semibold text-indigo-600">Age:32</p>
                        </div>
                      </div></td>
                      <td className={TdStyle.TdStyle2}>May 18, 2024</td>
                      <td className={TdStyle.TdStyle}>8 AM</td>
                      <td className={TdStyle.TdStyle2}>Dr. Benjamin Hayes - Therapist</td>
                      <td className={TdStyle.TdStyle}>123 Elm Street</td>
                      <td className={TdStyle.TdStyle2}>
                        <button type="button"
                                className="text-white bg-purple font-medium rounded-lg text-sm px-4 py-2 text-center">
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Schedule;