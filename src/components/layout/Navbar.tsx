import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Briefcase,
  Layers,
  Mail,
  Home,
  Code,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <User size={18} /> },
    { to: "/projects", label: "Projects", icon: <Layers size={18} /> },
    { to: "/experience", label: "Experience", icon: <Briefcase size={18} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-xl shadow-lg py-2 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo/Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Code className="text-white" size={20} />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-md opacity-50 -z-10 group-hover:opacity-75 transition-opacity"></div>
            </motion.div>
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                KirtanCodes
              </span>
              <p className="text-gray-400 text-xs -mt-1">
                Full Stack Developer
              </p>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={
                      location.pathname === link.to ? "text-blue-400" : ""
                    }
                  >
                    {link.icon}
                  </motion.span>
                  <span className="font-medium">{link.label}</span>
                  {location.pathname === link.to && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 focus:outline-none rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.div
              className="fixed top-0 right-0 w-full max-w-sm h-screen z-50 overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-l border-gray-700/50">
                {/* Header with close button */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <Code className="text-white" size={18} />
                    </div>
                    <div>
                      <span className="text-white font-bold">Navigation</span>
                      <p className="text-gray-400 text-sm">Explore the pages</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <motion.div className="flex flex-col gap-2 p-6 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      variants={linkVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      custom={index}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `flex items-center gap-4 px-6 py-4 rounded-xl text-lg transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30 shadow-lg"
                              : "text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent"
                          }`
                        }
                        onClick={toggleMenu}
                      >
                        <motion.span
                          className={`flex-shrink-0 ${
                            location.pathname === link.to
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {link.icon}
                        </motion.span>
                        <span className="font-medium">{link.label}</span>
                        {location.pathname === link.to && (
                          <motion.span
                            className="ml-auto w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
                            layoutId="active-dot"
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="p-6 border-t border-gray-700/50 bg-gray-900/50"
                  variants={linkVariants}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <Code className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">KirtanCodes</p>
                      <p className="text-gray-400 text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-gray-400 text-xs">
                      © {new Date().getFullYear()} All rights reserved
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
