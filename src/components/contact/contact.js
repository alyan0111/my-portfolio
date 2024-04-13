import React from 'react';
import { FaLocationArrow, FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { BsFillTelephoneFill, BsMailbox } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import Cform from './cform';
import Map from './map';

const Contact = () => {
    return (
        <section className=" py-10" id='contact'>
            <div className="container mx-auto px-4">
                <div className="text-center pb-10">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false" 
                        className="text-3xl text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                    >
                        Contact me
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="60"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false" 
                        className="text-neutral-500"
                    >
                        Whether you have a question about my services or just want to say hello, feel free to reach out. I'd love to hear from you!
                    </p>
                </div>

                <div className="flex flex-wrap ">
                    {/* Address */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center ">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><FaLocationArrow /></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">Address</h3>
                            <p className="text-neutral-400">
                                2nd Floor, FIT Computer institute, Al-Mustafa Plaza, near Chandni Chowk, C Block Block C Satellite Town, Rawalpindi, Punjab 46000
                            </p>
                        </div>
                    </div>

                    {/* Contact Number */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center ">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><BsFillTelephoneFill/></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">Contact Number</h3>
                            <p className="text-neutral-400">+923 42 1189413</p>
                        </div>
                    </div>

                    {/* Email Address */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center ">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><BsMailbox/></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">Email Address</h3>
                            <p className="text-neutral-400"><a target="_blank" rel="noopener noreferrer" href="mailto:info@alikarim0111@gmail.com">alikarim0111@gmail.com</a></p>
                        </div>
                    </div>

                    {/* UpWork */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><SiUpwork/></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">UpWork</h3>
                            <p className="text-neutral-400"><a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~0110ce4ff8620e2557?mp_source=share">Aliyan Karim</a></p>
                        </div>
                    </div>

                    {/* GitHub */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><FaGithub/></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">GitHub</h3>
                            <p className="text-neutral-400"><a target="_blank" rel="noopener noreferrer" href="https://github.com/alyan0111">Aliyan Karim</a></p>
                        </div>
                    </div>

                    {/* Instagram */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><FaInstagram /></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">Instagram</h3>
                            <p className="text-neutral-400"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alyan.kareem/">alyan.kareem</a></p>
                        </div>
                    </div>

                    {/* Facebook */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><FaFacebookF /></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">Facebook</h3>
                            <p className="text-neutral-400"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100033439397167">Aliyan Karim</a></p>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-5"
                    >
                        <div className="p-4 text-center flex justify-center flex-col items-center">
                            <span className='rounded-full hover:bg-orange-500 text-white bg-neutral-600 p-3 text-5xl'><FaLinkedinIn /></span>
                            <h3 className="text-lg text-neutral-200 font-semibold mb-4">Linked In</h3>
                            <p className="text-neutral-400"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aliyan-karim-95007517b">Aliyan Karim</a></p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <Cform/>
                    <Map/>
                </div>
            </div>
        </section>
    );
}

export default Contact;
