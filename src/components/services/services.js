import React from "react";
import { FaReact, FaNode, FaDatabase } from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto" id="services">
      <div className="text-center pb-10">
        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-orange-500"
        >
          Services
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="text-neutral-500 mt-4"
        >
          Offering a wide range of services in web development, I combine my
          expertise with creativity to deliver tailored and innovative solutions
          for your digital needs.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-3 gap-3">
        <div
         
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false" className="text-center flex ">
          <Link
            href="#"
            className="block p-4 bg-neutral-800 rounded-xl hover:bg-orange-500 transition ease-in-out duration-300"
          >
            <span className="text-6xl flex items-center justify-center text-orange-700 ">
              <FaReact />
            </span>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg text-neutral-300 ">
                Front-end Development
              </h3>
              <div className="w-10 border-b-2 mt-2 border-orange-700"></div>
            </div>
          </Link>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
         className="text-center flex ">
          <Link
            href="#"
            className="block p-4 bg-neutral-800 rounded-xl hover:bg-orange-500 transition ease-in-out duration-300"
          >
            <span className="text-6xl flex items-center justify-center text-orange-700 ">
              <FaReact />
              <SiTailwindcss />
            </span>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg text-wrap sm:text-lg md:text-lg lg:text-lg text-neutral-300">
                Front-end using Tailwind
              </h3>
              <div className="w-10 border-b-2 mt-2 border-orange-700"></div>
            </div>
          </Link>
        </div>

        <div
         
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false" className="text-center flex ">
          <Link
            href="#"
            className="block p-2 bg-neutral-800 rounded-xl hover:bg-orange-500 transition ease-in-out duration-300"
          >
            <span className="text-6xl flex items-center justify-center text-orange-700 ">
              <FaReact />
              <SiBootstrap />
            </span>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg text-neutral-300 ">
                Front-end using Bootstrap
              </h3>
              <div className="w-10 border-b-2 mt-2 border-orange-700"></div>
            </div>
          </Link>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false" className="text-center flex ">
          <Link
            href="#"
            className="block p-4 bg-neutral-800 rounded-xl hover:bg-orange-500 transition ease-in-out duration-300"
          >
            <span className="text-6xl flex items-center justify-center text-orange-700 ">
              <FaReact />
              <SiFirebase />
            </span>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg text-neutral-300 ">
                Front-end with firebase
              </h3>
              <div className="w-10 border-b-2 mt-2 border-orange-700"></div>
            </div>
          </Link>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false" className="text-center flex ">
          <Link
            href="#"
            className="block p-4 bg-neutral-800 rounded-xl hover:bg-orange-500 transition ease-in-out duration-300"
          >
            <span className="text-6xl flex items-center justify-center text-orange-700 ">
              <FaNode />
            </span>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg text-neutral-300 ">
                Back-end Development
              </h3>
              <div className="w-10 border-b-2 mt-2 border-orange-700"></div>
            </div>
          </Link>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false" className="text-center flex ">
          <Link
            href="#"
            className="block p-2 bg-neutral-800 rounded-xl hover:bg-orange-500 transition ease-in-out duration-300"
          >
            <span className="text-5xl flex items-center justify-center text-orange-700 ">
              <FaDatabase />
              <SiExpress />
              <FaNode />
              <FaReact />
            </span>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg text-neutral-300 ">
                MERN stack Development
              </h3>
              <div className="w-10 border-b-2 mt-2 border-orange-700"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
