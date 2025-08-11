import SkillCard from "./SkillCard";

const Skills = () => {
  const frontend = [
    { name: "HTML5", image: "https://i.ibb.co.com/ymq1zkSZ/html.png" },
    { name: "CSS3", image: "https://i.ibb.co.com/jvsnTbSC/css-3.png" },
    { name: "CSS3", image: "https://i.ibb.co.com/NnsnyChW/bootstrap.png" },
    {
      name: "Tailwind",
      image: "https://i.ibb.co.com/HTvxgNPd/tailwind.png",
    },
    { name: "React.JS", image: "https://i.ibb.co.com/FkXqHxKc/react.png" },
    { name: "Next.JS", image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png" },
    { name: "HTML5", image: "https://i.ibb.co.com/ymq1zkSZ/html.png" },
    { name: "CSS3", image: "https://i.ibb.co.com/jvsnTbSC/css-3.png" },
    { name: "CSS3", image: "https://i.ibb.co.com/NnsnyChW/bootstrap.png" },
    {
      name: "Tailwind",
      image: "https://i.ibb.co.com/HTvxgNPd/tailwind.png",
    },
    { name: "React.JS", image: "https://i.ibb.co.com/FkXqHxKc/react.png" },
    { name: "Next.JS", image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png" },
    { name: "HTML5", image: "https://i.ibb.co.com/ymq1zkSZ/html.png" },
    { name: "CSS3", image: "https://i.ibb.co.com/jvsnTbSC/css-3.png" },
    { name: "CSS3", image: "https://i.ibb.co.com/NnsnyChW/bootstrap.png" },
    {
      name: "Tailwind",
      image: "https://i.ibb.co.com/HTvxgNPd/tailwind.png",
    },
    { name: "React.JS", image: "https://i.ibb.co.com/FkXqHxKc/react.png" },
    { name: "Next.JS", image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png" },
  ];

  const backend = [
    { name: "Node.Js", image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png" },
    { name: "Express.Js", image: "https://i.ibb.co.com/8QJBMHm/express.png" },
    { name: "MongoDB", image: "https://i.ibb.co.com/DfW069xX/mongodb.png" },
    { name: "Firebase", image: "https://i.ibb.co.com/chqRTPYd/firebase.png" },
    { name: "Git", image: "https://i.ibb.co.com/ynRpYFrc/git.png" },
    { name: "Githud", image: "https://i.ibb.co.com/GvzCt3kk/github.png" },
    {
      name: "Netlify",
      image: "https://i.ibb.co.com/hw9q6C5/netlify-removebg-preview.png",
    },
    { name: "Postman", image: "https://i.ibb.co.com/KjJyGDrR/postman.png" },
    { name: "Vercel", image: "https://i.ibb.co.com/N6nR2pNP/vercel.png" },
    { name: "Node.Js", image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png" },
    { name: "Express.Js", image: "https://i.ibb.co.com/8QJBMHm/express.png" },
    { name: "MongoDB", image: "https://i.ibb.co.com/DfW069xX/mongodb.png" },
    { name: "Firebase", image: "https://i.ibb.co.com/chqRTPYd/firebase.png" },
    { name: "Git", image: "https://i.ibb.co.com/ynRpYFrc/git.png" },
    { name: "Githud", image: "https://i.ibb.co.com/GvzCt3kk/github.png" },
    {
      name: "Netlify",
      image: "https://i.ibb.co.com/hw9q6C5/netlify-removebg-preview.png",
    },
    { name: "Postman", image: "https://i.ibb.co.com/KjJyGDrR/postman.png" },
    { name: "Vercel", image: "https://i.ibb.co.com/N6nR2pNP/vercel.png" },
  ];

  return (
    <section id="skills" className="py-16 text-base-content">
      <div>
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Skills
        </h2>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl font-bold">Frontend</h1>
          <SkillCard frontend={frontend} />
          <h1 className="text-white text-2xl font-bold">
            Backend & Deployment
          </h1>
          <SkillCard frontend={backend} direction={"right"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
