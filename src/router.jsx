import { createBrowserRouter } from "react-router-dom";
import MkkOne from "./pages/MkkOne";
import MkkTwo from "./pages/MkkTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/mkk-one",
        element: <MkkOne />,
      },
      {
        path: "/mkk-two",
        element: <MkkTwo />,
      },
    ],
  },
]);

export default router;
