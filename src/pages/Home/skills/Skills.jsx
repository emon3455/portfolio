import html from "../../../../public/skills/html.jpg";
import css from "../../../../public/skills/CSS.png";
import boostrap from "../../../../public/skills/Bootstrap.png";
import tailwind from "../../../../public/skills/tailwind.png";
import firebase from "../../../../public/skills/firebase.png";
import git from "../../../../public/skills/github.png";
import node from "../../../../public/skills/node.png";
import express from "../../../../public/skills/express.png";
import mongodb from "../../../../public/skills/mongo.png";
import js from "../../../../public/skills/js.png"
import react from "../../../../public/skills/react.png"
import figma from "../../../../public/skills/figma.png"
import c from "../../../../public/skills/c.png"
import cpp from "../../../../public/skills/cpp.png"
import java from "../../../../public/skills/java.png"


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import "./Skills.css";

// import required modules
import { Pagination } from "swiper";

const Skills = () => {

    return (
        <div className="container mx-auto lg:h-[700px]">
            <h2 className="my-6 text-4xl lg:text-6xl font-extrabold text-center text-violet-600">
                Skills
            </h2>
            <p className="text-xl text-center font-semibold">
                As a full-stack developer, I have expertise in front-end and back-end technologies, including React.js for building interactive user interfaces and Node.js/Express.js for server-side development. I also have experience with MongoDB for efficient data management and Git for version control. With a background in computer science, I am proficient in multiple programming languages, To understand more please go through each tabs.
            </p>
            <div className="my-10 py-5 shadow-lg shadow-sky-400/50">
                
                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-orange-500" style={{ "--value": 95, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-12 w-full" src={html} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2"> HTML : 95%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-sky-500" style={{ "--value": 85, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-16 w-full" src={css} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2"> CSS : 85%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-14 w-full" src={js} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2"> Javascript : 80%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-blue-500" style={{ "--value": 95, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-14 w-full" src={tailwind} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">Tailwind : 95%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-violet-600" style={{ "--value": 90, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-14 w-full" src={boostrap} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">BOOTSTRAP: 90%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-sky-500" style={{ "--value": 85, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-12 w-full" src={react} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">REACT: 85%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-fuchsia-600" style={{ "--value": 80, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-10 w-full" src={git} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">GITHUB: 80%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-yellow-500" style={{ "--value": 75, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-6 w-full" src={firebase} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">Firebase: 75%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-green-700" style={{ "--value": 50, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-8 w-full" src={node} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">Node: 50%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-dark" style={{ "--value": 70, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-14 w-full" src={express} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">Express: 70%</span>
                    </SwiperSlide>

                    <SwiperSlide className=" w-60 h-60 flex-col">
                        <div className="radial-progress text-emerald-600" style={{ "--value": 80, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-14 w-full" src={mongodb} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2">MongoDB: 80%</span>
                    </SwiperSlide>

                </Swiper> */}

                <Tabs>
                    <TabList>
                        <Tab>
                            <span className='btn lg:text-2xl bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold border-0 border-b-4 border-violet-500 '>Front End</span>
                        </Tab>
                        <Tab>
                            <span className='btn lg:text-2xl text-violet-600 font-extrabold border-0 border-b-4 border-violet-500 '>BackEnd</span>
                        </Tab>
                        <Tab>
                            <span className='btn lg:text-2xl bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold border-0 border-b-4 border-violet-500 '>Tools & Technology</span>
                        </Tab>
                        <Tab>
                            <span className='btn lg:text-2xl text-violet-600 font-extrabold border-0 border-b-4 border-violet-500 '>Programming Language</span>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-orange-500" style={{ "--value": 95, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-12 w-full" src={html} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> HTML : 95%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-sky-500" style={{ "--value": 85, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-16 w-full" src={css} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> CSS : 85%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={js} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> Javascript : 80%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-blue-500" style={{ "--value": 95, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={tailwind} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">Tailwind : 95%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-violet-600" style={{ "--value": 90, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={boostrap} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">BOOTSTRAP: 90%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-sky-500" style={{ "--value": 85, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-12 w-full" src={react} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">REACT: 85%</span>
                            </SwiperSlide>

                        </Swiper>
                    </TabPanel>

                    <TabPanel>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                        >

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-green-700" style={{ "--value": 50, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-8 w-full" src={node} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">Node: 50%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-dark" style={{ "--value": 70, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={express} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">Express: 70%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-emerald-600" style={{ "--value": 80, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={mongodb} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">MongoDB: 80%</span>
                            </SwiperSlide>

                        </Swiper>
                    </TabPanel>

                    <TabPanel>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                        >


                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-fuchsia-600" style={{ "--value": 80, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-10 w-full" src={git} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">GITHUB: 80%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-yellow-500" style={{ "--value": 75, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-6 w-full" src={firebase} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">Firebase: 75%</span>
                            </SwiperSlide>

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-violet-500" style={{ "--value": 80, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-6 w-full" src={figma} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2">Figma: 80%</span>
                            </SwiperSlide>

                        </Swiper>
                    </TabPanel>

                    <TabPanel>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                        >

                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-yellow-500" style={{ "--value": 80, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={js} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> Javascript : 80%</span>
                            </SwiperSlide>
                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-violet-500" style={{ "--value": 90, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={c} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> C : 90%</span>
                            </SwiperSlide>
                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-sky-500" style={{ "--value": 80, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-14 w-full" src={cpp} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> C++ : 80%</span>
                            </SwiperSlide>
                            <SwiperSlide className=" w-60 h-60 flex-col">
                                <div className="radial-progress text-orange-500" style={{ "--value": 90, "--size": "12rem" }}>
                                    <div className="">
                                        <img className="p-8 w-full" src={java} alt="" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg lg:text-xl my-2"> Java : 90%</span>
                            </SwiperSlide>

                        </Swiper>
                    </TabPanel>

                </Tabs>

            </div>
        </div>
    );
};

export default Skills;