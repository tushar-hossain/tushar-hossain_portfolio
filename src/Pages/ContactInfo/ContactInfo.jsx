import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactInfo = () => {
  const handelEmailForm = (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your email has been successfully sent.",
        confirmButtonColor: "#10b981",
      });

      e.target.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 text-base-content">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Contact Information
        </h2>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-700 text-2xl" />
              <a
                href="mailto:tusharsu97@gmail.com"
                className="text-lg text-gray-300 hover:text-green-700"
              >
                tusharsu97@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-green-700 text-2xl" />
              <a
                href="tel:+880194371573"
                className="text-lg text-gray-300 hover:text-green-700"
              >
                +880 194371573
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-700 text-2xl" />
              <a
                href="https://wa.me/880194371573"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-green-700"
              >
                +880 194371573
              </a>
            </div>
          </div>
          {/* form */}
          <div className="p-8 mt-5 md:mt-0 bg-[#ffffff0c] rounded-lg shadow-2xl shadow-blue-500/20">
            <form onSubmit={handelEmailForm} className=" space-y-2">
              <div>
                <label htmlFor="name" className="text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input w-full bg-[#ffffff0c] text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input w-full bg-[#ffffff0c] text-white"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  className="textarea resize-none w-full bg-[#ffffff0c]  text-white"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary bg-green-700 w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
