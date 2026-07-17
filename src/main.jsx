import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import routes from "./routes.jsx";

const router = createBrowserRouter(routes)

createRoot(document.getElementById("root")).render( <RouterProvider router={router} />);
