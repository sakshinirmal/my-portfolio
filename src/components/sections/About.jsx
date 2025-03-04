import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "C++",
    "JavaScript",
    "TypeScript",
    "GraphQL",
    "RESTful APIs",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Authentication",
    "Docker",
    "AWS",
    "Firebase",
    "Git",
    "Next.js",
    "Angular.js",
    "HTML5",
    "Tailwind CSS",
  ];

  // const backendSkills = ["Node.js", "Express.js", "AWS", "MongoDB", "GraphQL", "Authentication"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hi! I'm Sakshi Nirmal, a passionate Full Stack Developer with
              experience in building scalable web applications using React,
              Node.js, and MongoDB. I've worked with startups and teams to
              develop seamless digital solutions, enhancing user experiences and
              optimizing workflows. Whether it's crafting interactive UIs,
              securing APIs, or streamlining development processes, I bring
              technical expertise and a problem-solving mindset to every
              project. Let’s build something amazing together!{" "}
            </p>

            <div className="flex">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 cursor-pointer text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 cursor-pointer text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science </strong>
                  <p>{" "}(2020-2024)</p>
                  <p>
                  St. Vincent Pallotti College of Engineering and Technology,
                  Nagpur 
                  </p>
                </li>
                <li>
                  <strong>Relevant Coursework:</strong>
                  <ul className="list-disc list-inside ml-5 space-y-1">
                    <li>Data Structures</li>
                    <li>Web Development</li>
                    <li>Deep Learning</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Jr. Full Stack Developer at Tenet K D Platform (May 2024 -
                    Present){" "}
                  </h4>
                  <p>
                    Built an IoT-powered smart home automation web service with
                    React, Node.js, and MongoDB for seamless control and
                    connectivity.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at IgnAite,New Jersey, US (Jan 2024 - April 2024){" "}
                  </h4>
                  <p>
                    Leading frontend development of SPI app using React.js,
                    focusing on UI/UX, authentication, and investor engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
