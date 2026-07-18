import { Trophy } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const Win = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const prize = location.state?.prize ?? 0;
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div className="w-20 h-20 rounded-full bg-green/20 flex items-center justify-center">
        <Trophy className="size-10 text-dark-gold " />
      </div>
      <div className="text-center mt-4">
        <p className="text-white text-2xl font-bold">You're a Millionaire</p>
        <p className="text-xs tracking-widest text-text-secondary opacity-50">
          All 12 questions cleared.
        </p>
      </div>
      <div>
        <p className="text-4xl font-bold text-dark-gold mt-6"> ${prize}</p>
      </div>
      <div className="mt-6 flex gap-3 justify-center items-center">
        <button
          onClick={() => navigate("/game-play")}
          className="text-black text-sm font-semibold rounded-xl cursor-pointer bg-yellow shadow-xl px-4 py-2"
        >
          Play again
        </button>
        <button
          onClick={() => navigate("/")}
          className="border border-border py-2 px-4 text-sm font-semibold text-text-secondary  cursor-pointer rounded-xl"
        >
          Change category
        </button>
      </div>
    </div>
  );
};

export default Win;
