import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReasonCard = ({ title, description, image }) => {
    
    useEffect(() => {
        aos.init();
    }, []);

    return (
        <div
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"

        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ReasonCard;