import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
 
  return (
    <>
      <div className="relative w-full">
        <img
          src="banner8.jpg"
          alt="banner"
          className="w-full h-auto object-cover"
          data-aos="zoom-in-left"
          style={{ mixBlendMode: 'multiply' }}
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12">
          <p className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-500 md:p-2 pb font-roboto" data-aos="zoom-in-right">
            INNOVATE
          </p>
          <p className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-500 md:p-2 pb font-roboto" data-aos="zoom-in-left">
            INTEGRATE
          </p>
          <p className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-500 md:p-2 pb font-roboto" data-aos="zoom-in-right">
            ELEVATE
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-12 px-4 sm:px-8">
        <div className="text-center px-8 sm:px-12 pb-4 mt-8 sm:mt-12 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4" data-aos="fade-up">
            Partnering for Progress, Delivering Results
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 font-dancing" data-aos="fade-up">
            Your success is our priority. We partner with you to provide innovative IT solutions that drive progress and deliver measurable results, empowering your business to reach new heights.
          </p>
          <img
            src="infi.png"
            alt="logo"
            className="mx-auto my-4 sm:my-6 lg:my-8 w-48 sm:w-64 lg:w-96 object-contain"
            data-aos="zoom-in-right"
          />
          <button className="bg-primary text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center w-full max-w-7xl mx-auto space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="text-center sm:text-left w-full sm:w-1/2 p-4 sm:p-8" data-aos="fade-right">
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas incidunt similique, doloremque itaque saepe illo laborum velit iste atque quia aperiam tempora, cum et voluptate. Harum aliquid doloribus rem.
            </p>
          </div>
          <div className="flex items-center justify-center w-full sm:w-1/2">
            <img
              src="banner.png"
              alt="banner"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
