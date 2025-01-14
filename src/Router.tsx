import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Join from "./pages/Join";
import Customer from "./pages/Customer";
import Trainer from "./pages/Trainer";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "customer",
              element: <Customer />,
            },
            {
              path: "trainer",
              element: <Trainer />,
            },
            {
              path: "admin",
              element: <Admin />,
            },
            {
              path: "/logout",
              element: <Logout />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/join",
      element: <Join />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ],
  {
    basename: "",
  }
);

export default router;
