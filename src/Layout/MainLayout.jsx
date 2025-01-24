
import Banner from "../components/Banner/Banner";
import Familiar from "../components/Familiar/Familiar";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Project from "../components/Project/Project";
import Skill from "../components/Skill/Skill";

const MainLayout = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navbar/>
            <Banner/>
            <Skill/>
            <Familiar/>
            <Project/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default MainLayout;