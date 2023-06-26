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
            <h2 className="my-10 text-3xl lg:text-6xl font-extrabold text-center text-violet-600">
                Skills
            </h2>
            <div className="mt-20 py-5 shadow-lg shadow-sky-400/50">
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
                        <div className="radial-progress text-yellow-500" style={{ "--value": 70, "--size": "12rem" }}>
                            <div className="">
                                <img className="p-14 w-full" src={js} alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-lg lg:text-xl my-2"> Javascript : 70%</span>
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


                </Swiper>
            </div>
        </div>
    );
};

export default Skills;