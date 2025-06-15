
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Legal Domain</h3>
              <p className="text-gray-400 mb-4">
                Case and Document management (UK)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJs", "Java", "Lambda", "Docker","Postgres"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                 <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                        Played a key role in the front-end development, ensuring UI design and implementation
                        met project requirements.
                        </li>
                        <li>
                        Collaborated with backend teams to integrate RESTful APIs and enhance app
                        functionalities.
                        </li>
                        <li>
                        Implemented DOM manipulation and JavaScript functionalities to enhance user
                        interaction and workflow efficiency.
                        </li>
                        <li>
                        Ensured high performance and scalability using AWS ECS, Lambda, and CodePipeline.
                        </li>
                    </ul>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">ETL</h3>
              <p className="text-gray-400 mb-4">
                Enterprise Data Planning
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Apache Airflow", "Google Cloud Platform (GCP)", "Asana"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                        Migrated enterprise data from on-premise systems to Google Cloud Platform (GCP) using
                        BigQuery, Cloud Storage, and Cloud SQL.
                        </li>
                        <li>
                        Designed and implemented automated ETL workflows using Apache Airflow DAGs and
                        Cloud Dataflow.
                        </li>
                        <li>
                        Conducted extensive data validation and testing to maintain data integrity. 
                        </li>
                        <li>
                        Streamlined task coordination and collaboration using Asana, delivering a robust and
                        secure data infrastructure.
                        </li>
                    </ul>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};
