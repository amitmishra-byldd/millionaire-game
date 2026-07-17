import Category from "./components/category-select/Category";
import GamePlay from "./components/game-play/GamePlay";

const routes = [
  {
    path: "/",
    element: <Category />,
  },
  {
    path: "/game-play",
    element: <GamePlay />,
  },
];

export default routes;
