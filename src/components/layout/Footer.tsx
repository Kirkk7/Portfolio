import React from "react";
import * as Lucide from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 gradient-text">
              Kirtan Kapatel
            </h3>
            <p className="text-dark-200 max-w-md">
              Full-stack developer specializing in building exceptional digital
              experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center ">
            <a
              href="https://github.com/Kirkk7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-300 hover:text-primary-500 transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Lucide.Github size={20} className="cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/in/kirtanhpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-300 hover:text-primary-500 transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Lucide.Linkedin size={20} className="cursor-pointer" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-300 hover:text-primary-500 transition-colors"
              aria-label="Twitter"
            >
              <Lucide.Twitter size={20} />
            </a> */}
            <a
              href="mailto:pkachhiya888@gmail.com"
              className="text-dark-300 hover:text-primary-500 transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Lucide.Mail size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center text-dark-400 text-sm">
            <p>© {currentYear} Kirtan's Portfolio. All rights reserved.</p>
            {/* <div className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
