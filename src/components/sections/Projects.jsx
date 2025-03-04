import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">HRMS</h3>
              <p className="text-gray-400 mb-4">
              An HRMS is a system for managing employees, roles, attendance, payroll, and performance, built with React, Node.js, Express, Vite, ShadCN, and MongoDB.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Tailwind CSS", "Node.js", "MongoDB", "ShadCN", "Authentication", "Express.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-pink-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-pink-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Landing Page</h3>
              <p className="text-gray-400 mb-4">
                Developed an interactive landing page with Shery.js, featuring
                cursor animations and smooth scrolling for an engaging UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "HTML5", "CSS3", "Shery.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://sakshinirmal.github.io/LandingPage/"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Text to Emoji</h3>
              <p className="text-gray-400 mb-4">
                Built a JavaScript-based Text to Emoji encryption system,
                enhancing messaging security with a fun twist.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "CSS", "HTML"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-pink-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-pink-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://sakshinirmal.github.io/TextEmoji/"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
