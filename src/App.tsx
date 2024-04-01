import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Logout from "./pages/logout/logout";
import Appointments from "@pages/appointsment/appointments";
import Bills from "@pages/bills/bills";
import BillSummary from "@pages/bill-summary/bill-summary";
import ProfilePage from "./pages/profile/profile";

function App() {
  const [theme, setTheme] = useState( 'dark');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const changeMode = () => {
    setTheme(theme === 'dark' ? 'light':'dark')
  }
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }, []);
  return (
    <Router>
      <div className='bg-page-background dark:bg-red'>
        <label className=" relative cursor-pointer" htmlFor="light-switch">
          {theme === 'light' ? (
              <svg className=" light:block m-3 rounded-lg pl-1 border-purple border-2 pt-0.5 hover:bg-purple-soft"
                   width="30" height="24" xmlns="http://www.w3.org/2000/svg"
                   onClick={changeMode}>
                <path
                  className="bg-gray-soft"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                />
                <path className="bg-gray-soft" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"/>
              </svg>
            )
            : (
              <svg className=" dark:block m-3 rounded-lg pl-1 border-purple border-2 pt-0.5 hover:bg-purple-soft"
                   width="30" height="24" xmlns="http://www.w3.org/2000/svg" onClick={changeMode}>
                <path className="bg-gray-400"
                      d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"/>
                <path
                  className="fill-slate-500"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                />
              </svg>
            )
          }
          <span className="sr-only">Switch to light / dark version</span>
        </label>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/insurance" element={<Bills/>}/>
            <Route path="/negotiation" element={<Appointments/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/bill-summary/:id" element={<BillSummary/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
