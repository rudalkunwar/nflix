import React from "react";
import { FaReact, FaLaptopCode, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white py-16 px-5 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-10">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGJHC2zONU11Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726207086597?e=1732147200&v=beta&t=J7VLdqojC_IuQc8b1vbfVaGe4axflVeZrFFuaAWsWbg" 
              alt="Profile"
              className="rounded-full w-40 h-40 lg:w-48 lg:h-48 border-4 border-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* About Me Section */}
          <h2 className="text-5xl font-bold mb-6 text-white">Rudal Kunwar</h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            I am a passionate developer with experience in building responsive and dynamic web applications.
            My goal is to create beautiful, efficient, and scalable solutions using the latest technologies.
          </p>

          {/* Skills Section */}
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transition duration-300 transform hover:scale-105">
              <FaReact className="text-6xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-400">
                Expertise in building modern and responsive web applications using React, HTML5, CSS3, and JavaScript.
              </p>
            </div>

            <div className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transition duration-300 transform hover:scale-105">
              <FaLaptopCode className="text-6xl text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Full Stack Solutions</h3>
              <p className="text-gray-400">
                Skilled in back-end development with Node.js, Express, and integrating with databases like MongoDB and MySQL.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8">Connect with Me</h3>
            <div className="flex justify-center space-x-10">
              <a
                href="https://github.com/rudalkunwar" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaGithub className="text-5xl" />
              </a>
              <a
                href="https://www.rudalkunwar.com.np" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaGlobe className="text-5xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rudal-kunwar-4561bb260/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaLinkedin className="text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
