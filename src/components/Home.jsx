import React, { useEffect, useState } from "react";
import axios from "axios";
import CashPrize from "./CashPrize";

const Home = () => {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=12&category=9&difficulty=easy&type=multiple",
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  console.log(data);

  if (!data || !data.results) {
    return <></>;
  }

  const question = data.results[currentIndex];
  const options = [question.correct_answer, ...question.incorrect_answers];

  const getTargetValue = (option) => {
    if (option === question.correct_answer) {
      if (currentIndex === 11) {
        setWin(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      setGameOver(true);
    }
  };
  if (gameOver) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="border text-2xl px-10 py-5 rounded-md">Sorry, Game is Over</p>
      </div>
    );
  }

  if (win) {
    return (
       <div className="flex items-center justify-center h-screen">
        <p className="border text-2xl px-10 py-5 rounded-md">Hurry, You win the game</p>
      </div>
    );
  }

  return (
    <div className="flex gap-10 m-20 border">
      <div className="flex flex-1 flex-col items-center justify-center  ">
        <h1 className="text-2xl font-bold my-2 pb-6">
          Who Wants To Be Millionairs
        </h1>
        <div className="mb-20 ">
          <div className="border mb-5 flex-col rounded-md p-4 flex items-center justify-center w-2xl max-w-3xl">
            <h2 className="font-semibold bg-yellow-100 px-2 py-1.5 rounded-md border">
              Question {currentIndex + 1}/12
            </h2>
            <p className="py-2 text-2xl font-normal">{question.question}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((option, index) => (
              <button
                onClick={() => getTargetValue(option)}
                key={index}
                className="border p-3 rounded cursor-pointer hover:bg-amber-50"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        {/* {gameOver && (
          <div>
            <p>Sorry, Game Over</p>
          </div>
        )}
        {win && (
          <div>
            <p>Hurry, You won</p>
          </div>
        )} */}
      </div>
      <CashPrize currentIndex={currentIndex} />
    </div>
  );
};

export default Home;
