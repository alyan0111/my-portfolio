import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto text-slate-300 px-3 py-8" id='resume'>
      <div className="">
        <h1 data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
         className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-orange-500 font-bold text-center">Resume</h1>
        <p
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-mirror="true"
        className='my-4 text-center text-lg text-neutral-500'>With a comprehensive background in web development and design, and a passion for creating seamless digital experiences,I leverage my expertise to deliver innovative and user-friendly solutions.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"

       className=" bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <span className="text-orange-500 font-extrabold text-base sm:text-lg md:text-2xl lg:text-3xl block">2018-2020</span>
          <h2 className='text-base sm:text-lg sm:font-bold md:text-xl lg:text-xl'>Primary School</h2>
          <h3 className="text-neutral-400 my-2">Diamond Jubilee Model High School</h3>
          <span className='text-neutral-400 block'>Nasirabad, Hunza</span>
          <p className="mt-4 text-neutral-400">Completed primary education.</p>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
       className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <span className="text-orange-500 font-extrabold text-base sm:text-lg md:text-2xl lg:text-3xl block">2018-2020</span>
          <h2 className='text-base sm:text-lg sm:font-bold md:text-xl lg:text-xl'>Secondary School</h2>
          <h3 className="text-neutral-400 my-2">Aga Khan Higher Secondary School</h3>
          <span className='text-neutral-400 block'>Gilgit</span>
          <p className="mt-4 text-neutral-400">Studied SSC in science.</p>
        </div>

        <div 
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"

 
         className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <span className="text-orange-500 font-bold text-base sm:text-lg md:text-2xl lg:text-3xl block">2020-2022</span>
          <h2 className='text-base sm:text-lg sm:font-bold md:text-xl lg:text-xl'>Higher Secondary School</h2>
          <h3 className="text-neutral-400 my-2">Aga Khan Higher Secondary School</h3>
          <span className='text-neutral-400 block'>Gilgit</span>
          <p className="mt-4 text-neutral-400">Studied pre-engineering in HSSc.</p>
        </div>

        <div
         
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="false"
        className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-900">
          <span className="text-orange-500 font-bold text-base sm:text-lg md:text-2xl lg:text-3xl block">2023</span>
          <h2 className='text-base sm:text-lg sm:font-bold md:text-xl lg:text-xl'>MERN Stack Development</h2>
          <h3 className="text-neutral-400 my-2">FIT Computer Institute</h3>
          <span className='text-neutral-400 block'>Rawalpindi</span>
          <p className="mt-4 text-neutral-400">Achieved proficiency in MERN Stack development.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
