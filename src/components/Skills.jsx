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
      title: "Frontend Development",
      subtitle: "Modern Web Technologies",
      icon: "fas fa-code",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      subtitle: "Server & Database",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "JWT Authentication", level: 70 }
      ]
    },
    {
      title: "Programming Languages",
      subtitle: "Core Development",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 70 },
        { name: "Java", level: 65 },
        { name: "C++", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      subtitle: "Development Ecosystem",
      icon: "fas fa-tools",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 },
        { name: "MongoDB Atlas", level: 70 },
        { name: "Heroku", level: 65 }
      ]
    },
    {
      title: "Soft Skills",
      subtitle: "Professional Abilities",
      icon: "fas fa-users",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 80 },
        { name: "Communication", level: 75 },
        { name: "Time Management", level: 80 }
      ]
    },
    {
      title: "Learning & Growth",
      subtitle: "Continuous Improvement",
      icon: "fas fa-graduation-cap",
      skills: [
        { name: "Quick Learning", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Creativity", level: 80 },
        { name: "Attention to Detail", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
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