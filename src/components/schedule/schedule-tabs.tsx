import face1 from "@assets/images/face1.png";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import face4 from "@assets/images/face4.png";
import {ISchedule} from "../../interfaces/schedule";

const schedule: ISchedule[] = [
  {
    index: 1,
    icon: face1,
    name: "Johna Johnson",
    age: "Age:12",
    date:'September 13, 2023',
    visitTime:'10 AM',
    doctor: 'Dr. Olivia Davis - Therapist',
    address: "123 Main Street",
  },
  {
    index: 2,
    icon: face2,
    name: "Emilia Johnson",
    age: "Age:19",
    date:'September 19, 2023',
    visitTime:'9 AM',
    doctor: 'Dr. Michael Patel - Dermatologist',
    address: "123 Main Street",
  },
  {
    index: 3,
    icon: face3,
    name: "Johna Johnson",
    age: "Age:35",
    date:'September 19, 2023',
    visitTime:'10 AM',
    doctor: 'Dr. Emily Chen - Dermatologist',
    address: "123 Elm Street",
  },
  {
    index: 1,
    icon: face4,
    name: "Johna Johnson",
    age: "Age:18",
    date:'September 13, 2023',
    visitTime:'11 AM',
    doctor: 'Dr. Benjamin Hayes - Therapist',
    address: "123 Main Street",
  },
];

export default schedule;
