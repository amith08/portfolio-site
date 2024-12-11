import React from 'react';
import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaPython, FaWindows, FaLinux } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiTailwindcss, SiMysql,SiCplusplus,SiOracle,SiPostgresql,SiSpring } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';

function About() {
  const skills = {
    languages: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      {name: 'C++', icon: <SiCplusplus />},
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
        {name:"Windows", icon:<FaWindows />},
        {name:"Linux", icon:<FaLinux />},
    ]
  };

  const education = [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "Presidency University, Bangalore",
      year: "2020-2024",
      description:"Completed B.Tech in Computer Science and Engineering (CGPA: 7.4), with coursework in Data Structures, Software Engineering, Operating Systems, Algorithms, and Full-Stack Development"
    },
    {
      degree: "Pre-University",
      school: "M.E.S Pu College, Sirsi",
      year: "2018-2020",
    },
    {
        degree:"High School",
        school:"S.K.B.E.M High School, Sirsi",
        year:"2018",
    }
  ];

  const hobbies = [
    { name: "Indian Classical Music" },
    { name: "Photography" },
    { name: "Reading" },
    { name: "Traveling" }

  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      
      {/* Personal Info Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary">Who am I?</h3>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate web developer with a strong focus on creating responsive 
            and user-friendly applications. With expertise in modern web technologies, 
            I strive to build efficient and scalable solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge with the 
            developer community.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6">My Skills</h3>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-xl font-medium mb-2 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-4">
                  {items.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <span className="text-2xl text-primary">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Education</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bachelor's degree card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold mb-2">{education[0].degree}</h4>
            <p className="text-gray-600">{education[0].school}</p>
            <p className="text-primary font-medium">{education[0].year}</p>
            <p className="text-gray-500 mt-2">{education[0].description}</p>
          </div>

          {/* Pre-University and High School combined card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
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
      </div>

      {/* Hobbies Section */}
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Hobbies & Interests</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="text-4xl mb-2 block">{hobby.icon}</span>
              <span className="text-gray-700 font-medium">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About; 