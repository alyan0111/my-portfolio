import React from 'react';

const Skills = () => {
  return (
    <section className="container py-10 px-4 mx-auto" id="skills">
      <div className="text-center pb-10">
        <h1 
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-orange-500">Skills</h1>
        <p
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-mirror="true"
         className="mt-4 text-lg text-neutral-500">With a comprehensive background in web development and design, and a passion for creating seamless digital experiences, I leverage my expertise to deliver innovative and user-friendly solutions.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <div className='flex justify-between items-center'>
            <h3 className="text-neutral-300 text-lg sm:text-xl font-semibold">Html5</h3>
            <span className="text-xs text-neutral-400">95%</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
              <div style={{ width: '95%' }} className=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
            </div>
          </div>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <div className='flex justify-between items-center'>
            <h3 className="text-neutral-300 text-lg sm:text-xl font-semibold">CSS3</h3>
            <span className="text-xs text-neutral-400">90%</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
              <div style={{ width: '90%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
            </div>
          </div>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <div className='flex justify-between items-center'>
            <h3 className="text-neutral-300 text-lg sm:text-xl font-semibold">Java Script</h3>
            <span className="text-xs text-neutral-400">60%</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
              <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
            </div>
          </div>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <div className='flex justify-between items-center'>
            <h3 className="text-neutral-300 text-lg sm:text-xl font-semibold">React</h3>
            <span className="text-xs text-neutral-400">90%</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
              <div style={{ width: '90%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
            </div>
          </div>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <div className='flex justify-between items-center'>
            <h3 className="text-neutral-300 text-lg sm:text-xl font-semibold">Bootstrap</h3>
            <span className="text-xs text-neutral-400">80%</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
              <div style={{ width: '80%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
            </div>
          </div>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <div className='flex justify-between items-center'>
            <h3 className="text-neutral-300 text-lg sm:text-xl font-semibold">Tailwind</h3>
            <span className="text-xs text-neutral-400">70%</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
              <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
