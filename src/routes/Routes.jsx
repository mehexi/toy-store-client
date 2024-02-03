import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "../pages/Layout/Layout";
import AddProduct from "../pages/addProductPage/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/admin/addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
