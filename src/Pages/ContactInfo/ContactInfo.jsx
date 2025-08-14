import { useRef } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactInfo = () => {
  const form = useRef();

  const handleEmailForm = async (e) => {
    e.preventDefault();
    console.log(form.current);

    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_service_key,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Message Sent!",
              text: "Your email has been successfully sent.",
              confirmButtonColor: "#10b981",
            });

            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tusharsu97@gmail.com",
      href: "mailto:tusharsu97@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 194371573",
      href: "tel:+880194371573",
      description: "Call me directly",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+880 194371573",
      href: "https://wa.me/880194371573",
      description: "Message me on WhatsApp",
    },
  ];

  const StatusMessage = ({ status }) => {
    if (!status) return null;

    const isSuccess = status === "success";
    const Icon = isSuccess ? CheckCircle : AlertCircle;
    const bgColor = isSuccess
      ? "bg-green-500/20 border-green-500/50"
      : "bg-red-500/20 border-red-500/50";
    const textColor = isSuccess ? "text-green-400" : "text-red-400";
    const message = isSuccess
      ? "Message sent successfully!"
      : "Something went wrong. Please try again.";

    return (
      <div
        className={`border rounded-lg p-3 flex items-center gap-2 ${bgColor} ${textColor} animate-in slide-in-from-top duration-300`}
      >
        <Icon size={16} />
        <span className="text-sm font-medium">{message}</span>
      </div>
    );
  };

  return (
    <section id="contact" className="mb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Send me a message
            and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, creative ideas,
                or partnerships. Whether you have a question or just want to say
                hi, I'll get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="group">
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 group-hover:transform group-hover:scale-105"
                    >
                      <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <Icon className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {method.label}
                        </h4>
                        <p className="text-blue-400 font-medium">
                          {method.value}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            {/* <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-400" size={18} />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="text-blue-400" size={18} />
                <span>Available Mon - Fri, 9AM - 6PM (GMT+6)</span>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Send Message
              </h3>
              <p className="text-gray-300">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>

            <form ref={form} onSubmit={handleEmailForm} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  <User size={16} className="inline mr-2" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  <Mail size={16} className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
              hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:gap-3"
              >
                Send Message
              </button>
            </form>

            {/* Privacy Note */}
            <p className="text-gray-400 text-sm text-center mt-6">
              Your information is safe with me. I respect your privacy and will
              never share your details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
