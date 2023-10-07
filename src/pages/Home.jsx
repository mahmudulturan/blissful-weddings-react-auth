import AboutUs from "../components/About/AboutUs";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Services from "../components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;