import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institute: "Sonargaon University",
      location: "Green Road, Dhaka",
      year: "— Completed",
    },
    {
      degree: "Diploma in Engineering (Computer Technology)",
      institute: "Cox's Bazar Polytechnic Institute",
      location: "Cox's Bazar",
      year: "— Completed",
    },
  ];

  return (
    <section id="education" className="py-16 px-4 md:px-8  text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Educational Qualification
        </h2>

        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="space-y-6"
        >
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-3xl text-green-700 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600">{edu.institute}</p>
                  <p className="text-sm text-gray-500">
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
