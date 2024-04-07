import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import ServiceAccordion from "@components/service-accordion/service-accordion";
import BillOverview from "@components/bill-overwiev/bill-overview";
import Breadcrumbs from "@components/breadcrumps/breadcrumps";
import pig from "@assets/images/pig1.png";
import React from "react";


const BillSummary = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark'>
      <div className='flex'>
        <div>
          <Menu></Menu>
        </div>
        <div className='w-full mx-10'>
          <Header props={<Breadcrumbs />} />
          <div className='flex gap-8 md:flex my-5'>
            <div className='flex w-full md:w-2/3 flex-col min-h-screen'>
              <ServiceAccordion></ServiceAccordion>
              <div className='flex flex-row-reverse hidden md:block absolute left-62 -bottom-1'>
                <img src={pig} className='w-40 h-40 -bottom-1/3 right-10' alt="Pig illustration" />
              </div>

            </div>
            <BillOverview></BillOverview>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BillSummary;
