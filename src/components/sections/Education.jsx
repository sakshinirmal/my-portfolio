import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap,
  faCalendar,
  faMapMarkerAlt,
  faTrophy,
  faBook,
  faUniversity,
  faCertificate,
  faAward
} from "@fortawesome/free-solid-svg-icons";

export const Education = () => {
  const education = [
    {
      degree: "B.tech (Computer Science Engineering)",
      institution: "St. Vincent Pallotti College of Engineering and Technology",
      location: "Nagpur, India",
      duration: "Apr 2020 - May 2024",
      description: "Comprehensive education in computer science fundamentals, software development, and engineering principles.",
      achievements: [
        "Specialized in full-stack web development",
        "Participated in coding competitions and hackathons",
        "Completed multiple projects in web development",
        "Active member of Google Developer Students Club"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Computer Networks",
        "Operating Systems"
      ],
      icon: faGraduationCap,
      color: "#E91E63"
    },
    {
      degree: "XII (Higher Secondary)",
      institution: "Major Hemant Jakate jr. College of Science and Commerce",
      location: "Nagpur, India",
      duration: "Apr 2019 - Apr 2020",
      description: "Completed higher secondary education with focus on science and mathematics.",
      achievements: [
        "Strong foundation in mathematics and computer science",
        "Participated in science exhibitions",
        "Developed interest in programming and technology"
      ],
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ],
      icon: faUniversity,
      color: "#3F51B5"
    },
    {
      degree: "Professional Certifications",
      institution: "Various Platforms",
      location: "Online",
      duration: "2020 - Present",
      description: "Additional professional development and specialized training in modern web technologies.",
      achievements: [
        "React.js Development Certification",
        "Full Stack Web Development",
        "Data Structures and Algorithms",
        "Cloud Computing Fundamentals"
      ],
      courses: [
        "Frontend Development",
        "Backend Development",
        "DevOps Practices",
        "UI/UX Design",
        "Cloud Technologies"
      ],
      icon: faCertificate,
      color: "#FF9800"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="gradient-text">Education & Certifications</span>
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
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-7 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-xl p-6 md:p-8 hover-lift"
                >
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center"
                      style={{ color: item.color }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-2xl glow-subtle"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">
                        <span className="gradient-text">{item.degree}</span>
                      </h3>
                      <div className="flex flex-wrap gap-4 text-[var(--text-secondary)] text-sm">
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faUniversity} />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-6">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-[var(--text)] flex items-center gap-2">
                        <FontAwesomeIcon 
                          icon={faTrophy} 
                          style={{ color: item.color }}
                        />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
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
                              style={{ backgroundColor: item.color }}
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-[var(--text)] flex items-center gap-2">
                        <FontAwesomeIcon 
                          icon={faBook} 
                          style={{ color: item.color }}
                        />
                        Key Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-sm rounded-full glass-effect"
                            style={{ color: item.color }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 