/* eslint-disable no-unused-vars */

import { Link, useParams } from "react-router-dom";

import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { singleProject } from "../../../allProjects";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Project = () => {

    const { id } = useParams();

    const project = singleProject(id);

    return (
        <div className="my-5 p-2">

            <h2 className="text-2xl md:text-4xl p-2 font-bold text-center my-4 bg-gradient-to-r  from-indigo-700 via-purple-500 to-pink-400 bg-clip-text text-transparent">{project?.projectName}</h2>

            <div className="max-w-6xl mx-auto rounded-lg bg-base-100 shadow-lg shadow-pink-300/50 p-4">

                <Carousel>
                    {
                        project.additionalImages && project.additionalImages.map((img, indx) => <div key={indx}>
                            <img className="w-full max-h-[600px] bg-cover" src={img} />
                        </div>)
                    }
                </Carousel>

                <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl lg:text-3xl font-bold my-5 text-violet-600">Key Features:</h4>
                    <ul className="list-decimal ps-9">
                        {
                            project.projectFeatures && project.projectFeatures.map((feature, indx) => <li className="list-item text-xl font-semibold" key={indx}>{feature}</li>)
                        }
                    </ul>

                </div>
                <div className="max-w-4xl mx-auto space-y-3 my-4">
                    <h4 className="text-2xl lg:text-3xl font-bold text-violet-600">Descreption:</h4>
                    <p className="text-xl">
                        {project?.projectDescription}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto md:flex text-center justify-around gap-2 flex-grow-0 space-x-2 space-y-2 my-4">
                    <Link to={project.clientSideCode} className="btn-sm md:btn-md btn bg-yellow-200"> Client Side <FaGithub className="text-lg" /> </Link>
                    <Link to={project.serverSideCode} className="btn-sm md:btn-md btn bg-violet-200"> Server Side<FaCode className="text-lg" /> </Link>
                    <Link to={project.liveLink} className="btn-sm md:btn-md btn bg-sky-200"> Live Link<FaExternalLinkAlt className="text-lg" /> </Link>
                </div>

            </div>

            <div className="text-center my-10">
                <Link to="/" className="p-1 md:p-2 xl:p-3 text-xl text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 ">Go Back To Home Page</Link>
            </div>
        </div>
    );
};

export default Project;