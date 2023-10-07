import { createBrowserRouter } from "react-router-dom";
import RootElement from "../pages/RootElement";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import Register from "../components/Register/Register";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoginRegister></LoginRegister>
            },
            {
                path: '/login/register',
                element: <Register></Register>
            }
        ]
    }
])

export default MainRoutes;