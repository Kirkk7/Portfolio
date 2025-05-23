import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  CheckCircle,
} from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/shared/Button";
import FloatingBubbles from "../components/layout/FloatingBubbles";
const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "achievements", label: "Achievements", icon: CheckCircle },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <FloatingBubbles count={45} colors={["#40F8FF", "#CCAD02"]} />
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <motion.h1
                className="font-heading text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About <span className="gradient-text">Me</span>
              </motion.h1>
              <motion.p
                className="text-dark-200 text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm a full-stack developer with 1+ years of experience building
                web applications. I specialize in JavaScript, TypeScript, React,
                Node.js, and modern web technologies.
              </motion.p>
              <motion.p
                className="text-dark-200 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                My mission is to create elegant solutions that solve real-world
                problems. I'm passionate about clean code, user experience, and
                continuous learning.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button variant="primary" icon={Briefcase}>
                  Hire Me
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5324947/pexels-photo-5324947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
              </div>
              {/* Experience badge */}
              <motion.div
                className="absolute top-4 right-4 bg-dark-800 p-4 rounded-lg shadow-xl border border-primary-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold gradient-text">1+</h3>
                <p className="text-dark-300 text-sm">Years Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <SectionTitle
              title="My Background"
              subtitle="Explore my education, skills, certificates, and achievements."
            />
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-full text-sm md:text-base font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary-700 text-white shadow-lg"
                      : "bg-dark-800 text-dark-300 hover:bg-dark-700"
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <Icon size={18} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-dark-800 rounded-2xl shadow-xl border border-dark-700 p-6 md:p-8">
            {activeTab === "education" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="education"
                className="space-y-8"
              >
                {[
                  {
                    degree: "Bachelor of Computer Applications",
                    school: "The CVM University",
                    years: "2021 - 2024",
                    result: "9.84/10 CGPA",
                    description:
                      "Bachelor's degree in Computer Applications focused on software and systems.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col md:flex-row md:items-start gap-4 p-4 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900/30 text-primary-500 flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-dark-300 mb-2">
                        <span>{item.school}</span>
                        <span className="hidden md:block">•</span>
                        <span>{item.years}</span>
                        <span className="hidden md:block">•</span>
                        <span>{item.result}</span>
                      </div>
                      <p className="text-dark-200">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="skills"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Frontend Development
                  </h3>
                  <div className="space-y-6">
                    {[
                      { name: "React / Next.js", level: 95 },
                      { name: "JavaScript / TypeScript", level: 90 },
                      { name: "HTML5 / CSS3", level: 85 },
                      { name: "Tailwind CSS", level: 90 },
                      { name: "Rszor Pages (ASP.NET)", level: 95 },
                    ].map((skill, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span className="text-primary-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Backend Development
                  </h3>
                  <div className="space-y-6">
                    {[
                      { name: "Node.js / Express", level: 85 },
                      { name: "ASP.NET Core MVC", level: 90 },
                      { name: "MongoDB / Mongoose", level: 80 },
                      { name: "SQLite", level: 75 },
                      { name: "MySQL", level: 70 },
                    ].map((skill, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span className="text-primary-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Git",
                      "GitHub",
                      "Framer",
                      "Jupyter",
                      "Anaconda",
                      "Postman",
                      "Vite",
                      "NetBeans",
                      "Visual Studio Code",
                      "Figma",
                      "Adobe XD",
                      "Photoshop",
                      "Canva",
                      "Visual Studio",
                      "Netlify",
                      "Vercel",
                      "Firebase",
                      "Redux",
                    ].map((tool, index) => (
                      <motion.span
                        key={index}
                        variants={itemVariants}
                        className="px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm transition-colors"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "certificates" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="certificates"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "C PROGRAMMING",
                    issuer: "Coding Seekho",
                    date: "August 2024",
                    image: "c.jpg",
                    view: "#",
                  },
                  {
                    title: "C++ PROGRAMMING",
                    issuer: "Coding Seekho",
                    date: "August 2024",
                    image: "cpp.jpg",
                    view: "#",
                  },
                  {
                    title: "DATA STRUCTURE WITH ALGORITHMS",
                    issuer: "Coding Seekho",
                    date: "August 2024",
                    image: "dsa.jpg",
                    view: "#",
                  },
                  {
                    title: "HTML,CSS, BOOTSTRAP,JS",
                    issuer: "Coding Seekho",
                    date: "September 2024",
                    image: "html.jpg",
                    view: "#",
                  },
                  {
                    title: "JAVA PROGRAMMING",
                    issuer: "Coding Seekho",
                    date: "Octomber 2024",
                    image: "java.jpg",
                    view: "#",
                  },
                  {
                    title: "PYTHON PROGRAMMING",
                    issuer: "Coding Seekho",
                    date: "November 2024",
                    image: "python.jpg",
                    view: "#",
                  },
                  {
                    title: "MERN STACK DEVELOPER ",
                    issuer: "Coding Seekho",
                    date: "December 2024",
                    image: "mern.jpg",
                    view: "#",
                  },
                  {
                    title: "FULL STACK DEVELOPER ",
                    issuer: "Coding Seekho",
                    date: "January 2025",
                    image: "full.jpg",
                    view: "#",
                  },
                  {
                    title: "Node.js Bootcamp",
                    issuer: "LetsUpgrade",
                    date: "May 2025",
                    image: "node.png",
                    view: "https://verify.letsupgrade.in/certificate/LUENJSAPR125884",
                  },
                  {
                    title: "Figma Bootcamp",
                    issuer: "LetsUpgrade",
                    date: "March 2025",
                    image: "Figma.png",
                    view: "https://verify.letsupgrade.in/certificate/LUEFGMAR1251007",
                  },
                  {
                    title: "Introduction to Front-End Development",
                    issuer: "META",
                    date: "May 2024",
                    image: "frontend.png",
                    view: "https://coursera.org/verify/MA7R2YNXL8R2",
                  },
                  {
                    title: "Introduction to the IOT and Embedded Systems",
                    issuer: "University of California, Irvine",
                    date: "Feb 2024",
                    image: "IOT.png",
                    view: "https://coursera.org/verify/JXXNUT99ZQEV",
                  },
                  {
                    title: "Introduction to Artificial Intelligence",
                    issuer: "IBM",
                    date: "Feb 2024",
                    image: "ai.png",
                    view: "https://coursera.org/verify/8RJ9S28PTRTK",
                  },
                  {
                    title:
                      "Introduction to Computers and Office Productivity Software",
                    issuer: "Hong Kong University of Science and Technology",
                    date: "May 2023",
                    image: "comp.png",
                    view: "https://coursera.org/verify/2CY6LWR9JT9D",
                  },
                  {
                    title: "Animation with JavaScript and jQuery",
                    issuer: "UCDAVIS",
                    date: "May 2023",
                    image: "jqry.png",
                    view: "https://coursera.org/verify/PKTUFPBPFPPD",
                  },
                  {
                    title: "JavaScript Basics",
                    issuer: "UCDAVIS",
                    date: "May 2023",
                    image: "jsb.png",
                    view: "https://coursera.org/verify/ZEXDJPDYWUED",
                  },
                  {
                    title: "Leadership Skills",
                    issuer: "Indian Institute of Management Ahmedabad",
                    date: "May 2023",
                    image: "leader.png",
                    view: "https://coursera.org/verify/67HE7VSXDX9M",
                  },
                  {
                    title: "Python Basic Structures: Lists, Strings, and Files",
                    issuer: "Codio",
                    date: "February 2023",
                    image: "codio.png",
                    view: "https://coursera.org/verify/4EBDCEGTQRAJ",
                  },
                  {
                    title: "Python Basics: Selection and Iteration",
                    issuer: "Codio",
                    date: "February 2023",
                    image: "codio2.png",
                    view: "https://coursera.org/verify/8QDNRSTYEWZF",
                  },
                  {
                    title: "Introduction to Java",
                    issuer: "Learn Quests",
                    date: "July 2022",
                    image: "learnjava.png",
                    view: "https://coursera.org/verify/AUQSYYUPZR49",
                  },
                  {
                    title: "SQL for Data Science",
                    issuer: "UCDAVIS",
                    date: "July 2022",
                    image: "dt.png",
                    view: "https://coursera.org/verify/3J5K7EYB3N32",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                      <div className="flex flex-col text-sm text-dark-300">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="achievements"
                className="space-y-6"
              >
                {[
                  {
                    title: "Nominated for Best Project (2024)",
                    description:
                      "Recognized for developing an innovative healthcare application that improves patient care and medical record management.",
                    year: "2023",
                  },
                  {
                    title:
                      "2nd, Frontend Hackathon – College Tech Event (2023)",
                    description:
                      "Ranked in the top 1% of contributors to React.js, with over 50 pull requests merged into the core repository.",
                    year: "2022",
                  },
                  {
                    title: "Completed 50+ DSA problems on LeetCode",
                    description:
                      'Delivered a talk on "Performance Optimization in Large-Scale React Applications" at ReactConf 2022.',
                    year: "2022",
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900/30 text-primary-500 flex-shrink-0 mt-1">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">
                          {achievement.title}
                        </h3>
                        <span className="px-2 py-1 rounded bg-dark-700 text-primary-500 text-xs md:ml-2">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-dark-200">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
