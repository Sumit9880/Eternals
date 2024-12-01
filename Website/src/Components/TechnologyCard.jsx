import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TechnologyCard = ({ category, technologies, image }) => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div
      className="bg-footer p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="text-xl font-semibold text-black text-center mb-2">{category}</h3>
      <div className="flex justify-start items-center">
        <img
          src={image}
          alt={category}
          className="w-32 object-contain transition-transform duration-300 transform hover:scale-110"
        />
        <ul className="text-sm text-[#333333] space-y-1">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-center justify-start space-x-2">
              <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnologyCard;
