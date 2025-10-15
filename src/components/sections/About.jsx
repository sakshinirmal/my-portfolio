import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faLightbulb, 
  faRocket, 
  faUsers,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

// Import profile photo
import profilePhoto from "../../assets/photo.jpg";

export const About = () => {
  const highlights = [
    {
      icon: faCode,
      title: "Full Stack Developer",
      description: "Passionate about creating seamless web applications with modern technologies",
    },
    {
      icon: faLightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding innovative solutions",
    },
    {
      icon: faRocket,
      title: "Fast Learner",
      description: "Quick to adapt and master new technologies and frameworks",
    },
    {
      icon: faUsers,
      title: "Team Player",
      description: "Excellent communicator and collaborative team member",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="gradient-text">About Me</span>
          <motion.span
            className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--surface)] shadow-lg">
              <img
                src={profilePhoto}
                alt="Sakshi Nirmal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Hello, I'm Sakshi!
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  I'm a passionate Full Stack Developer based in Pune, India, with a strong
                  foundation in modern web technologies and a keen eye for creating
                  beautiful, functional applications.
                </p>
                <p>
                  With expertise in both frontend and backend development, I specialize in
                  building scalable web applications using React, Node.js, and various
                  modern frameworks.
                </p>
                <p>
                  I'm constantly learning and exploring new technologies to stay at the
                  forefront of web development.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-[var(--secondary)] mt-6 group"
              >
                Let's work together
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={highlight.icon}
                    className="text-[var(--secondary)] text-2xl glow-subtle"
                  />
                </div>
                <h3 className="text-lg font-semibold gradient-text">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)]">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
