import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import Placeholder from "../pages/Placeholder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "assets",
        element: <Placeholder />,
      },
      {
        path: "wallet",
        element: <Placeholder />,
      },
    ],
  },
]);

export default router;
