export const About = () => {
  const frontendSkills = [
    "ReactJs",
    "JavaScript",
    "TypeScript",
    "TailwindCSS"
  ];

  const backendSkills = ["Java", "AWS","Docker","PostgreSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((frontend_skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {frontend_skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((backend_skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {backend_skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> PG-DAC (Post Graduate Diploma in Advanced Computing) </strong> - IET (CDAC ATC),Pune.
                  (March 2022 - November 2022)
                </li>
                <li>
                  <strong> B.E. in Computer Engineering </strong> - Dr. D.Y.Patil Institute of Technology,Pune.
                  (2013-2017)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer at Heaptrace Technology (Dec 2022 - Present){" "}
                  </h4>
                   <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                         Developed and maintained ReactJS and React Native applications,
                         improving UI/UX and performance.
                        </li>
                        <li>
                        Optimized web applications, reducing load time by 30%.
                        </li>
                        <li>
                        Integrated REST APIs for seamless backend communication.
                        </li>
                        <li>
                        Implemented Redux for state management, ensuring data consistency.
                        </li>
                        <li>
                        Collaborated with designers and backend developers to enhance user
                        experience.
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
