import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../Resource/project1.png';
import myImage2 from '../Resource/Home01.png';
import myImage3 from '../Resource/memoryAllocator.png';

function Experience() {
  const experiences = [
    {
      company: "Alt Digital Technologies",
      position: "Trainee-Software Developer",
      duration: "October 2024 - Present",
      location: "Sirsi, Karnataka",
      description: [
        "Working on the development of the Website",
      ],
      technologies: ["Java", "Spring Boot", "Oracle"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React and SpringBoot",
      technologies: ["Java", "React", "Spring Boot", "MySQL"],
      image: myImage,
      github: "https://github.com/amith08/frontend-ecom-react"
    },
    {
      title: "Project Management App",
      description: "A responsive task management application with real-time updates",
      technologies: ["React", "Java", "Spring Boot", "Postgres", "Tailwind CSS"],
      image: myImage2,
      github: "https://github.com/amith08/TodoManagemnt"
    },
    {
      title: "Memory Allocation Simulator Nov 2023",
      description: "Dummy Memory Allocation Simulator to analyze different allocation strategies in operating systems",
      technologies: ["Python", "Linux"],
      image: myImage3,
      github: "https://github.com/amith08"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4 animate-fadeIn">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          My <span className="text-primary">Works</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-20"
      >
        <motion.h3 
          variants={itemVariants}
          className="text-2xl font-semibold text-primary mb-8 text-center"
        >
          Work Experience
        </motion.h3>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div className="space-y-2">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800"
                  whileHover={{ color: '#2563eb' }}
                >
                  {exp.company}
                </motion.h3>
                <p className="text-xl text-gray-600">{exp.position}</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-medium">{exp.duration}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {exp.description.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-gray-700 flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {exp.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#2563eb', color: 'white' }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium
                    transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h3 
          variants={itemVariants}
          className="text-2xl font-semibold text-primary mb-8 text-center"
        >
          Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <motion.div 
                className="relative overflow-hidden aspect-video"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                    flex items-end justify-center p-6"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white rounded-full font-medium
                      transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="p-6">
                <motion.h4 
                  className="text-xl font-bold text-gray-800 mb-3"
                  whileHover={{ color: '#2563eb' }}
                >
                  {project.title}
                </motion.h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: '#2563eb', color: 'white' }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium
                        transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Experience; 