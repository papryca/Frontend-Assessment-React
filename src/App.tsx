import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Logout from "./pages/logout/logout";
import Profile from "./pages/profile/profile";
import Negotiation from "./pages/negotiation/negotiation";
import Insurance from "./pages/insurance/insurance";
import BillSummary from "@pages/bill-summary/bill-summary";

function App() {
  return (
    <Router>
          <div className='bg-page-background'>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/negotiation" element={<Negotiation />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/bill-summary/:id" element={<BillSummary />} />
              </Routes>
            </main>
          </div>
    </Router>
  );
}

export default App;
