import React from "react";
import bill from "@assets/images/bill1.jpeg";
import bill1 from "@assets/images/bill2.jpeg";
import bill2 from "@assets/images/bill3.jpeg";
import face1 from "@assets/images/face1.png";
import {ICard} from "../../interfaces/tabs-card";


const cards: ICard[] = [
  {
    index: 1,
    bill: bill,
    icon: face1,
    name: "Julia",
    date:'August 25,2023',
    due:'Oct 25,2023',
    price: '$1200',
    link: "/",
  },
  {
    index: 2,
    bill: bill1,
    icon: face1,
    name: "Julia",
    date:'August 25,2023',
    due:'Oct 25,2023',
    price: '$1200',
    link: "/",
  },
  {
    index: 3,
    bill: bill2,
    icon: face1,
    name: "Julia",
    date:'August 25,2023',
    due:'Oct 25,2023',
    price: '$1200',
    link: "/",
  },
];

export default cards;
