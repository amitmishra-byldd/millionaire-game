import Category from "./components/category-select/Category";
import GamePlay from "./components/game-play/GamePlay";
import Loss from "./components/game-play/Loss";
import Win from "./components/game-play/Win";

const routes = [
  {
    path: "/",
    element: <Category />,
  },
  {
    path: "/game-play",
    element: <GamePlay />,
  },
  {
    path: "/loss",
    element: <Loss />,
  },
  {
    path: "/win",
    element: <Win />,
  },
];

export default routes;
