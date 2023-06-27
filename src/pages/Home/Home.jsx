import About from "./About";
import Banner from "./Banner";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About> 
            <Skills></Skills> 
            <Projects></Projects>       
        </div>
    );
};

export default Home;