import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TechnologyCard = ({ category, technologies, image }) => {

    useEffect(() => {
        aos.init();
    }, []);

    return (
        <div
            className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"

        >
            <img
                src={image}
                alt={category}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <ul className="list-disc list-inside text-gray-600">
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default TechnologyCard;