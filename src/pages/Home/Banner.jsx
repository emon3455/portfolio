import Lottie from "lottie-react";
import bnr from "../../../public/bnr.json"
import Typewriter from 'react-ts-typewriter';

const Banner = () => {
    return (
        <div className="container mx-auto mb-5 lg:h-[700px]">
            <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                    <div className="">
                        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-violet-700 to-green-400 bg-clip-text text-transparent">
                            Hi, I am Emon
                        </h2>
                        <h4 className="text-4xl lg:text-6xl font-bold">
                            A <span className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"><Typewriter
                                speed={300}
                                text={["MERN Stack Developer,", "React Developer,", "Web Developer,",]}
                                loop={true}
                                delay={50}
                            /></span>
                            <br /> From Bangladesh
                        </h4>
                        <p className="my-4">
                            A versatile MERN stack developer proficient in MongoDB, Express, React, and Node.js. Skilled in creating robust web applications with seamless functionality and clean code.
                        </p>
                    </div>
                    <div className="py-2">
                        <a href="./_RESUME(Emon)_.pdf" download className="p-2 text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 ">Download Resume</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 scale-90 hover:scale-100 duration-500 transition-all ease-linear" >
                    <div className='w-3/4 mx-auto'>
                        <Lottie className='w-full h-full' animationData={bnr} loop={true}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;