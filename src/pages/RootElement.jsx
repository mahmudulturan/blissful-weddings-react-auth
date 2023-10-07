import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Outlet} from 'react-router-dom'
import { Toaster } from "react-hot-toast";

const RootElement = () => {
    return (
        <div className="font-jSans">
            <Toaster position="top-center" reverseOrder={false} />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootElement;