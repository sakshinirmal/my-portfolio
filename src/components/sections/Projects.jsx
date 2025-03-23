import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faNode,
  faPython,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faArrowRight,
  faCode,
  faDatabase,
  faServer,
  faLaptopCode,
  faLock,
  faCodeBranch,
  faCubes,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

// Import project images
import hrmsImage from "../../assets/hrms.png";
import pompaImage from "../../assets/pompa.png";
import textToEmojiImage from "../../assets/texttoemoji.png";
import dsaImage from "../../assets/dsa.png";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "HRMS (Human Resources Management System)",
      description: "A comprehensive HR management system built with a microfrontend architecture for scalability and modularity.",
      image: hrmsImage,
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Kubernetes"],
      links: [],
    
      features: [
        "Modular microfrontend dashboard using Webpack Module Federation",
        "CI/CD pipelines for continuous deployment and testing",
        "Enhanced UI performance with custom hooks and lazy loading",
        "Comprehensive employee management system",
        "Advanced reporting and analytics"
      ],
      tech: {
        frontend: ["React.js", "Tailwind CSS", "Webpack", "Module Federation"],
        backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
        other: ["Kubernetes", "CI/CD", "Docker"],
      },
    },
    {
      title: "Pompa Fashion - Animated Landing Page",
      description: "An interactive and visually stunning landing page for a fashion brand with advanced animations and smooth scrolling.",
      image: pompaImage,
      tags: ["HTML", "CSS", "JavaScript", "Shery.js"],
      links: {
        github: "https://github.com/sakshinirmal/LandingPage",
        live: "https://sakshinirmal.github.io/LandingPage/",
      },
      features: [
        "Interactive cursor animations for engaging user experience",
        "Click-based smooth scrolling for seamless navigation",
        "Visually appealing product showcases with parallax effects",
        "Optimized performance for smooth animations"
      ],
      tech: {
        frontend: ["HTML", "CSS", "JavaScript", "Shery.js"],
        backend: [],
        other: ["Animation Libraries", "Responsive Design"],
      },
    },
    {
      title: "Text to Emoji Encryption/Decryption",
      description: "A unique encryption system that converts text messages into emoji sequences for secure and fun communication.",
      image: textToEmojiImage,
      tags: ["JavaScript", "Encryption", "Web Security"],
      links: {
        github: "https://github.com/sakshinirmal/TextEmoji",
        live: "https://sakshinirmal.github.io/TextEmoji",
      },
      features: [
        "Secure text to emoji encryption algorithm",
        "Decryption functionality to convert emojis back to text",
        "User-friendly interface for easy message conversion",
        "Enhanced messaging security with a fun dimension"
      ],
      tech: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        other: ["Web Security", "Encoding/Decoding"],
      },
    },
    {
      title: "Data Structures & Algorithms Visualizer",
      description: "An interactive tool for visualizing various data structures and algorithms to aid in learning and understanding complex concepts.",
      image: dsaImage,
      tags: ["React", "JavaScript", "Algorithms", "Framer Motion"],
      links: {
        github: "https://github.com/sakshinirmal/sorting-visualizer",
        live: "https://sorting-visualizer-blue-seven.vercel.app/",
      },
      features: [
        "Visual representation of common data structures Sorting Algorithms",
        "Step-by-step algorithm visualization with speed control",
        "Interactive code execution with real-time visualization",
        "Educational explanations for each algorithm and data structure"
      ],
      tech: {
        frontend: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
        backend: [],
        other: ["Vite"],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="gradient-text">Featured Projects</span>
          <motion.span
            className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl p-6 hover-lift h-full flex flex-col relative overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden border border-[var(--surface)] shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200?text=Project+Image";
                    }}
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-semibold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full glass-effect text-[var(--secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center hover-lift group"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-[var(--text-secondary)] group-hover:text-[var(--secondary)] transition"
                      />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center hover-lift group"
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="text-[var(--text-secondary)] group-hover:text-[var(--secondary)] transition"
                      />
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[var(--secondary)] flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold gradient-text">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text)] text-xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-lg overflow-hidden border border-[var(--surface)] shadow-md">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x400?text=Project+Image";
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)]">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[var(--text)]">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-[var(--text-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[var(--text)]">Tech Stack</h4>
                  <div className="space-y-4">
                    {selectedProject.tech.frontend.length > 0 && (
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          className="text-[var(--secondary)] mt-1"
                        />
                        <div>
                          <p className="text-sm text-[var(--text-secondary)]">Frontend</p>
                          <p className="text-[var(--text)]">
                            {selectedProject.tech.frontend.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {selectedProject.tech.backend.length > 0 && (
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faServer}
                          className="text-[var(--secondary)] mt-1"
                        />
                        <div>
                          <p className="text-sm text-[var(--text-secondary)]">Backend</p>
                          <p className="text-[var(--text)]">
                            {selectedProject.tech.backend.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {selectedProject.tech.other.length > 0 && (
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faCubes}
                          className="text-[var(--secondary)] mt-1"
                        />
                        <div>
                          <p className="text-sm text-[var(--text-secondary)]">Other Technologies</p>
                          <p className="text-[var(--text)]">
                            {selectedProject.tech.other.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass-effect text-[var(--text)] hover:text-[var(--secondary)] transition flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass-effect text-[var(--text)] hover:text-[var(--secondary)] transition flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

