import { createBrowserRouter } from "react-router-dom";
import RootElement from "../pages/RootElement";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import Register from "../components/Register/Register";
import ServicesPage from "../pages/ServicesPage";
import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import ServicesDetail from "../components/Services/ServicesDetail";
import PrivateRoute from "../private/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServicesDetail></ServicesDetail></PrivateRoute>
            },
            {
                path: '/gallery',
                element: <GalleryPage></GalleryPage>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/login',
                element: <LoginRegister></LoginRegister>
            },
            {
                path: '/login/register',
                element: <Register></Register>
            },
        ]
    }
])

export default MainRoutes;