import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Server,
  Code,
  Layout,
  Terminal
} from 'lucide-react';

/* ------------------ Motion Variants ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const hoverLift = {
  whileHover: {
    y: -6,
    scale: 1.01,
    transition: { type: 'spring', stiffness: 300 }
  }
};

/* ------------------ Data ------------------ */

const projects = [
  {
    title: "Fashion-Fleet E-Commerce",
    desc: "Scalable MERN e-commerce platform with Redux state management, JWT authentication, and admin dashboard.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    link: "#"
  },
  {
    title: "Travel-Story",
    desc: "A social travel journaling platform with full CRUD, cloud database, and responsive UI.",
    tech: ["MERN Stack", "MongoDB Atlas", "Vercel"],
    github: "#",
    link: "#"
  },
  {
    title: "Restaurant Reservation System",
    desc: "Secure internal booking system built during internship, focusing on REST APIs and data validation.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "#",
    link: "#"
  }
];

const skills = [
  {
    icon: <Layout className="text-blue-400" />,
    title: "Frontend",
    items: "React, Redux, Tailwind CSS"
  },
  {
    icon: <Server className="text-purple-400" />,
    title: "Backend",
    items: "Node.js, Express.js, REST APIs"
  },
  {
    icon: <Terminal className="text-green-400" />,
    title: "DevOps",
    items: "Vercel, Git, Linux, CI/CD"
  },
  {
    icon: <Code className="text-yellow-400" />,
    title: "Databases",
    items: "MongoDB, MySQL"
  }
];

/* ------------------ Component ------------------ */

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 selection:bg-blue-500/30">

      {/* Background Effects */}
      <div className="fixed -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 -right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* ------------------ NAV ------------------ */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b1120]/70 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dev.Portfolio
          </span>
          <div className="flex gap-6 text-sm font-medium">
            {["About", "Projects", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-blue-400 transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ------------------ HERO ------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-blue-400 font-mono mb-4">
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Your Name<span className="text-blue-400">.</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            Full-Stack Web Developer & DevOps Enthusiast
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
            I build scalable, performant web applications with clean architecture,
            modern UI, and production-ready DevOps workflows.
          </p>

          <div className="flex justify-center gap-6">
            <motion.a
              {...hoverLift}
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/20"
            >
              View Projects
            </motion.a>

            <motion.a
              {...hoverLift}
              href="/resume.pdf"
              className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ------------------ SKILLS ------------------ */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              {...hoverLift}
              className="p-6 bg-slate-800/40 border border-slate-700 rounded-2xl backdrop-blur"
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-white font-semibold mb-2">{skill.title}</h4>
              <p className="text-sm text-slate-400">{skill.items}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ------------------ PROJECTS ------------------ */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              {...hoverLift}
              className="relative bg-slate-800/30 border border-slate-700 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative p-8">
                <div className="flex justify-between mb-6">
                  <Code className="text-blue-400" />
                  <div className="flex gap-4">
                    <a href={project.github}><Github className="hover:text-blue-400" /></a>
                    <a href={project.link}><ExternalLink className="hover:text-blue-400" /></a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-slate-900 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ------------------ CONTACT ------------------ */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-32 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Open to junior developer & DevOps roles.  
            Let’s build something impactful together.
          </p>

          <motion.a
            {...hoverLift}
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10"
          >
            <Mail size={20} /> Say Hello
          </motion.a>

          <div className="flex justify-center gap-10 mt-16 text-slate-500">
            <Linkedin className="hover:text-white transition cursor-pointer" />
            <Github className="hover:text-white transition cursor-pointer" />
          </div>
        </motion.div>
      </section>

      <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-900">
        Built with React, Tailwind CSS & Framer Motion. Hosted on Vercel.
      </footer>
    </div>
  );
};

export default Portfolio;
