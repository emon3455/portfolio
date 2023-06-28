/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import file from "../../../../public/pcs.json"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
    return (
        <div id="services" className="my-20 container mx-auto">

            <h2 className="text-center text-2xl xl:text-4xl font-extrabold bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
                Services You Can Get
            </h2>

            <div className="lg:flex gap-5 justify-center items-center p-2 my-10">

                <div className="lg:w-1/3">
                    <div className='w-4/5 mx-auto lg:w-full'>
                        <Lottie className='w-full h-full' animationData={file} loop={true}></Lottie>
                    </div>
                </div>
                <div className="text-center space-y-5 lg:w-2/3">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <div className="bg-sky-100 p-4 rounded-lg">
                            <h2 className="text-xl font-bold ">Web Application Development</h2>
                            <p className="text-justify">
                                I can develop custom web applications using the MERN stack to meet your clients' specific requirements. This involves building scalable and interactive web applications that leverage the power of React.js on the frontend, Node.js on the server-side, and MongoDB as the database.
                            </p>
                        </div>

                        <div className="bg-yellow-100 rounded-lg p-4 ">
                            <h2 className="text-xl font-bold">Website Redesign and Maintenance</h2>
                            <p className="text-justify">
                                I can offer website redesign services to revamp the visual appearance, improve user experience, and incorporate new features. Additionally, I can provide ongoing website maintenance services to ensure that clients' websites are regularly updated, backed up, and secured.
                            </p>
                        </div>

                    </div>

                    <div className="bg-violet-100 rounded-lg lg:w-1/2 mx-auto p-4">
                        <h2 className="text-xl font-bold">UI/UX Design</h2>
                        <p className="text-justify">
                            User interface (UI) and user experience (UX) design play a crucial role in creating visually appealing and user-friendly websites. I can offer UI/UX design services, collaborating with clients to understand their target audience and design intuitive and visually appealing interfaces.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;