import Header from "../components/Header/Header";
import {Outlet} from 'react-router-dom'
const RootElement = () => {
    return (
        <div className="font-jSans">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootElement;