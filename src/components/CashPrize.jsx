import React from "react";

const prize = [
  500, 1000, 2000, 5000, 10000, 20000, 50000, 75000, 150000, 250000, 500000,
  1000000,
];

const CashPrize = ({currentIndex}) => {
  return (
    <div className="border m-3 overflow-hidden h-fit rounded-md">
      <p className="bg-green-300 border-b px-4 py-2">Question value</p>
      <div className="flex flex-col items-center justify-center ">
        {prize.map((prize, index) => (
          <p className={`border-b last:border-none py-1 w-full flex items-center justify-center ${currentIndex === index ? "bg-yellow-200" : ""}`} key={index}>{prize}</p>
        ))}
      </div>
    </div>
  );
};

export default CashPrize;
