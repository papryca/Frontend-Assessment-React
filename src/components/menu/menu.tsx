import MenuRoute from "./menu-route";
import routes from "./tabs-menu";
import {ReactComponent as LogoImage} from "@assets/icons/logo.svg";
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import ThemeToggler from "@components/menu/theme-toggler";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  return (
    <div>
      <div className={`flex w-16 ${isMenuOpen ? 'lg:w-60' : 'lg:w-16'} duration-300 dark:bg-article-background-dark`}>
      </div>
      <div className='fixed '>
        <div
          className={`border-r border-gray-soft pr-4 h-screen flex flex-col justify-between w-16 ${isMenuOpen ? 'lg:w-60' : 'lg:w-16'} duration-300 relative dark:bg-article-background-dark`}>
          <div className='overflow-y-auto'>
            <LogoImage className="w-10 h-10 mt-5 ml-1 mb-8"/>
            <MenuRoute key={routes.home.link} to={routes.home.link} icon={routes.home.icon} label={routes.home.label} theme={theme}/>
            <MenuRoute key={routes.insurance.link} to={routes.insurance.link} icon={routes.insurance.icon}
                       label={routes.insurance.label} theme={theme}/>
            <MenuRoute key={routes.negotiation.link} to={routes.negotiation.link} icon={routes.negotiation.icon}
                       label={routes.negotiation.label} theme={theme}/>
          </div>
          <div className='overflow-y-auto pb-5'>
            <ThemeToggler theme={theme} changeMode={changeMode} />
            <MenuRoute key={routes.profile.link} to={routes.profile.link} icon={routes.profile.icon}
                       label={routes.profile.label} theme={theme}/>
            <MenuRoute key={routes.logout.link} to={routes.logout.link} icon={routes.logout.icon}
                       label={routes.logout.label} theme={theme}/>
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
