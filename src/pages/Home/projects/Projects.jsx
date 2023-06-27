/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';

import "./Project.css"

import { allProjects } from "../../../allProjects";


const Projects = () => {

    return (
        <div id="projects" className="my-10 container mx-auto h-full xl:h-[700px]">
            <h2 className="p-2 text-4xl xl:text-6xl text-center font-extrabold bg-gradient-to-r  from-indigo-700 via-purple-400 to-pink-600 bg-clip-text text-transparent">Top Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-4 my-6 p-2">

                {
                    allProjects && allProjects.map(prj => <div key={prj.id} className="card card-compact shadow-lg shadow-sky-500/50 bg-base-100 ">
                        <div className="image-wrap">
                            <img src={prj.projectImage} />
                        </div>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{prj.projectName}</h2>
                            <p className="text-lg">
                                {prj.projectDescription}
                            </p>

                            <div className="text-center my-5">
                                <Link to={`/${prj.id}`} className="p-3 text-xl text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 ">View Details</Link>
                            </div>

                        </div>
                    </div>)
                }

            </div>



        </div>
    );
};

export default Projects;