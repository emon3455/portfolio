/* eslint-disable no-unused-vars */
import contact from "../../../../public/contact.json";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_smbtaae', 'template_40lgx0d', form.current, 'GMAoAC6ha7VQ04h2g')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!!',
                    text: 'Message Successfully Send',
                });
                e.target.reset();
            }, (error) => {
                Swal.fire({
                    icon: 'erroe',
                    title: 'Error!!',
                    text: 'Message Not Send',
                });
                e.target.reset();
            });
    };


    return (
        <div id="contact" className="container mx-auto h-full lg:h-[700px] mt-40">

            <h4 className="text-4xl xl:text-6xl lg:my-5 font-extrabold text-center bg-gradient-to-r from-indigo-700  to-pink-500  bg-clip-text text-transparent">Contact US</h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-5 p-4 lg:p-0">
                <div className="w-full  max-w-lg mx-auto shadow-lg shadow-sky-400/50 rounded-2xl bg-base-100 order-2 lg:order-1">
                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <h2 className="text-3xl text-center font-bold">Send Message</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="user_name" required placeholder="Name" className="input input-bordered input-info" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="user_email" required placeholder="Email" className="input input-bordered input-secondary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea required name="message" placeholder="Message" className=" rounded-lg p-2 h-24 input input-bordered input-success" />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Send" className="cursor-pointer p-3 text-xl text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 " />
                        </div>
                    </form>
                </div>

                <div className="w-full xl:w-2/3 mx-auto order-1 lg:order-2" >
                    <div className='w-4/5 mx-auto'>
                        <Lottie className='w-full h-full' animationData={contact} loop={true}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;