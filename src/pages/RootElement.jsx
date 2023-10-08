import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Outlet} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const RootElement = () => {
    return (
        <div className="font-jSans">
            <Toaster position="top-center" reverseOrder={false} />
            <Header></Header>
            <div className="min-h-[93vh]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootElement;