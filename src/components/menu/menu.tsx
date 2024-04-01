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
