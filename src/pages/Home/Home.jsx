import About from "./About";
import Banner from "./Banner";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
    return (
        <div id="home" className="">
            <Banner></Banner>
            <About></About> 
            <Skills></Skills>
            <Projects></Projects>   
            <Contact></Contact>    
        </div>
    );
};

export default Home;