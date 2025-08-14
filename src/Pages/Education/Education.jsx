import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institute: "Sonargaon University",
      location: "147/I, Green Road, Panthapath, Tejgaon, Dhaka",
      year: "— Completed",
    },
    {
      degree: "Diploma in Engineering (Computer Technology)",
      institute: "Cox's Bazar Polytechnic Institute",
      location: "Link Road, Zhilanja, Cox's Bazar",
      year: "— Completed",
    },
  ];

  return (
    <section id="education" className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
          Educational Qualification
        </h2>

        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 font-medium mb-1">
                    {edu.institute}
                  </p>
                  <p className="text-sm text-gray-400">
                    {edu.location} {edu.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
