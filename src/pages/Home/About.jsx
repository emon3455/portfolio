import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import emon from "../../../public/emon.png";

const About = () => {
    return (
        <div id='about' className="my-10 h-full lg:h-[700px] container mx-auto p-2">
            <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/3">
                    <img className='w-full rounded-lg mx-auto scale-75 hover:scale-90 duration-500 transition-all ease-linear shadow-lg shadow-sky-400/50' src={emon} alt="" />
                </div>
                <div className="w-full lg:w-2/3">

                    <div className="space-y-4 mb-4">
                        <h2 className="text-center text-2xl xl:text-4xl font-extrabold bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">About Me</h2>
                        <p className='text-lg lg:text-xl font-semibold text-justify p-2'>
                            Hello, my name is Emon. I am originally from Kishoregonj, but I currently reside in Mohakhali, Dhaka. I am a final semester student at Green University of Bangladesh, pursuing a degree in Computer Science and Engineering. Since the start of 2023, I have been actively learning Full-stack Web Development. I am enthusiastic about expanding my skills in this field and exploring various aspects of web development.
                        </p>
                    </div>

                    <div className="">
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <span className='xl:text-xl bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold border-0 hover:border-b-4 hover:border-violet-500 transition-all'>Education</span>
                                </Tab>
                                <Tab>
                                    <span className='xl:text-xl text-violet-600 font-extrabold border-0 hover:border-b-4 hover:border-violet-500 transition-all'>Experience</span>
                                </Tab>
                                <Tab>
                                    <span className='xl:text-xl bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold border-0 hover:border-b-4 hover:border-violet-500 transition-all'>Achivements</span>
                                </Tab>
                            </TabList>

                            <TabPanel >
                                <div className="font-semibold p-4">
                                    <h3> <span className='font-bold'>Program:</span>  B.S.C. IN CSE </h3>
                                    <h3> <span className='font-bold'>Department:</span>  Computer Science And Engineering</h3>
                                    <h3> Green University Of Bangladesh </h3>
                                    <h3 className=''> 2021 - Present </h3>
                                    <h3 className=''> CGPA - 3.84 </h3>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="font-semibold p-2">
                                    <h3>
                                        <span className='font-bold'>Institution:</span>  Logic Nexus
                                    </h3>
                                    <h3>
                                        <span className='font-bold'>Designation:</span>  Jr. FrontEnd Developer
                                    </h3>
                                    <h3 className=''> June 2023 - November 2023 </h3>
                                </div>
                                <div className="font-semibold p-2">
                                    <h3>
                                        <span className='font-bold'>Institution:</span>  Abekus
                                    </h3>
                                    <h3>
                                        <span className='font-bold'>Designation:</span>  FrontEnd Developer
                                    </h3>
                                    <h3 className=''> November 2023 - March 2024</h3>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="font-semibold p-4">
                                    <h3 className='font-bold text-lg'>
                                        Academic Excellence Award
                                    </h3>
                                    <h3 className='lg:pr-60 text-justify'> Received Prestigious “VC AWARD” for Outstanding Academic performance. I have Achieved This for consecutively
                                        5 times in a row. </h3>
                                </div>
                            </TabPanel>

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;