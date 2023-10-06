import { createBrowserRouter } from "react-router-dom";
import RootElement from "../pages/RootElement";
import Home from "../pages/Home";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default MainRoutes;