import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsDetails from "./pages/ProductsDetails";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/allproducts",
          element: <AllProducts></AllProducts>,
        },
        {
          path: "/productdetails",
          element: <ProductsDetails></ProductsDetails>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
