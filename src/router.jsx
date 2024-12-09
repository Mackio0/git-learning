import { createBrowserRouter } from "react-router-dom";
import MkkOne from "./pages/MkkOne";
import MkkTwo from "./pages/MkkTwo";
import TakeOne from "./pages/TakeOne";
import TakeTwo from "./pages/TakeTwo";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/mkk-one",
        element: <MkkOne />,
      },
      {
        path: "/kkl",
        element: <LoginPage />,
      },
      {
        path: "/mkk-two",
        element: <MkkTwo />,
      },
      {
        path: "/take-one",
        element: <TakeOne />,
      },
      {
        path: "/take-two",
        element: <TakeTwo />,
      },
    ],
  },
]);

export default router;
