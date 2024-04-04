import React from "react";
import {NavLink} from "react-router-dom";
import {IMenuRoute} from "../../interfaces/tabs-menu";
const MenuRoute: React.FC<IMenuRoute> = ({ to, icon, label,theme }) => {
  return (
    <NavLink to={to} className="p-2.5 mt-3 flex items-start rounded-r-3xl px-4" style={({ isActive }) => ({
      ...(isActive
        ? {
          backgroundColor: '#7e77e5',
          color: 'white',
        }
        : {
          color:  theme === 'dark' ? '#999999': '#4A4A4A',
        }),
    })}>
      <div className='flex items-start space-x-8'>
        <span aria-label={label} className="overflow-visible text-xl w-2">
          {icon}
        </span>
        <span className='text-xl w-32'>{label}</span>
      </div>
    </NavLink>
  );
};







  export default MenuRoute;
