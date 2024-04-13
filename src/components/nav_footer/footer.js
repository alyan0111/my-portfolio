import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";
import { BsFillTelephoneFill, BsMailbox } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4 mb-10">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="hover:text-lg transition-all duration-500 sm:hover:text-lg lg:hover:text-xl  md:hover:text-xl text-neutral-500">
                I am a passionate web developer and designer dedicated to
                creating innovative and user-friendly digital solutions. Connect
                with me to discuss your next project or to simply say hello!
              </p>
            </div>
            <ul className="list-none flex justify-start space-x-4">
              <li className="bg-orange-500 hover:bg-orange-700 rounded-full p-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100033439397167"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-lg text-white hover:text-gray-300 "
                >
                  <span className="">
                    <FaFacebookF />
                  </span>
                </a>
              </li>
              <li className="bg-orange-500 hover:bg-orange-700 rounded-full p-2">
                <a
                  href="https://www.instagram.com/alyan.kareem/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-lg  text-white hover:text-gray-300 ">
                  <span className=""></span>
                  <FaInstagram />
                </a>
              </li>
              <li className="bg-orange-500 hover:bg-orange-700 rounded-full p-2">
                <a
                  href="https://www.linkedin.com/in/aliyan-karim-95007517b"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-lg text-white hover:text-gray-300 "
                >
                  <span className=""></span>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="bg-orange-500 hover:bg-orange-700 rounded-full p-2">
                <a href="https://twitter.com/AliyanKarim3" 
                rel="noopener noreferrer"
                target="_blank"
                className="text-lg text-white hover:text-gray-300 ">
                  <span className=""></span>
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">Links</h2>
              <ul className="list-none">
                <li>
                  <a
                    href="#home"
                    className="text-white flex items-center hover:text-gray-300"
                  >
                    <span className="mr-2">
                      <FaArrowRight />
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">Services</h2>
              <ul className="list-none">
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Front-end Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Front-end using Tailwind
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Front-end using Bootstrap
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Front-end with firebase
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    Back-end Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    <span className=" mr-2">
                      <FaArrowRight />
                    </span>
                    MERN stack Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">Have a Questions?</h2>
              <div>
                <ul className="list-none">
                  <li className="flex mb-2">
                    <span className=" text-xl mr-2">
                      <FaLocationDot />
                    </span>
                    <span className="hover:text-lg transition-all duration-500 sm:hover:text-lg lg:hover:text-lg text-base">
                      2nd Floor, FIT Computer institute, Al-Mustafa Plaza, near
                      Chandni Chowk, C Block Block C Satellite Town, Rawalpindi,
                      Punjab 46000
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className=" mr-2">
                      <BsFillTelephoneFill />
                    </span>
                    <span className="text-lg">+923 42 1189413</span>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="mailto:info@alikarim0111@gmail.com"
                      className="flex items-center"
                    >
                      <span className="mr-2">
                        <BsMailbox />
                      </span>
                      <span className="text-lg">alikarim0111@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            Copyright &copy;{new Date().getFullYear()} Created by: Aliyan Karim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
