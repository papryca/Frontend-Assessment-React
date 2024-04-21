import bill from "@assets/images/bill1.jpeg";
import bill1 from "@assets/images/bill2.jpeg";
import bill2 from "@assets/images/bill3.jpeg";
import {IBillOverview} from "../../interfaces/tabs-bill-overview";

const overviews: IBillOverview[] = [
  {
    index: 1,
    bill: bill,
    name: "John Smith",
    providersName: "WellnessWorks Medical Center",
    visitDate:'Feb 25,2023',
    visitDue:'Mar 18,2023',
    status:'Unpaid',
    owe: '$1200',
    category: "Colonoscopy",
  },
  {
    index: 2,
    bill: bill1,
    name: "Emily Johnson",
    providersName: "CareFirst Medical Institute",
    visitDate:'Feb 25,2023',
    visitDue:'Mar 18,2023',
    status:'Unpaid',
    owe: '$1200',
    category: "Colonoscopy",
  },
  {
    index: 3,
    bill: bill2,
    name: "Michael Williams",
    providersName: "VitaCare Health Center",
    visitDate:'Feb 25,2023',
    visitDue:'Mar 18,2023',
    status:'Unpaid',
    owe: '$1200',
    category: "Colonoscopy",
  },
];

export default overviews;
