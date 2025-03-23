import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faNode,
  faPython,
  faGit,
  faDocker,
  faAws,
  faVuejs,
  faAngular,
  faPhp,
  faJava,
  faBootstrap,
  faSass,
  faWordpress,
  faLinux,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase,
  faServer,
  faCode,
  faGlobe,
  faTools,
  faCog,
  faLaptopCode,
  faMobile,
  faCloud,
  faLock,
  faBrain,
  faNetworkWired,
  faTerminal,
  faFileCode,
  faCodeBranch,
  faLayerGroup,
  faRocket,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faLaptopCode,
      skills: [
        { name: "React.js", icon: faReact, level: 95, color: "#61DAFB" },
        { name: "JavaScript", icon: faJs, level: 90, color: "#F7DF1E" },
        { name: "HTML5", icon: faHtml5, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: faCss3, level: 90, color: "#1572B6" },
        { name: "TypeScript", icon: faCode, level: 85, color: "#3178C6" },
        { name: "Tailwind CSS", icon: faCode, level: 90, color: "#38B2AC" },
        { name: "Redux", icon: faLayerGroup, level: 85, color: "#764ABC" },
        { name: "ShadCN", icon: faCode, level: 80, color: "#000000" },
        { name: "jQuery", icon: faJs, level: 80, color: "#0769AD" },
      ]
    },
    {
      title: "Backend Development",
      icon: faServer,
      skills: [
        { name: "Node.js", icon: faNode, level: 90, color: "#339933" },
        { name: "Express.js", icon: faNode, level: 85, color: "#000000" },
        { name: "MongoDB", icon: faDatabase, level: 85, color: "#47A248" },
        { name: "GraphQL", icon: faCode, level: 80, color: "#E535AB" },
        { name: "RESTful APIs", icon: faGlobe, level: 90, color: "#FF6C37" },
        { name: "JWT", icon: faLock, level: 85, color: "#000000" },
        { name: "OAuth2", icon: faLock, level: 80, color: "#EB5424" },
      ]
    },
    {
      title: "UI/UX & Other Skills",
      icon: faMobile,
      skills: [
        { name: "Responsive Design", icon: faMobile, level: 95, color: "#38B2AC" },
        { name: "Motion Effects", icon: faCode, level: 85, color: "#5A0FC8" },
        { name: "Prototyping", icon: faFileCode, level: 80, color: "#FF6B6B" },
        { name: "Micro Frontend", icon: faLayerGroup, level: 85, color: "#FF4785" },
        { name: "SSR/SSG", icon: faRocket, level: 80, color: "#000000" },
        { name: "C++", icon: faCode, level: 75, color: "#00599C" },
        { name: "Custom Hooks", icon: faReact, level: 90, color: "#61DAFB" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="gradient-text">Skills & Technologies</span>
          <motion.span
            className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 md:p-8 hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-[var(--secondary)] text-2xl glow-subtle"
                  />
                </div>
                <h3 className="text-2xl font-semibold gradient-text">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon 
                            icon={skill.icon} 
                            className="glow-subtle"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-[var(--text)] font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span 
                        className="text-sm font-medium"
                        style={{ color: skill.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--surface)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[var(--secondary)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 