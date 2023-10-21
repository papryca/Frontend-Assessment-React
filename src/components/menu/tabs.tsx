import React from "react";
import {faHome, faComment,faRightFromBracket,faCircleUser,faFileLines} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IMenuRoute {
  index: number;
  icon: React.ReactElement;
  label: string;
  link: string;
}

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
    label: "Insurance",
    link: "/insurance",
  },
  negotiation: {
    index: 3,
    icon: <FontAwesomeIcon icon={faComment} />,
    label: "Negotiation",
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
