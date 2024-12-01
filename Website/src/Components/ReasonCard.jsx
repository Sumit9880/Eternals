import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReasonCard = ({ title, description, image }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="shadow-md hover:shadow-lg transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
