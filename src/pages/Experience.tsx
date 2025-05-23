import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/shared/Button";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "UI/UX Designer Intern",
      company: "NativeSoftTech",
      location: "Remote",
      duration: "May 2025 - Present",
      description:
        "Specializing in user-centered designs and prototyping using Figma.",
      achievements: [
        "Improved user flow and reduced bounce rate by 25%.",
        "Designed 20+ high-fidelity Figma prototypes.",
        "Enhanced UX through user testing and feedback.",
      ],
      tech: ["Figma", "Plugins", "Wireframing", "Prototyping"],
      website: "https://nativestech.in/",
      logo: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Jinarth Infotech",
      location: "Anand, Gujarat, India",
      duration: "May 2024 - Present",
      description:
        "Skilled in building responsive web applications from front-end to back-end. Focused on performance, scalability, and user experience.",
      achievements: [
        "Developed and deployed scalable full-stack web apps using MERN stack.",
        "Integrated RESTful APIs and real-time features to enhance user experience.",
        "Optimized database queries, improving app performance by 30%.",
      ],
      tech: ["React", "MongoDB", "Express", "Node.js", "ASP.NET", "Next.js"],
      website: "https://jinarthinfotech.com/",
      logo: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      role: "Software Developer Intern",
      company: "Humming Byte Technologies",
      location: "Remote",
      duration: "Nov 2024- Apr 2025",
      description:
        "Skilled in designing, coding, and maintaining efficient software solutions.",
      achievements: [
        "Assisted in developing and debugging key software modules, improving functionality.",
        "Collaborated with the team to implement new features on schedule.",
        "Learned and applied best coding practices to enhance code quality and maintainability.",
      ],
      tech: [
        "Programming Languages",
        "MERN Stack",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      website: "https://hmbyte.com/",
      logo: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

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
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-dark-200 text-lg mb-8">
              My professional journey through the tech industry, showcasing
              roles, responsibilities, and key achievements over the years.
            </p>
            <div className="flex justify-center">
              <a href="/Kirtan_Kapatel.pdf" download>
                <Button variant="primary" icon={Briefcase}>
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Career Timeline"
            subtitle="A chronological overview of my professional experience and growth as a developer."
          />

          <motion.div
            className="timeline-container mt-20 pl-6 md:pl-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-dot" style={{ top: "24px" }}></div>

                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "md:ml-auto md:mr-0"
                      : "md:ml-0 md:mr-auto"
                  } md:w-5/12 bg-dark-800 rounded-xl shadow-lg border border-dark-700 overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={experience.logo}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{experience.role}</h3>
                        <a
                          href={experience.website}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <p className="text-primary-500 cursor-pointer">
                            {experience.company}
                          </p>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-dark-300">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-dark-200 mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-white">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-dark-200">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-white">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-dark-700 rounded-full text-primary-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-dark-200 mb-8">
              Want to know more about my experience or discuss potential
              opportunities?
            </p>
            <Button variant="primary" icon={Briefcase}>
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
