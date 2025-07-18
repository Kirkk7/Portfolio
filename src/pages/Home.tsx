import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Lucide from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import { FloatingPaths } from "../components/layout/FloatingPaths";
// import FloatingBubbles from "../components/layout/FloatingBubbles";
const images = [
  // { src: "/kk1.jpg", shape: "rounded-xl" },
  { src: "/kk5.png", shape: "rounded-xl" },
  { src: "/kk6.png", shape: "rounded-2xl" },
  { src: "/kk7.png", shape: "rounded-none" },
  { src: "/kk8.jpg", shape: "rounded-none" },
];
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[index];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: ["-10px", "10px"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] relative overflow-hidden flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
        {/* <FloatingBubbles count={15} colors={["#40F8FF", "#CCAD02"]} /> */}
        <FloatingPaths position={1} />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-primary-800/30 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-secondary-800/20 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: {
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            },
          }}
        />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1"
            >
              <div className="flex justify-center md:justify-start">
                <motion.span
                  variants={itemVariants}
                  className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
                >
                  Kirtan Kapatel
                </motion.span>
              </div>
              <div className="p-2"></div>
              <div className="flex justify-center md:justify-start">
                <motion.span
                  variants={itemVariants}
                  className="inline-block  px-4 py-3 rounded-full bg-dark-800 text-primary-500 text-sm font-medium mb-6 mr-2"
                >
                  Full-Stack Developer
                </motion.span>

                <motion.span
                  variants={itemVariants}
                  className="inline-block  px-4 py-3 rounded-full bg-dark-800 text-primary-500 text-sm font-medium mb-6"
                >
                  UI/UX Designer
                </motion.span>
              </div>
              <motion.h1
                variants={itemVariants}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Building <span className="gradient-text">digital</span>{" "}
                experiences that <span className="gradient-text">matter</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-dark-200 text-lg mb-8 max-w-lg"
              >
                I'm a passionate full-stack developer crafting beautiful,
                functional, and user-friendly applications. Specializing in
                modern web technologies and creative problem-solving.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <a href="/KirtanKapatel.pdf" download>
                  <Button variant="primary" icon={Lucide.Download}>
                    Download Resume
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    icon={Lucide.ArrowRight}
                    iconPosition="right"
                  >
                    Let's Talk
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-5 flex items-center gap-8 "
              >
                <div className="flex gap-6 ">
                  <a
                    href="https://github.com/Kirkk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-primary-500 transition-colors cursor-pointer"
                  >
                    <Lucide.Github size={20} className="cursor-pointer" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kirtanhpatel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-primary-500 transition-colors"
                  >
                    <Lucide.Linkedin size={20} className="cursor-pointer" />
                  </a>
                </div>
                <div className="h-8 w-px bg-dark-700"></div>
                <div>
                  <p className="text-dark-300">Based in</p>
                  <p className="font-medium">Anand, Gujarat, India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="-left-1.5 relative w-full h-[500px] overflow-hidden rounded-2xl ">
                <div className=" absolute inset-0 bg-gradient-to-b from-primary-800/40 to-secondary-800/40 mix-blend-multiply z-10 rounded-2xl"></div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage.src}
                    src={currentImage.src}
                    alt="Developer portrait"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className={`w-full h-full object-cover ${currentImage.shape}`}
                  />
                </AnimatePresence>
              </div>

              {/* Tech stack floating card */}
              <motion.div
                className="absolute -bottom-5 -left-5 md:left-auto md:-right-10 bg-dark-800 p-4 rounded-lg shadow-xl border border-dark-700 z-20 max-w-[235px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 text-primary-500">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "JavaScript",
                    "MongoDB",
                    "Figma",
                    "Next.js",
                  ].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-700 rounded text-xs text-dark-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Section */}
      <section className="section-padding bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects">
              <Button
                variant="ghost"
                icon={Lucide.ArrowRight}
                iconPosition="right"
                className="w-36"
              >
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deepseek Clone",
                description:
                  "A full-stack MERN-based DeepSeek clone featuring a responsive sidebar, chat interface, and seamless UI.",
                image: "Deepseek.png",
                tags: ["MERN", "JWT", "React Router", "Axios", "Bcrypt"],
                link: "#",
              },
              {
                title: "Personal Portfolio",
                description:
                  "A responsive full-stack web developer portfolio with project showcases and contact integration.",
                image: "portfolio.png",
                tags: ["React", "TypeScript", "Framer Motion"],
                link: "#",
              },
              {
                title: "Jinarth Infotech Website",
                description:
                  "A modern website for a software development company featuring service highlights and interactive UI.",
                image: "jn.png",
                tags: ["React", "Framer Motion", "GSAP"],
                link: "https://jinarthinfotech.com/",
              },
              // {
              //   title: "Hd Globe Trade Website",
              //   description:
              //     "A professional website for an import-export company showcasing global services, product catalog, and inquiry forms.",
              //   image: "hdglobe.png",
              //   tags: ["React", "Smooth Scrolling", "Animations"],
              //   link: "https://hdglobetrade.com/",
              // },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 bg-dark-700 rounded-full text-primary-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium"
                  >
                    View Project{" "}
                    <Lucide.ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
