import { useEffect } from "react";

const useDynamicTitle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", title: "Md. Tushar Hossain" },
        { id: "about", title: "About Me" },
        { id: "skills", title: "Skills" },
        { id: "projects", title: "Projects" },
        { id: "contact", title: "Contact" },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            document.title = sec.title;
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useDynamicTitle;
