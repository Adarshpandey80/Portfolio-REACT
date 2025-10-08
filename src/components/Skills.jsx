import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const SkillCategory = ({ category, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 200
  });

  const progressRefs = useRef([]);

  useEffect(() => {
    if (inView) {
      progressRefs.current.forEach((progress, idx) => {
        if (progress) {
          setTimeout(() => {
            progress.style.width = `${category.skills[idx].level}%`;
          }, idx * 200);
        }
      });
    }
  }, [inView, category.skills]);

  return (
    <div ref={ref} className={`skill-category ${inView ? 'in-view' : ''}`}>
      <div className="skill-header">
        <div className="skill-icon">
          <i className={category.icon}></i>
        </div>
        <div>
          <h3 className="skill-title">{category.title}</h3>
          <p className="skill-subtitle">{category.subtitle}</p>
        </div>
      </div>
      
      <div className="skill-list">
        {category.technologies.map((tech, idx) => (
          <span key={idx} className="skill-item">
            <i className={tech.icon}></i> {tech.name}
          </span>
        ))}
      </div>
      
      <div className="skill-levels">
        {category.skills.map((skill, idx) => (
          <div key={skill.name} className="skill-level">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                ref={el => progressRefs.current[idx] = el}
                className="skill-progress"
                style={{ width: '0%' }}
                data-width={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      subtitle: "Core programming languages",
      icon: "fas fa-code",
      technologies: [
        { name: "C++", icon: "fab fa-cuttlefish" },
        { name: "JavaScript", icon: "fab fa-js-square" }
      ],
      skills: [
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Front-End",
      subtitle: "User interface technologies",
      icon: "fas fa-paint-brush",
      technologies: [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React.js", icon: "fab fa-react" },
        { name: "Redux Toolkit", icon: "fas fa-cube" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Material UI", icon: "fas fa-palette" },
        { name: "Tailwind CSS", icon: "fas fa-wind" }
      ],
      skills: [
        { name: "React.js", level: 88 },
        { name: "CSS Frameworks", level: 82 }
      ]
    },
    {
      title: "Back-End",
      subtitle: "Server-side technologies",
      icon: "fas fa-server",
      technologies: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-bolt" }
      ],
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 }
      ]
    },
    {
      title: "Database",
      subtitle: "Data storage technologies",
      icon: "fas fa-database",
      technologies: [
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "SQL", icon: "fas fa-database" }
      ],
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Developer Tools",
      subtitle: "Development environment",
      icon: "fas fa-tools",
      technologies: [
        { name: "GitHub", icon: "fab fa-github" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Jira", icon: "fab fa-jira" }
      ],
      skills: [
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Methodologies",
      subtitle: "Development approaches",
      icon: "fas fa-project-diagram",
      technologies: [
        { name: "Agile", icon: "fas fa-running" },
        { name: "Scrum", icon: "fas fa-tasks" }
      ],
      skills: [
        { name: "Agile", level: 85 },
        { name: "Scrum", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;