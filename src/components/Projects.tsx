'use client';

import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'ColorStack at KSU',
    description: 'Using React.js to develop a website for my college\'s ColorStack Chapter to provide easy access to resources and information.',
    image: 'images/ColorstackAtKSU.jpg',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'MongoDB'],
    link: 'https://github.com/colorstacksu/Betasite',
    demo: 'https://colorstacksu.vercel.app/',
  },
  {
    title: 'ManageMe.io',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'images/ManageMeIO.png',
    technologies: ['ASP.NET', 'C#', 'HTML/CSS', 'Entity Framework', 'MongoDB'],
    link: 'https://github.com/YetronLives/SPM-project-copy',
    demo: 'https://spm-project-copy.onrender.com/',
  },
//   {
//     title: 'AI Image Generator',
//     description: 'An AI-powered image generation tool that creates unique artwork based on text prompts.',
//     image: '/projects/aigenerator.jpg',
//     technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
//     link: 'https://github.com/yourusername/ai-generator',
//     demo: 'https://ai-generator-demo.com',
//   },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.project}>
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 