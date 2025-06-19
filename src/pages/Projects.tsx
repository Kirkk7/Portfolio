import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  Database,
  Box,
} from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";

const projects = [
  {
    id: 1,
    title: "Deepseek Clone",
    description:
      "A full-stack MERN-based DeepSeek clone featuring a responsive sidebar, chat interface, and seamless UI.",
    image: "Deepseek.png",
    categories: ["fullstack"],
    tech: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "JWT",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI API",
      "Axios",
      "dotenv",
      "CORS",
      "Bcrypt",
    ],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A responsive full-stack web developer portfolio with dynamic project showcases and contact integration.",
    image: "portfolio.png",
    categories: ["frontend"],
    tech: [
      "React",
      "Framer Motion",
      "Framer",
      "Lucide",
      "Tailwind CSS",
      "Formspree",
    ],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "HD Globe Trade Website",
    description:
      "A professional website for an import-export company showcasing global services, product catalog, and inquiry forms.",
    image: "hdglobe.png",
    categories: ["frontend"],
    tech: ["React", "GSAP", "Tailwind CSS", "Material UI", "Formspree"],
    demoLink: "https://hdglobetrade.com/",
    githubLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Infotech Website",
    description:
      "A modern website for a software development company featuring service highlights, client testimonials, and interactive UI.",
    image: "jn.png",
    categories: ["frontend"],
    tech: ["React", "JavaScript", "GSAP", "Formspree"],
    demoLink: "https://jinarthinfotech.com/",
    githubLink: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Pharmacy Management System",
    description:
      "A complete pharmacy management system with inventory, billing, and user authentication built using HTML, CSS, JavaScript, and PHP.",
    image: "pharma1.png",
    categories: ["fullstack"],
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Library Management System",
    description:
      "A desktop-based library management system developed with VB.NET and SQLClient for efficient book tracking, member management, and issue-return operations.",
    image: "lib.png",
    categories: ["fullstack"],
    tech: ["VB.NET", "SQLCLIENT"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 7,
    title: "F.I.R Management System",
    description:
      "A web-based F.I.R. management system built with HTML, CSS, JavaScript, and PHP for filing, tracking, and managing police reports efficiently.",
    image: "fir.png",
    categories: ["fullstack"],
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  // {
  //   id: 7,
  //   title: "API Gateway Microservice",
  //   description:
  //     "Scalable API gateway that handles routing, authentication, and rate limiting for microservices.",
  //   image:
  //     "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   categories: ["backend"],
  //   tech: ["Node.js", "Express", "Redis", "Docker", "JWT", "MongoDB"],
  //   demoLink: "#",
  //   githubLink: "#",
  //   featured: false,
  // },
  // {
  //   id: 8,
  //   title: "Content Management System",
  //   description:
  //     "Headless CMS with API endpoints for managing website content and media assets.",
  //   image:
  //     "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   categories: ["backend"],
  //   tech: ["Node.js", "Express", "MongoDB", "GraphQL", "AWS S3"],
  //   demoLink: "#",
  //   githubLink: "#",
  //   featured: false,
  // },
  // {
  //   id: 9,
  //   title: "Authentication Microservice",
  //   description:
  //     "Secure authentication service with social login, two-factor authentication, and RBAC.",
  //   image:
  //     "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   categories: ["backend"],
  //   tech: ["Node.js", "Express", "PostgreSQL", "Passport.js", "JWT", "Redis"],
  //   demoLink: "#",
  //   githubLink: "#",
  //   featured: false,
  // },
];

const filters = [
  { id: "all", label: "All Projects", icon: Box },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Server },
  { id: "fullstack", label: "Full Stack", icon: Database },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-dark-200 text-lg mb-8">
              A showcase of my work across various technologies and platforms.
              Each project represents unique challenges solved and skills
              applied.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center mb-12">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-full text-sm md:text-base font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-primary-700 text-white shadow-lg"
                      : "bg-dark-800 text-dark-300 hover:bg-dark-700"
                  }`}
                  onClick={() => handleFilterChange(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} className="mr-2" />
                  {filter.label}
                </motion.button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-2 py-1 bg-primary-700 text-white text-xs font-medium rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-dark-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2 py-1 bg-dark-700 rounded-full text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" /> Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-dark-700 hover:bg-dark-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={16} className="mr-1" /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-dark-300">
                Try changing the filter to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
