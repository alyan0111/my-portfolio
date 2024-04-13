import React from "react";
import me1 from "./me1.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {

  return (
    <div className=" flex items-center bg-black justify-center" id="home">
      <div className="w-full">
        <div className="mt-2 relative md:static  lg:static">
          <div
                data-aos="fade-down-right"
                data-aos-offset="100"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
         
           className="flex flex-col md:flex-row lg:flex-row items-center justify-center relative md:static lg:static">
            <img
              className="sm:w-3/5 sm:h-auto md:w-1/2 md:h-auto lg:w-1/2 lg:h-auto filter brightness-90"
              src={me1}
              alt="see me"
            />
            <div
                data-aos="fade-in"
                data-aos-offset="60"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
         
             className="md:w-1/3 lg:w-1/2 md:text-left lg:text-left text-center absolute md:static lg:static">
              <p
                className="flex flex-col text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="sm:text-sm text-xs text-orange-500">
                  Hello!
                </span>{" "}
                I'M
                <span className="text-orange-500"> Aliyan Karim</span>
                <span className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl my-3">
                  a MERN stack Developer
                </span>
              </p>
              <div>
                <button className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300  text-white border-2 border-orange-500 rounded-full bg-orange-500 hover:bg-orange-600 sm:p-3 sm:m-2 md:p-4 md:m-2 lg:p-5 lg:m-3 p-2 m-1">
                  Hire me
                </button>
                <button className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300  text-white border-2 border-orange-500 rounded-full hover:text-orange-500 sm:p-3 sm:m-2 md:p-4 md:m-2 lg:p-5 lg:m-3 p-2 m-1">
                  My Works
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
