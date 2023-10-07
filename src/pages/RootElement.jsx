import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Outlet} from 'react-router-dom'
const RootElement = () => {
    return (
        <div className="font-jSans">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootElement;