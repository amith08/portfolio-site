import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaPython, FaWindows, FaLinux } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiTailwindcss, SiMysql, SiCplusplus, SiOracle, SiPostgresql, SiSpring } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function About() {
  const skills = {
    languages: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'HTML/CSS', icon: <AiFillHtml5 /> },
    ],
    frameworks: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Spring', icon: <SiSpring /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Oracle', icon: <SiOracle /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
    operatingSystem: [
      { name: "Windows", icon: <FaWindows /> },
      { name: "Linux", icon: <FaLinux /> },
    ]
  };

  const education = [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "Presidency University, Bangalore",
      year: "2020-2024",
      description: "Completed B.Tech in Computer Science and Engineering (CGPA: 7.4), with coursework in Data Structures, Software Engineering, Operating Systems, Algorithms, and Full-Stack Development"
    },
    {
      degree: "Pre-University",
      school: "M.E.S Pu College, Sirsi",
      year: "2018-2020",
    },
    {
      degree: "High School",
      school: "S.K.B.E.M High School, Sirsi",
      year: "2018",
    }
  ];

  const hobbies = [
    { name: "Indian Classical Music" },
    { name: "Photography" },
    { name: "Reading" },
    { name: "Traveling" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Personal Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow space-y-6">
  <h3 className="text-2xl font-semibold text-primary">Who am I?</h3>
  <p className="text-gray-600 leading-relaxed">
    I'm a passionate web developer with a strong focus on creating responsive 
    and user-friendly applications. I strive to build efficient, scalable, and 
    maintainable solutions that meet users' needs and exceed expectations.
  </p>
  <p className="text-gray-600 leading-relaxed">
    My journey in development is fueled by a commitment to continuous learning 
    and a curiosity to explore emerging trends in the tech ecosystem. Whether 
    it's crafting intuitive designs or optimizing functionality, I approach 
    every challenge with enthusiasm and attention to detail.
  </p>
  <p className="text-gray-600 leading-relaxed">
    When I'm not coding, you can find me exploring new technologies, 
    contributing to open-source projects, mentoring aspiring developers, 
    or sharing insights with the developer community through blogs and talks.
  </p>
</div>


          {/* Skills Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">My Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-xl font-medium mb-3 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-4">
                    {items.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full
                          text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-xl text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bachelor's degree card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-2">{education[0].degree}</h4>
              <p className="text-gray-600">{education[0].school}</p>
              <p className="text-primary font-medium">{education[0].year}</p>
              <p className="text-gray-500 mt-2">{education[0].description}</p>
            </div>

            {/* Pre-University and High School combined card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">{education[1].degree}</h4>
                <p className="text-gray-600">{education[1].school}</p>
                <p className="text-primary font-medium">{education[1].year}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{education[2].degree}</h4>
                <p className="text-gray-600">{education[2].school}</p>
                <p className="text-primary font-medium">{education[2].year}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-gray-700 font-medium">{hobby.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Want to work together?</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg
              hover:bg-secondary transform hover:scale-105 transition-all duration-300
              shadow-md hover:shadow-xl"
          >
            Let's Connect
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About; 