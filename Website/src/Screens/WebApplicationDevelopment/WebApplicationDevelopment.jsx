import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const WebApplicationDevelopment = () => {
    useEffect(() => {
        aos.init();
    }, []);
    return (
        <div className="font-sans antialiased text-gray-800">
            <Header />
            <Services />
            {/* <Technologies /> */}
            {/* <Process /> */}
            {/* <WhyChooseUs /> */}
            <Contact />
        </div>
    );
};

const Header = () => {
    return (
        <header className="bg-primary text-white py-12 px-4 text-center">
            <h1 className="text-5xl font-bold" data-aos="fade-up"
                data-aos-duration="1000">
                Empower Your Business with Cutting-Edge Web Applications
            </h1>
            <p className="mt-4 text-lg" data-aos="fade-up"
                data-aos-duration="1000" >
                At [Your Company Name], we specialize in crafting custom web
                applications that not only meet your business needs but also exceed your
                expectations. Our team of experienced developers leverages the latest
                technologies to deliver secure, reliable, and user-friendly web
                solutions tailored to your unique requirements.
            </p>
        </header>
    );
};

const Services = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl font-bold text-center mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Custom Web Application Development"
                        description="Our team builds tailor-made web applications from scratch, ensuring that every feature and functionality aligns perfectly with your business goals."
                        features={[
                            "Tailored Solutions",
                            "Scalability",
                            "Performance Optimization",
                        ]}
                        image="https://via.placeholder.com/150"
                    />
                    <ServiceCard
                        title="E-commerce Development"
                        description="Boost your sales and enhance customer experience with a powerful e-commerce platform."
                        features={[
                            "User-Friendly Interfaces",
                            "Payment Gateway Integration",
                            "Inventory Management",
                        ]}
                        image="https://via.placeholder.com/150"
                    />
                    <ServiceCard
                        title="Enterprise Web Applications"
                        description="Transform your enterprise operations with applications that streamline processes and enhance productivity."
                        features={[
                            "Process Automation",
                            "Data Management",
                            "Custom Integrations",
                        ]}
                        image="https://via.placeholder.com/150"
                    />
                    <ServiceCard
                        title="Progressive Web Applications (PWAs)"
                        description="Combine the best of web and mobile apps with our Progressive Web Application services."
                        features={[
                            "Responsive Design",
                            "Offline Capabilities",
                            "Push Notifications",
                        ]}
                        image="https://via.placeholder.com/150"
                    />
                    <ServiceCard
                        title="API Development and Integration"
                        description="Our API development and integration services ensure that your web applications can seamlessly connect with other platforms."
                        features={[
                            "Custom API Development",
                            "Third-Party Integrations",
                            "API Management",
                        ]}
                        image="https://via.placeholder.com/150"
                    />
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ title, description, features, image }) => {
    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"

        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="list-disc list-inside text-gray-600">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

const Technologies = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl font-bold text-center mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Technologies We Use
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TechnologyCard
                        category="Front-End Technologies"
                        technologies={["React.js", "Angular.js", "Vue.js"]}
                        image="https://via.placeholder.com/150"
                    />
                    <TechnologyCard
                        category="Back-End Technologies"
                        technologies={["Node.js", "Express.js", "Django"]}
                        image="https://via.placeholder.com/150"
                    />
                    <TechnologyCard
                        category="Databases"
                        technologies={["MySQL", "MongoDB", "PostgreSQL"]}
                        image="https://via.placeholder.com/150"
                    />
                    <TechnologyCard
                        category="Cloud Services"
                        technologies={["AWS", "Azure", "Google Cloud"]}
                        image="https://via.placeholder.com/150"
                    />
                </div>
            </div>
        </section>
    );
};

const TechnologyCard = ({ category, technologies, image }) => {
    return (
        <div
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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

const Process = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl font-bold text-center mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Our Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProcessCard
                        step="1"
                        title="Consultation and Planning"
                        description="Understanding your business requirements is our first step. We collaborate closely with you to define project goals, scope, and timelines."
                        image="https://via.placeholder.com/150"
                    />
                    <ProcessCard
                        step="2"
                        title="Design and Prototyping"
                        description="Our design team creates interactive prototypes that bring your vision to life, focusing on user experience and intuitive interfaces."
                        image="https://via.placeholder.com/150"
                    />
                    <ProcessCard
                        step="3"
                        title="Development"
                        description="Using agile methodologies, we develop your web application in iterative phases, ensuring transparency and flexibility throughout the process."
                        image="https://via.placeholder.com/150"
                    />
                    <ProcessCard
                        step="4"
                        title="Testing and Quality Assurance"
                        description="We conduct thorough testing to ensure your application is bug-free, secure, and performs optimally across all devices and platforms."
                        image="https://via.placeholder.com/150"
                    />
                    <ProcessCard
                        step="5"
                        title="Deployment and Launch"
                        description="Once your application meets our quality standards, we deploy it on your preferred platform, ensuring a seamless launch experience."
                        image="https://via.placeholder.com/150"
                    />
                    <ProcessCard
                        step="6"
                        title="Support and Maintenance"
                        description="Our support doesn’t stop at launch. We offer ongoing maintenance and updates to ensure your application remains cutting-edge."
                        image="./suport.svg"
                    />
                </div>
            </div>
        </section>
    );
};

const ProcessCard = ({ step, title, description, image }) => {
    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"

        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">{`${step}. ${title}`}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl font-bold text-center mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ReasonCard
                        title="Expert Team"
                        description="Our team of seasoned developers and designers are dedicated to delivering top-notch web applications tailored to your needs."
                        image="./expartTeam.png"
                    />
                    <ReasonCard
                        title="Customer-Centric Approach"
                        description="We prioritize your business goals and work closely with you to ensure the final product aligns with your vision."
                        image="./customer.png"
                    />
                    <ReasonCard
                        title="Innovation and Quality"
                        description="We leverage the latest technologies and best practices to deliver high-quality, innovative web solutions."
                        image="./innovation.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

const ReasonCard = ({ title, description, image }) => {
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

const Contact = () => {
    return (
        <section className="py-16 px-4 bg-secondary text-white text-center">
            <div className="max-w-2xl mx-auto">
                <h2
                    className="text-3xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Ready to Take the Next Step?
                </h2>
                <p
                    className="text-lg mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Ready to take your business to the next level with a custom web
                    application? Contact us today to discuss your project and receive a
                    free consultation.
                </p>
                <a
                    href="mailto:contact@yourcompany.com"
                    className="inline-block bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-duration="1000"

                >
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default WebApplicationDevelopment;
