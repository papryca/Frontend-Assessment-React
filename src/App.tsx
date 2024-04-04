import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Logout from "./pages/logout/logout";
import Appointments from "@pages/appointsment/appointments";
import Bills from "@pages/bills/bills";
import BillSummary from "@pages/bill-summary/bill-summary";
import ProfilePage from "./pages/profile/profile";
import ThemeToggler from "@components/menu/theme-toggler";

function App() {
  // const [theme, setTheme] = useState( 'dark');
  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);
  //
  // const changeMode = () => {
  //   setTheme(theme === 'dark' ? 'light':'dark')
  // }
  // useEffect(() => {
  //   if(window.matchMedia('(prefers-color-scheme:dark)').matches) {
  //     setTheme('dark')
  //   }
  //   else {
  //     setTheme('light')
  //   }
  // }, []);
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/insurance" element={<Bills/>}/>
            <Route path="/negotiation" element={<Appointments/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/bill-summary/:id" element={<BillSummary/>}/>
          </Routes>
          {/*<ThemeToggler theme={theme} changeMode={changeMode} />*/}
        </main>
      </div>
    </Router>
  );
}

export default App;
