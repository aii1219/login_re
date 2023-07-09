import Login from "../components/login/login";
import Register from "../components/register/register";
import Password from "../components/password/password";
import Search from '../view/search'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path:'/login',
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: <Password />,
  },
]);

export default router;
