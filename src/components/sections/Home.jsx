import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faMobileScreen, faRocket } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const services = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Custom websites & web applications built with modern tech stack",
      price: "Starting at $100",
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces with punk aesthetics",
      price: "Starting at $80",
    },
    {
      icon: faMobileScreen,
      title: "Responsive Design",
      description: "Mobile-first approach for seamless experience across devices",
      price: "Starting at $110",
    },
    {
      icon: faRocket,
      title: "Performance Optimization",
      description: "Speed up your existing applications for better user experience",
      price: "Starting at $90",
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Subtle background elements */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[1000px] h-[1000px] bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-full blur-3xl"
        />

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--secondary)]/20 to-transparent"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center z-10 px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative"
            >
              <span className=" text-6xl gradient-text relative z-10">
               Hi, I'm Sakshi Nirmal
              </span>
              <motion.span
                className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-[var(--text-secondary)] font-light relative overflow-hidden"
          >
            <span className="text-shadow-subtle">
               Full-Stack Developer · UI Designer · Freelancer
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="subtle-border glass-effect px-8 py-4 rounded-lg text-lg font-medium text-white hover-lift"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="subtle-border glass-effect px-8 py-4 rounded-lg text-lg font-medium text-[var(--secondary)] hover-lift"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 relative"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            <span className="gradient-text">
              Services
            </span>
            <motion.span
              className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card p-6 rounded-xl hover-lift float-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[var(--secondary)] text-3xl mb-4">
                  <FontAwesomeIcon icon={service.icon} className="glow-subtle" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text)]">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 text-sm">
                  {service.description}
                </p>
                <p className="gradient-text font-medium">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
