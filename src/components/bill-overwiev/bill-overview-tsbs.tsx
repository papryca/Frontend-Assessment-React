import bill from "@assets/images/bill1.jpeg";
import bill1 from "@assets/images/bill2.jpeg";
import bill2 from "@assets/images/bill3.jpeg";
import {IBillOverview} from "../../interfaces/tabs-bill-overview";

const overviews: IBillOverview[] = [
  {
    index: 1,
    bill: bill,
    name: "Julia",
    providersName: "Baylor Scott & White Medical Center",
    visitDate:'Feb 25,2023',
    visitDue:'Mar 18,2023',
    type:'In-network',
    owe: '$1200',
    category: "Colonoscopy",
  },
  {
    index: 2,
    bill: bill1,
    name: "Julia",
    providersName: "Baylor Scott & White Medical Center",
    visitDate:'Feb 25,2023',
    visitDue:'Mar 18,2023',
    type:'In-network',
    owe: '$1200',
    category: "Colonoscopy",
  },
  {
    index: 3,
    bill: bill2,
    name: "Julia",
    providersName: "Baylor Scott & White Medical Center",
    visitDate:'Feb 25,2023',
    visitDue:'Mar 18,2023',
    type:'In-network',
    owe: '$1200',
    category: "Colonoscopy",
  },
];

export default overviews;
