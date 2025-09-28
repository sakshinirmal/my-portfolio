import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBriefcase, 
  faCalendar, 
  faMapMarkerAlt,
  faCode,
  faUsers,
  faTasks,
  faBuilding,
  faLaptopCode,
  faServer,
  faMobileAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const Experience = () => {
  const experiences = [
    {
      title: "Jr. Web Developer",
      company: "Sri Sathya Sai Premamrutha Prakashana",
      location: "India",
      duration: "May 25 - Present",
      type: "Full-time",
      description: "Developed a face recognition-based image retrieval portal using Python, FaceNet and Pinecone with Google Drive API integration.",
      achievements: [
        "Developed a face recognition-based image retrieval portal using Python, FaceNet and Pinecone",
        "Integrated Google Drive API to automate retrieval and organization of photo collections, reducing manual effort by 80%",
        "Optimized backend architecture for real-time search (under 2 second), scalability, and secure access for members"
      ],
      technologies: ["Python", "FaceNet", "Pinecone", "Google Drive API", "Face Recognition", "Image Processing"],
      icon: faCode,
      color: "#FF9800"
    },
    {
      title: "Jr. Full Stack Developer",
      company: "Tenet KD Platform pvt ltd",
      location: "Pune, India",
      duration: "May 2024 - Feb 2025",
      type: "Full-time",
      description: "Developed and maintained interactive React.js, Node.js, Tailwind applications with a focus on component-based architecture.",
      achievements: [
        "Implemented REST APIs and GraphQL to enhance data fetching efficiency",
        "Deployed applications in Docker and Kubernetes environments",
        "Designed reusable React components with a focus on modularity and scalability"
      ],
      technologies: ["React.js", "Node.js", "Tailwind CSS", "GraphQL", "Docker", "Kubernetes"],
      icon: faLaptopCode,
      color: "#4CAF50"
    },
    {
      title: "Sr. Application Developer Intern",
      company: "IgnAite",
      location: "New Jersey, US (Remote)",
      duration: "Jan 2024 - May 2024",
      type: "Internship",
      description: "Led the frontend team to build React.js-based web applications with scalable UI architecture.",
      achievements: [
        "Developed component-based designs, ensuring high performance and accessibility",
        "Implemented Redux for state management, reducing API calls by 30%",
        "Collaborated with cross-functional teams to deliver high-quality web applications"
      ],
      technologies: ["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "RESTful APIs"],
      icon: faServer,
      color: "#2196F3"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Pegasus Technology and Software Pvt. Ltd.",
      location: "India",
      duration: "July 2023 - Aug 2023",
      type: "Internship",
      description: "Designed a React-based admission portal with a focus on UI/UX and responsive design.",
      achievements: [
        "Increased user engagement by 20% by optimizing frontend interactions",
        "Implemented responsive design principles for cross-device compatibility",
        "Collaborated with UI/UX team to enhance user experience"
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX"],
      icon: faMobileAlt,
      color: "#9C27B0"
    },
    {
      title: "Content & Social Media Lead",
      company: "Google Developer Students Club",
      location: "College Chapter",
      duration: "Aug 2022 - Dec 2022",
      type: "Leadership Role",
      description: "Curated content, managed platforms, and executed impactful campaigns, resulting in growth.",
      achievements: [
        "Directed the \"Composed Camp\" Android development workshop",
        "Achieved a turnout of over 100 participants",
        "Created engaging technical content for social media platforms",
        "Collaborated with team members to organize tech events"
      ],
      technologies: ["Content Creation", "Social Media Management", "Event Organization", "Android Development"],
      icon: faGlobe,
      color: "#FF5722"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="gradient-text">Work Experience</span>
          <motion.span
            className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)]/20 via-[var(--secondary)]/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-7 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: experience.color }}
                />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-xl p-6 md:p-8 hover-lift"
                >
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center"
                      style={{ color: experience.color }}
                    >
                      <FontAwesomeIcon
                        icon={experience.icon}
                        className="text-2xl glow-subtle"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">
                        <span className="gradient-text">{experience.title}</span>
                      </h3>
                      <div className="flex flex-wrap gap-4 text-[var(--text-secondary)] text-sm">
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faBuilding} />
                          {experience.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} />
                          {experience.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-6">
                    {experience.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[var(--text)] flex items-center gap-2">
                      <FontAwesomeIcon 
                        icon={faTasks} 
                        style={{ color: experience.color }}
                      />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (i * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-[var(--text-secondary)]"
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: experience.color }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full glass-effect"
                        style={{ color: experience.color }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 