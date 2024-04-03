import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Placeholder from "../pages/Placeholder";
import Dashboard from "../pages/Dashboard";

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
