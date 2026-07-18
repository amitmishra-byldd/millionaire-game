import React, { use, useEffect, useState } from "react";
import PrizeLadder from "./PrizeLadder";
import axios from "axios";
import { useLocation } from "react-router";

const GamePlay = () => {
  const location = useLocation();
  const difficulty = location.state?.level?.toLowerCase() || "easy";

  const [data, setData] = useState(null);
  const [position, setPosition] = useState(0);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=12&category=9&difficulty=${difficulty}&type=multiple`,
      );
      setData(response.data);
      // console.log(response.data);
    };
    fetchData();
  }, []);

  if (!data || !data.results) {
    return <></>;
  }
  const question = data?.results[position];
  console.log("results", data.results.length);

  const Option = [question.correct_answer, ...question.incorrect_answers];

  const handleOptions = (item) => {
    if (item === question.correct_answer) {
      if (position === question.length) {
        setWin(true);
      } else {
        setPosition((prev) => prev + 1);
      }
    } else {
      setLoss(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  mt-10 ">
      <div className="border bg-secondary-background border-border p-8 rounded-lg text-center w-7xl">
        <h1 className="text-gold/80 text-2xl font-extrabold tracking-widest mb-10">
          MILLIONAIRE {difficulty}
        </h1>
        <div className="flex gap-20">
          <div className="flex-1 space-y-8">
            <div className="flex gap-3">
              <div className="border h-15 justify-center flex-1 border-border flex items-start flex-col py-2 px-4 rounded-xl bg-tertary-background">
                <span className="text-text-secondary uppercase text-sm">
                  Playing For
                </span>
                <span className="text-xl font-semibold text-gold">$1000</span>
              </div>
              <div className=" text-white text-xl bg-tertary-background w-15 h-15 flex items-center justify-center shrink-0 rounded-full">
                11
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-10">
              <h2 className="text-yellow border-yellow border rounded-2xl px-6 py-1 bg-[#343237] w-fit font-medium bg">
                Question {position + 1} / 12
              </h2>

              <p className="w-full bg-tertary-background py-6 px-3 border border-border text-white text-2xl rounded-xl text-center">
                {question.question}
              </p>

              <div className="grid grid-cols-2 text-start w-full gap-3">
                {Option.map((item, index) => (
                  <div
                    onClick={() => handleOptions(item)}
                    key={index}
                    className="border bg-tertary-background border-border hover:border-yellow cursor-pointer transition-all duration-150 ease-out hover:scale-[1.01]  text-white font-semibold rounded-xl py-3 px-4 items-start w-full"
                  >
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PrizeLadder level={position}/>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
