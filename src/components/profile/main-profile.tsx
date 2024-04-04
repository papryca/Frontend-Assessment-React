import face1 from "@assets/images/face1.png";
import eye from "@assets/icons/eye.png";
import eyeHidden from "@assets/icons/eye-hidden.png";
import React, {useState} from "react";

const MainProfile = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  function changeVisibility() {
    setVisiblePassword(prevState => !prevState);
  }
  const passwordValue = visiblePassword ? '12345qwerty' : '*******';
  return (
    <div className="bg-white overflow-visible rounded-lg w-4/6 mt-10 relative dark:bg-article-background-dark m-auto">
      <div className='flex justify-between p-6 pb-0 text-gray-soft text-sm  '>
      </div>
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-soft">
          User Profile
        </h3>
        <p className='text-gray-soft hover:text-gray-dark cursor-pointer dark:hover:text-white'>Edit</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Full name
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              John Smith
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Age
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              12
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Email address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              johnsmith@example.com
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:text-white">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Phone number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              (123) 456-0000
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              123 Grow St<br/>
              NY, USA 12345
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Login
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              john_smith
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Password
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="max-w-sm">
                <div className="relative">
                  <input id="hs-toggle-password" type={
                    visiblePassword ? "text" : "password"
                  }
                         className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 dark:text-white dark:bg-gray-dark"
                         placeholder="Enter password" value={passwordValue}/>
                  <button type="button" onClick={changeVisibility} data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' className="absolute top-12 end-0 p-3.5 rounded-e-md">
                    {visiblePassword ? <img className="rounded-full absolute -top-12 right-[45%]" src={eyeHidden}
                                            alt="Eye icon"/> :
                      <img className="rounded-full absolute -top-10 right-[45%]" src={eye}
                           alt="Eye icon"/>}
                  </button>
                </div>
              </div>
            </dd>
          </div>
          <img className="h-24 w-24 rounded-full absolute -top-12 right-[45%]" src={face1} alt="Family memders image"/>
        </dl>
      </div>
    </div>
  )
}
export default MainProfile;
