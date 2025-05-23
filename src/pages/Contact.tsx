import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/shared/Button";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzwavqa");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-dark-200 text-lg mb-8">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you. Fill out the form below or reach out
              directly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-dark-800 rounded-xl shadow-xl border border-dark-700 p-6 md:p-8"
            >
              <motion.div variants={itemVariants}>
                <SectionTitle title="Send a Message" />
              </motion.div>
              <form onSubmit={handleSubmit}>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="email" className="block text-white mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="block text-white mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white resize-none"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </motion.div>

                {state.succeeded && (
                  <motion.div
                    className="mb-6 p-4 rounded-lg bg-green-900/40 text-green-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Your message has been sent successfully!
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    variant="primary"
                    icon={Lucide.Send}
                    disabled={state.submitting}
                    className="w-full"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div>
              <motion.div
                className="bg-dark-800 rounded-xl shadow-xl border border-dark-700 p-6 md:p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SectionTitle title="Contact Information" />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900/30 text-primary-500 flex-shrink-0">
                      <Lucide.Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <a
                        href="mailto:contact@example.com"
                        className="text-dark-300 hover:text-primary-500 transition-colors"
                      >
                        pkachhiya888@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900/30 text-primary-500 flex-shrink-0">
                      <Lucide.Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-dark-300 hover:text-primary-500 transition-colors"
                      >
                        +91 97734 67738
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900/30 text-primary-500 flex-shrink-0">
                      <Lucide.MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Location</h3>
                      <p className="text-dark-300">Anand, Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-800 rounded-xl shadow-xl border border-dark-700 p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-bold text-xl mb-6">Connect With Me</h3>

                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/kirtanhpatel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
                  >
                    <Lucide.Linkedin size={20} className="text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Kirkk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
                  >
                    <Lucide.Github size={20} className="text-white" />
                    <span>GitHub</span>
                  </a>

                  {/* <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
                  >
                    <Lucide.Twitter size={20} className="text-[#1DA1F2]" />
                    <span>Twitter</span>
                  </a> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
