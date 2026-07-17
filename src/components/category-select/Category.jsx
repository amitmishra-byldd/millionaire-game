import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const Difficulty = [
  {
    level: "Easy",
    description: "Warm-up questions · 15 second timer",
    time: "15s / question",
    dotColor: "bg-dark-green",
    iconBg: "bg-green/60",
  },
  {
    level: "Medium",
    description: "Tougher mix · 30 second timer",
    time: "30s / question",
    dotColor: "bg-dark-gold",
    iconBg: "bg-gold/60",
  },
  {
    level: "Hard",
    description: "Tougher mix · 45 second timer",
    time: "45s / question",
    dotColor: "bg-dark-red",
    iconBg: "bg-red/60",
  },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (level) => {
    console.log(level);
    navigate("/game-play");
  };

  return (
    <div className="flex flex-col items-center justify-center  h-screen ">
      <div className="border bg-secondary-background border-border p-8 rounded-lg text-center w-3xl max-w-5xl">
        <div className="flex items-center justify-center w-full mb-4">
          <img src="/millionairs.svg" alt="logo" className="w-[132px] " />
        </div>
        <span className="text-text-secondary uppercase tracking-widest text-sm">
          Play & Win
        </span>
        <h1 className="text-gold/80 text-2xl font-extrabold tracking-widest mb-6">
          WHO WANTS TO BE A MILLIONAIRE
        </h1>
        <div>
          <h2 className="text-text-secondary text-sm mb-6">
            Choose your difficulty to begin
          </h2>
          <div>
            {Difficulty.map((items) => (
              <div
                onClick={() => handleCategoryClick(items)}
                key={items.level}
                className="border border-border px-5 transition-transform duration-150 ease-out hover:scale-[1.01] gap-3 hover:scale-100 py-4 mb-4 rounded-xl cursor-pointer hover:border-yellow flex"
              >
                <span
                  className={`${items.iconBg} rounded-xl w-12 h-12 flex items-center justify-center`}
                >
                  <span
                    className={`w-4 h-4 rounded-full ${items.dotColor}`}
                  ></span>
                </span>
                <div className="flex-1 flex items-center justify-between gap-3">
                  <div className="flex flex-col items-start">
                    <span className="text-text font-bold text-xl ">
                      {" "}
                      {items.level}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {items.description}
                    </span>
                  </div>
                  <div className="items-end gap-1 flex flex-col">
                    <span className="bg-background text-text-secondary rounded-2xl px-2 py-0.5 text-sm">
                      {items.time}
                    </span>
                    <ChevronRight className="size-5 text-text-secondary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
