import React from "react";
import {NavLink} from "react-router-dom";
import {IMenuRoute} from "../../interfaces/tabs";
const MenuRoute: React.FC<IMenuRoute> = ({ to, icon, label }) => {
  return (
    <NavLink to={to} className="p-2.5 mt-3 flex items-center rounded-r-3xl px-4" style={({ isActive }) => ({
      ...(isActive
        ? {
          backgroundColor: '#7e77e5',
          color: 'white',
        }
        : {
          color: '#4A4A4A',
        }),
    })}>
      <div className='flex items-center space-x-8'>
        <span aria-label={label} className="overflow-visible text-xl">
          {icon}
        </span>
        <span className='text-xl'>{label}</span>
      </div>
    </NavLink>
  );
};







  export default MenuRoute;
