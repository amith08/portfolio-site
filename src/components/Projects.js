// import React from 'react';
// import myImage from '../Resource/project1.png'
// import myImage2 from '../Resource/Home01.png'
// import myImage3 from '../Resource/memoryAllocator.png'
// function Projects() {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce platform built with React and SpringBoot",
//       technologies: ["Java", "React", "Spring Boot", "MySQL" ],
//       image: myImage,
//       github: "https://github.com/amith08/frontend-ecom-react"
//     },
//     {
//       title: "Project Management App",
//       description: "A responsive task management application with real-time updates",
//       technologies: ["React","Java" ,"Spring Boot", "Postgres","Tailwind CSS"],
//       image: myImage2,
      
//       github: "https://github.com/amith08/TodoManagemnt"
//     },
//     {
//       title: "Memory Allocation Simulator Nov 2023",
//       description: "Dummy Memeory Allocation Simulator to analyze different allocation strategies in operating systems",
//       technologies: ["Python ", "Linux",],
//       image: myImage3,
      
//       github: "https://github.com/amith08"
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto py-12 px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img 
//               src={project.image} 
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects; 