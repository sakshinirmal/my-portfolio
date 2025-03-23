import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faLocationDot, 
  faPaperPlane 
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Thank you! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Oops! Something went wrong. Please try again.",
        });
        setLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "nirmalsakshi205@gmail.com",
      link: "mailto:nirmalsakshi205@gmail.com",
    },
    {
      icon: faLocationDot,
      label: "Location",
      value: "Pune, India",
    },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      label: "GitHub",
      link: "https://github.com/sakshinirmal",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sakshinirmal",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="gradient-text">Get in Touch</span>
          <motion.span
            className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 blur-2xl rounded-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-[var(--surface)] border border-[var(--primary)]/10 rounded-lg px-4 py-3 text-[var(--text)] transition focus:outline-none focus:border-[var(--secondary)]/50 focus:bg-[var(--primary)]/5"
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-[var(--surface)] border border-[var(--primary)]/10 rounded-lg px-4 py-3 text-[var(--text)] transition focus:outline-none focus:border-[var(--secondary)]/50 focus:bg-[var(--primary)]/5"
                  placeholder="your@email.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-[var(--surface)] border border-[var(--primary)]/10 rounded-lg px-4 py-3 text-[var(--text)] transition focus:outline-none focus:border-[var(--secondary)]/50 focus:bg-[var(--primary)]/5"
                  placeholder="Your Message"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="subtle-border glass-effect w-full py-3 px-6 rounded-lg text-lg font-medium text-[var(--text)] hover-lift flex items-center justify-center gap-2"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                {!loading && <FontAwesomeIcon icon={faPaperPlane} className="text-[var(--secondary)]" />}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-xl p-6 md:p-8">
              {/* <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3> */}
              <div className="space-y-4">
                <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! If you don't wanna wait, connect me with below contacts I'm active on Social Platforms and maybe over voice call too!</p>
                {/* {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={info.icon}
                        className="text-[var(--secondary)] text-xl glow-subtle"
                      />
                    </div>
                    <div>
                      <p className="text-[var(--text-secondary)] text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-[var(--text)] hover:text-[var(--secondary)] transition"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text)]">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))} */}
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Social Links</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover-lift group"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-[var(--text-secondary)] text-xl group-hover:text-[var(--secondary)] transition glow-subtle"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};