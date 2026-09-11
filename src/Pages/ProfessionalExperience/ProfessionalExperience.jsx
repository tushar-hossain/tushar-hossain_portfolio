import { BriefcaseBusiness } from "lucide-react";

const ProfessionalExperience = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="py-16 mb-24 bg-slate-900 text-white"
      id="experience"
      //   className="py-16 mb-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Professional Experience
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-400">
            My journey from software development intern to Junior Software
            Developer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-20">
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-6">
              <div className="text-center md:text-right">
                <h3 className="text-lg font-bold text-white">
                  Junior Software Developer
                </h3>

                <a
                  href="https://edutechs.app/welcome"
                  target="_blank"
                  className="mt-1 text-sm font-medium text-blue-400 cursor-pointer"
                >
                  Edutechs Limited
                </a>

                <p className="mt-2 text-[9px] tracking-[0.2em] text-white">
                  JANUARY 2026 – PRESENT
                </p>
              </div>

              <div className="relative hidden md:flex justify-center">
                <div className="relative z-10 w-10 h-10 rounded-full border border-white/10 bg-blue-500/10 flex items-center justify-center">
                  <BriefcaseBusiness size={17} className=" text-blue-400" />
                </div>
              </div>

              <div className="text-left">
                <ul className="space-y-2">
                  {[
                    "Developed enterprise web applications using React.js and TypeScript.",
                    "Built reusable and responsive UI components for complex business workflows.",
                    "Implemented Firebase Authentication and Realtime Database features.",
                    "Integrated REST APIs and connected frontend interfaces with backend services.",
                    "Worked on enterprise modules including HRM, invoicing, inventory, reservations, billing, and document management.",
                    "Debugged application issues and contributed to performance and user experience improvements.",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="relative pl-4 text-sm leading-6 text-gray-300"
                    >
                      <span className="absolute left-0 top-3 w-1 h-1 rounded-full bg-blue-500/80" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-6">
              <div className="text-left md:text-right md:order-1">
                <ul className="space-y-2">
                  {[
                    "Gained hands-on experience in professional software development workflows.",
                    "Contributed to frontend development and reusable UI components.",
                    "Worked with modern web development tools and technologies in a team environment.",
                    "Collaborated with developers and team members to understand and implement project requirements.",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="relative pr-4 text-sm leading-6 text-gray-300"
                    >
                      <span className="absolute right-0 top-3 w-1 h-1 rounded-full bg-blue-500/80" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative hidden md:flex justify-center md:order-2">
                <div className="relative z-10 w-10 h-10 rounded-full border border-white/10 bg-blue-500/10 flex items-center justify-center">
                  <BriefcaseBusiness
                    size={17}
                    className="bg-blue-500/10 text-blue-400"
                  />
                </div>
              </div>

              <div className="text-center md:text-left md:order-3">
                <h3 className="text-lg font-bold text-white">
                  Software Developer Intern
                </h3>

                <a
                  href="https://edutechs.app/welcome"
                  target="_blank"
                  className="mt-1 text-sm font-medium text-blue-400 cursor-pointer"
                >
                  Edutechs Limited
                </a>

                <p className="mt-2 text-[9px] tracking-[0.2em] text-white">
                  AUGUST 2025 – JANUARY 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
