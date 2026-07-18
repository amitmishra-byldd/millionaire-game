import React, { use, useEffect, useState } from "react";
import PrizeLadder from "./PrizeLadder";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import Win from "./Win";
import Loss from "./Loss";

const Prize = [
  500, 1000, 2000, 5000, 10000, 20000, 50000, 75000, 150000, 250000, 500000,
  1000000,
];

const GamePlay = () => {
  const location = useLocation();
  const difficulty = location.state?.level?.toLowerCase() || "easy";
  const navigate = useNavigate();

  const timer = difficulty === "easy" ? 15 : difficulty === "medium" ? 30 : 60;

  const [data, setData] = useState(null);
  const [position, setPosition] = useState(0);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [countdown, setCountDown] = useState(timer);

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

  useEffect(() => {
    setCountDown(timer);
  }, [position]);

  useEffect(() => {
    if (win) navigate("/win", { state: { prize: Prize[position] } });
  }, [win, navigate]);

  useEffect(() => {
    const prize = position > 0 ? Prize[position - 1] : 0;
    if (loss) navigate("/loss", { state: { prize } });
  }, [loss, navigate]);

  if (!data || !data.results) {
    return <></>;
  }
  const question = data?.results[position];
  // console.log("results", data.results.length);

  const Option = [question.correct_answer, ...question.incorrect_answers];

  const handleOptions = (item) => {
    if (item === question.correct_answer) {
      if (position === data.results.length - 1) {
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
          MILLIONAIRE
        </h1>
        <div className="flex gap-20">
          <div className="flex-1 space-y-8">
            <div className="flex gap-3">
              <div className="border h-15 justify-center flex-1 border-border flex items-start flex-col py-2 px-4 rounded-xl bg-tertary-background">
                <span className="text-text-secondary uppercase text-sm">
                  Playing For
                </span>
                <span className="text-xl font-semibold text-gold">
                  {" "}
                  ${Prize[position]}
                </span>
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
          <PrizeLadder level={position} />
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
