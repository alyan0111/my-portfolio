import React from "react";

const About = () => {
  return (
    <div
      className="container px-4 my-5 sm:px-6 md:px-8 lg:px-10 items-center justify-center flex flex-col"
      id="about"
    >
      <div>
        <h1
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false" className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-orange-500 font-bold text-center">
          About Me
        </h1>
        <p
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false" className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-500 text-center mb-8">
          Passionate about web development, I always strive to create innovative
          and user-friendly digital experiences.
        </p>
      </div>
      <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false" className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="mb-8 md:mb-0 md:mr-16">
          <ul className="mt-4 space-y-3 px-2">
            <li className="flex text-xs hover:text-sm transition-all duration-500 sm:hover:text-base lg:hover:text-xl  md:hover:text-lg sm:text-sm md:text-base lg:text-lg text-slate-300">
              <span className="font-medium">Name:</span>
              <span className="text-orange-400">Aliyan Karim</span>
            </li>
            <li className="flex text-xs hover:text-sm transition-all duration-500 sm:hover:text-base lg:hover:text-xl  md:hover:text-lg sm:text-sm md:text-base lg:text-lg text-slate-300">
              <span className="font-medium">Date of birth:</span>
              <span className="text-orange-400">July 26, 2004</span>
            </li>
            <li className="flex text-xs hover:text-sm transition-all duration-500 sm:hover:text-base lg:hover:text-xl  md:hover:text-lg sm:text-sm md:text-base lg:text-lg text-slate-300">
              <span className="font-medium">Address:</span>
              <span className="text-orange-400">FIT Rawalpindi</span>
            </li>
            <li className="flex text-xs hover:text-sm transition-all duration-500 sm:hover:text-base lg:hover:text-xl  md:hover:text-lg sm:text-sm md:text-base lg:text-lg text-slate-300">
              <span className="font-medium">Email:</span>
              <span className="text-orange-400">Alikarim0111@gmail.com</span>
            </li>
            <li className="flex text-xs hover:text-sm transition-all duration-500 sm:hover:text-base lg:hover:text-xl  md:hover:text-lg sm:text-sm md:text-base lg:text-lg text-slate-300">
              <span className="font-medium">Phone:</span>
              <span className="text-orange-400">+923-42-1189413</span>
            </li>
          </ul>
          <div className="text-white mt-4">
            <button
              href="/#"
              className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 py-3 px-4 sm:px-6 bg-orange-500 rounded-full hover:bg-orange-600"
            >
              Download CV
            </button>
          </div>
        </div>
        <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      
        className="text-base hover:text-lg transition-all duration-500 sm:hover:text-lg lg:hover:text-xl md:hover:text-xl sm:text-base md:text-lg lg:text-lg text-neutral-500">
          <p className="text-center md:text-left">
            Hello! I am a passionate and dedicated MERN stack developer with a
            strong focus on front-end development. With extensive experience in
            building scalable and responsive web applications, I am adept at
            utilizing various technologies to create seamless user experiences.
          </p>
          <p className="text-center md:text-left">
            With a strong blend of technical skills and a keen eye for design, I
            am committed to delivering high-quality solutions that meet the
            unique needs of each project. I thrive in collaborative environments
            and am always eager to take on new challenges to further enhance my
            skills and expertise in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
