import React from "react";
import Advertisement from "@components/advertisement/advertisement";
import LineChart from "@components/chart/chart";

const HomeSection = () => {
  return (
    <div className='lg:w-3/5 px-5 box-border'>
      <Advertisement></Advertisement>
      <LineChart></LineChart>
    </div>
  );
};

export default HomeSection;
