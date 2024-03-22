import React from "react";
import {faHome, faCommentMedical,faRightFromBracket,faCircleUser,faFileLines} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IMenuRoute} from "../../interfaces/menu-route";



type RouteDictionary = Record<string, IMenuRoute>;

const routes: RouteDictionary = {
  home: {
    index: 1,
    icon: <FontAwesomeIcon icon={faHome} />,
    label: "Home",
    link: "/",
  },
  insurance: {
    index: 2,
    icon: <FontAwesomeIcon icon={faFileLines} />,
    label: "Bills",
    link: "/insurance",
  },
  negotiation: {
    index: 3,
    icon: <FontAwesomeIcon icon={faCommentMedical} />,
    label: "Appointments",
    link: "/negotiation",
  },
  profile: {
    index: 7,
    icon: <FontAwesomeIcon icon={faCircleUser} />,
    label: "Profile",
    link: "/profile",
  },
  logout: {
    index: 4,
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    label: "Log Out",
    link: "/logout",
  },
};

export default routes;
