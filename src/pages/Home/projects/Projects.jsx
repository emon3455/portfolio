/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import img1 from "../../../../public/project/p1/img1.png";
import img2 from "../../../../public/project/p2/img1.png";
import img3 from "../../../../public/project/p3/img1.png";
import { FaExternalLinkAlt, FaGithub , FaCode } from 'react-icons/fa';

import "./Project.css"

const Projects = () => {

    const projects = [
        {
            id: 1,
            projectName: "Music Schoolling BD",
            projectImage: img1,
            liveLink: "https://music-scholing.web.app/",
            serverSideCode: "https://github.com/emon3455/music-school-server",
            clientSideCode: "https://github.com/emon3455/music-school",
            additionalImages: ["img2", "img3"], // Array of additional images
            projectFeatures: [
                "User registration and login",
                "Music course selection",
                "Interactive lessons and quizzes",
                "Progress tracking",
                // Add more features here
            ],
            projectDescription: "Music Schoolling BD is an online music School website that provides many more features with 3 pannels like as: admin,instructor,student.",
        },
        {
            id: 2,
            projectName: "Toy Cars Master",
            projectImage: img2,
            liveLink: "https://toy-cars-master.web.app/",
            serverSideCode: "https://github.com/emon3455/toyCars-master-server",
            clientSideCode: "https://github.com/emon3455/toyCars-Master",
            additionalImages: ["img4", "img5"], // Array of additional images
            projectFeatures: [
                "Virtual car customization",
                "Racing game with multiple tracks",
                "Leaderboard and achievements",
                // Add more features here
            ],
            projectDescription: "Toy Cars Master is an immersive virtual experience where users can buy vintage cars in toys version also user can sell their toys.",
        },
        {
            id: 3,
            projectName: "Thai Master Chef",
            projectImage: img3,
            liveLink: "https://thai-master-chef.web.app/",
            serverSideCode: "https://github.com/emon3455/thai-masterChef-server",
            clientSideCode: "https://github.com/emon3455/thai-masterChef",
            additionalImages: ["img6"], // Array of additional images
            projectFeatures: [
                "Authentic Thai recipes",
                "Step-by-step cooking instructions",
                "Ingredient substitution suggestions",
                // Add more features here
            ],
            projectDescription: "Thai Master Chef is a culinary platform that offers a collection of authentic Thai recipes. User can also select their favourite recipies.",
        },
    ];


    return (
        <div className="my-10 container mx-auto h-full lg:h-[700px]">
            <h2 className="p-2 text-4xl lg:text-6xl text-center font-extrabold bg-gradient-to-r  from-indigo-700 via-purple-400 to-pink-600 bg-clip-text text-transparent">Top Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-4 my-6 p-2 lg:p-0">

                {
                    projects.map(prj => <div key={prj.id} className="card card-compact shadow-lg shadow-sky-500/50 bg-base-100 ">
                        <div className="image-wrap">
                            <img src={prj.projectImage} />
                        </div>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{prj.projectName}</h2>
                            <p className="text-lg">
                                {prj.projectDescription}
                            </p>
                            <div className="flex justify-around">

                                <Link to={prj.liveLink} className=" btn bg-sky-100"> Live Link<FaExternalLinkAlt className="text-lg" /> </Link>
                                <Link to={prj.clientSideCode} className=" btn "> Client Side <FaGithub className="text-lg" /> </Link>
                                <Link to={prj.serverSideCode} className=" btn bg-violet-100"> Server Side<FaCode className="text-lg" /> </Link>

                            </div>

                        </div>
                    </div>)
                }

            </div>

            <div className="text-center mt-10">
                <Link to="/projects" className="p-3 text-xl text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 ">View All</Link>
            </div>

        </div>
    );
};

export default Projects;