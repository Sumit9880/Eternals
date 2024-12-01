import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRocket, FaLaptopCode, FaMobileAlt, FaSearch, FaGlobe, FaWordpress, FaCogs } from "react-icons/fa"; // Import React Icons

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 600,  // Short duration for fast smooth animations
      easing: 'ease-out-quint',  // Smooth easing
      once: true,  // Animation triggers only once when visible
    });
  }, []);

  return (
    <div className="text-gray-900">
      {/* Welcome Section */}
      <div className="my-4 text-center" data-aos="zoom-in-right" data-aos-duration="1000">
        <h3 className="text-3xl text-primary font-poppins font-semibold relative heading_section inline-block">
          About Us
        </h3>
      </div>
      <section className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-8 text-center">
          {/* <h2 className="text-3xl font-semibold text-primary">Welcome to Eternal Tech Services</h2> */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="./aboutarvaya.png"
                alt="Welcome Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-3xl font-semibold text-primary pb-4">Welcome to Eternal Tech Services</h2>
              <p className="mt-4 text-base text-gray-600">
                At Eternal Tech Services, we believe that technology is not just a tool but a transformative force that can empower businesses and enrich lives. Established in 2023, our mission is simple yet powerful: to help everyone grow by delivering solutions that are not just good, but the best.
              </p>
              <p className="mt-4 text-base text-gray-600">
                We are passionate about bridging the gap between businesses and their potential by crafting robust, innovative, and efficient software solutions tailored to your needs. Whether you’re a startup dreaming big or an established enterprise looking to scale, we are here to make your goals a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-8 sm:px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">Web Development</h3>
              <p className="mt-2 text-sm text-gray-600">
                Scalable web applications to transform your business.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaLaptopCode className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">Mobile Apps</h3>
              <p className="mt-2 text-sm text-gray-600">
                User-friendly mobile apps for seamless on-the-go access.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaMobileAlt className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">API Services</h3>
              <p className="mt-2 text-sm text-gray-600">
                Secure integrations to enhance your system's functionality.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaSearch className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">SEO</h3>
              <p className="mt-2 text-sm text-gray-600">
                Boost your visibility with our effective SEO strategies.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaGlobe className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">Website Design</h3>
              <p className="mt-2 text-sm text-gray-600">
                High-speed websites that make a lasting impact.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaWordpress className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">WordPress Development</h3>
              <p className="mt-2 text-sm text-gray-600">
                Dynamic WordPress solutions for all business needs.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaSearch className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">Domain Registration</h3>
              <p className="mt-2 text-sm text-gray-600">
                Secure your online identity with our domain services.
              </p>
            </div>
            <div className="p-6 bg-[#f0f4f8] rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaCogs className="text-4xl text-primary" /> {/* New icon for the added service */}
              </div>
              <h3 className="text-lg font-semibold mt-4 text-[#24a845]">IT Consulting</h3> {/* New service */}
              <p className="mt-2 text-sm text-gray-600">
                Expert IT solutions to help you navigate and grow in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-quaternary py-16 ">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold text-primary">Our Promise</h2>
          <p className="mt-4 text-base text-gray-600">
            At Eternal Tech Services, we don’t just provide services; we build partnerships. We understand that every business is unique, and so are its challenges. That’s why our focus is on delivering the best solutions tailored to your specific needs, ensuring that you achieve your goals with confidence.
          </p>
          <p className="mt-4 text-base text-gray-600">
            We care deeply about your growth, your success, and your vision. Every project we undertake reflects our unwavering commitment to excellence, innovation, and integrity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-[#f0f4f8] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                To empower businesses by delivering technology solutions that go beyond expectations, enabling them to adapt, grow, and excel in the digital age. We are committed to creating transformative digital experiences that make businesses smarter and more efficient.
              </p>
            </div>
            <div className="bg-[#f0f4f8] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                To become a global pioneer in innovative technology services, shaping the future of industries and bridging the digital divide. Our vision is to empower every business to thrive in an interconnected world by unlocking their full potential through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary">Why Choose Eternal Tech Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Unmatched Expertise</h3>
              <p className="text-base text-gray-600">
                Our team of highly skilled developers, designers, and strategists is dedicated to crafting cutting-edge solutions that drive growth and success.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Personalized Attention</h3>
              <p className="text-base text-gray-600">
                We take the time to understand your business and its needs, ensuring that we provide tailored solutions that truly meet your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary">Innovation</h3>
              <p className="mt-4 text-base text-gray-600">
                Constantly exploring new ideas to deliver groundbreaking solutions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary">Integrity</h3>
              <p className="mt-4 text-base text-gray-600">
                Acting with transparency, honesty, and respect in everything we do.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary">Excellence</h3>
              <p className="mt-4 text-base text-gray-600">
                Striving for perfection in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
