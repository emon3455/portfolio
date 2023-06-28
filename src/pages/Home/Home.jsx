import About from "./About";
import Banner from "./Banner";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Skills from "./skills/Skills";

const Home = () => {
    return (
        <div id="home" className="">
            <Banner></Banner>
            <About></About> 
            <Skills></Skills>
            <Projects></Projects> 
            <Services></Services>  
            <Contact></Contact>    
        </div>
    );
};

export default Home;