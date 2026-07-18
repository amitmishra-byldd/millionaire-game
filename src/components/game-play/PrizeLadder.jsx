import React from "react";

const Prize = [
  500, 1000, 2000, 5000, 10000, 20000, 50000, 75000, 150000, 250000, 500000,
  1000000,
];

const PrizeLadder = ({ level }) => {
  console.log(level, "and ", Prize.length);
  return (
    <div className="w-sm ">
      <h1 className="text-gold/80 uppercase font-extrabold tracking-widest py-3">
        PrizeLadder
      </h1>
      <div className="rounded-lg border border-border overflow-hidden">
        {Prize.map((prize, index) => {
          return (
            <div
              key={index}
              className={`border-b  border-border last:border-none ${level === index ? "bg-yellow/20" : "bg-tertary-background"} `}
            >
              <div className="flex justify-between items-center px-5 py-2">
                <span className="text-text-secondary text-xs">
                  {index+1}
                </span>
                <span className="text-white text-sm">${prize}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrizeLadder;
