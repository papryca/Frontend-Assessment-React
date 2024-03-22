import MenuRoute from "./menu-route";
import routes from "./tabs-menu";
import {ReactComponent as LogoImage} from "@assets/icons/logo.svg";
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className={`flex w-16 ${isMenuOpen ? 'lg:w-60' : 'lg:w-16'} duration-300`}>
      </div>
      <div className='fixed'>
        <div
          className={`border-r border-gray-soft h-screen pr-4 flex flex-col justify-between w-16 ${isMenuOpen ? 'lg:w-60' : 'lg:w-16'} duration-300 relative`}>
          <div className='overflow-y-auto'>
            <LogoImage className="w-20 h-20 mt-2 ml-2 mb-8"/>
            <MenuRoute key={routes.home.link} to={routes.home.link} icon={routes.home.icon} label={routes.home.label}/>
            <MenuRoute key={routes.insurance.link} to={routes.insurance.link} icon={routes.insurance.icon}
                       label={routes.insurance.label}/>
            <MenuRoute key={routes.negotiation.link} to={routes.negotiation.link} icon={routes.negotiation.icon}
                       label={routes.negotiation.label}/>
          </div>
          <div className='overflow-y-auto pb-5'>
            <label className="relative cursor-pointer" htmlFor="light-switch">
              <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-slate-300"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                />
                <path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"/>
              </svg>
              <svg className="hidden dark:block m-4" width="30" height="24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-slate-400"
                      d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"/>
                <path
                  className="fill-slate-500"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                />
              </svg>
              <span className="sr-only">Switch to light / dark version</span>
            </label>
            <MenuRoute key={routes.profile.link} to={routes.profile.link} icon={routes.profile.icon}
                       label={routes.profile.label}/>
            <MenuRoute key={routes.logout.link} to={routes.logout.link} icon={routes.logout.icon}
                       label={routes.logout.label}/>
          </div>
          <button
            className="w-7 h-7 bg-white rounded-full border border-gray-soft text-gray-dark  shadow-md absolute top-6 -right-4 hidden lg:block"
            onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faAngleLeft : faAngleRight} className='m-auto'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
