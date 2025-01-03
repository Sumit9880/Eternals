import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReasonCard from '../../Components/ReasonCard';
import TechnologyCard from '../../Components/TechnologyCard';
import TeamCard from '../../Components/TeamCard';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,  // Short duration for fast smooth animations
      easing: 'ease-out-quint',  // Smooth easing
      once: true,  // Animation triggers only once when visible
    });
  }, []);

  const technologyData = [
    {
      category: "Front-End Technologies",
      technologies: ["React.js"],
      image: "./react.png"
    },
    {
      category: "Mobile App Development",
      technologies: ["React Native", "Android", "iOS"],
      image: "./android.png"
    },
    {
      category: "Back-End Technologies",
      technologies: ["Node.js", "Express.js"],
      image: "./nodejs2.png"
    },
    {
      category: "Databases",
      technologies: ["MySQL", "MongoDB"],
      image: "./mysql.png"
    },
    {
      category: "Cloud Services",
      technologies: ["AWS", "Google Cloud"],
      image: "./aws.png"
    }
  ];

  const whyChooseUsData = [
    {
      "title": "Expert Team",
      "description": "Our team of highly skilled developers and creative designers works passionately to craft cutting-edge web applications, ensuring excellence and innovation in every project.",
      "image": "./Group.png"
    },
    {
      "title": "Customer-Centric Approach",
      "description": "We put your business at the heart of everything we do, delivering tailored solutions that align perfectly with your vision and exceed your expectations.",
      "image": "./Group2.png"
    },
    {
      "title": "Innovation and Quality",
      "description": "We harness the power of the latest technologies and proven methodologies to deliver transformative web solutions with unmatched quality and innovation.",
      "image": "./innovation.jpg"
    }
  ]


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
      <section className="flex flex-col items-center justify-center space-y-3 px-4 sm:px-6 mt-8">
        <div className="text-center px-6 sm:px-10 pb-3 w-full max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4" data-aos="fade-up">
            Partnering for Progress, Delivering Results
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 font-dancing" data-aos="fade-up">
            Your success is our priority. We partner with you to provide innovative IT solutions that drive progress and deliver measurable results, empowering your business to reach new heights.
          </p>
          <img
            src="infi.png"
            alt="logo"
            className="mx-auto my-3 sm:my-4 lg:my-5 w-40 sm:w-56 lg:w-80 object-contain"
            data-aos="zoom-in-right"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse sm:flex-row items-center w-full max-w-7xl mx-auto space-y-6 sm:space-y-0 sm:space-x-12 p-4 sm:px-12 bg-gradient-to-r from-white rounded-lg">
        <div className="w-full sm:w-1/2 text-center sm:text-left" data-aos="fade-right">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4">
            About Eternal Tech Services
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            At Eternal Tech Services, we are committed to transforming innovative ideas into
            exceptional digital solutions. With a team of skilled professionals and a passion
            for technology, we specialize in crafting custom web and mobile applications,
            delivering cutting-edge IT services, and providing end-to-end solutions tailored
            to your business needs.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
            Our mission is to empower businesses by harnessing the latest technologies,
            ensuring seamless integration, and driving measurable success. With a
            client-first approach and an unwavering focus on quality, we strive to exceed
            expectations and establish long-lasting partnerships with our clients.
          </p>
          <div className="flex justify-center mt-6">
            <button className="py-2 px-6 bg-primary text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full sm:w-1/2" data-aos="zoom-in-left">
          <img
            src="./8270945_5439.jpg"
            alt="banner"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
      <section className="p-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center mb-8 text-xl sm:text-2xl lg:text-3xl font-bold text-primary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((reason, index) => (
              <ReasonCard
                key={index}
                title={reason.title}
                description={reason.description}
                image={reason.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="p-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center mb-8 text-xl sm:text-2xl lg:text-3xl font-bold text-primary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Technologies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyData.map((tech, index) => (
              <TechnologyCard
                key={index}
                category={tech.category}
                technologies={tech.technologies}
                image={tech.image}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 bg-primary text-white text-center">
        <h2
          className="text-2xl font-bold mb-4"
          data-aos="fade-up"
        >
          Ready to Start Your Digital Journey?
        </h2>
        <p
          className="text-sm sm:text-base mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let's build something extraordinary together.
        </p>
        <button
          className="px-6 py-2 bg-white text-primary font-bold rounded-lg hover:bg-gray-200 transition"
          data-aos="zoom-in"
        >
          Contact Us
        </button>
      </section>
    </>
  );
}

export default Home;
