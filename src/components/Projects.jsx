import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 200
  });

  return (
    <div ref={ref} className={`project-card ${inView ? 'in-view' : ''}`}>
      <div className="project-image">
        <i className={project.icon} style={{ fontSize: '4rem', color: 'white' }}></i>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Code
          </a>
          {project.live && (
            <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'ShoeVerse - Emphasizes focus on footwear',
      description: 'Complete shoes e-commerce platform with SuperAdmin, Seller, and User roles. Features include JWT authentication, KYC verification system, Razorpay payment gateway, product management, and order tracking.',
      technologies: ['MERN Stack', 'JWT Auth', 'Razorpay', 'KYC System', 'Redux', 'Material UI'],
      github: "https://github.com/Adarshpandey80/Shoe-Store-Mern",
      // live: "", 
      icon: 'fas fa-shopping-cart'
    },
    {
      title: 'TaskFlow Pro - Management System',
      description: 'Advanced task management system with role-based access control. Features include JWT authentication, password reset via NodeMailer, real-time notifications, task assignment, progress tracking, and reporting dashboard.',
      technologies: ['MERN Stack', 'JWT Auth', 'NodeMailer', 'Socket.io', 'Chart.js', 'Bootstrap'],
      github: "https://github.com/Adarshpandey80/Task_Management",
      // live: "",
      icon: 'fas fa-tasks'
    },
    {
      title: "Traveling Website",
      description: "Implemented user login and registration with Firebase Authentication, allowing users to save their favorite destinations and trips. A comprehensive travel platform built with MERN stack for seamless travel planning and booking experiences.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "MongoosePassword Auth", "REST API"],
      icon: "fas fa-plane",
      github: "https://github.com/Adarshpandey80/Wonderlust",
      live: "https://wonderlust-ncbd.onrender.com"
    },
    {
      title: "Worker Finder",
      description: "Worker Finder is a simple web platform that connects users with local skilled workers like plumbers, carpenters, and electricians. Any registered user can act as both a service seeker and service provider (worker).",
      technologies: ["Node.js", "Express.js", "MongoDB", "MongoosePassword Auth", "REST API", "Bootstrap"],
      icon: "fas fa-briefcase",
      github: "https://github.com/Adarshpandey80/WorkerFinder",
      live: "https://worker-finder.onrender.com"
    },
    {
      title: 'Learning-Zone - Professional learning environment',
      description: 'Interactive learning platform where users can purchase courses, watch video lectures, track progress, take quizzes, and earn certificates. Built with React and Tailwind CSS.',
      technologies: ['React.js', 'Tailwind CSS', 'Context API', 'React Router', 'Video.js', 'Chart.js'],
      github: 'https://github.com/Adarshpandey80/TechRoot-LMS',
      live: 'https://tech-root-lms.vercel.app/',
      icon: 'fas fa-graduation-cap'
    },
    {
      title: "Azautomobile E-commerce",
      description: "Azautomobile is a fully responsive eCommerce website that allows users to browse and purchase vehicles including cars, bikes, and cycles. The platform features a clean UI with intuitive navigation and product listings.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage", "Responsive Design"],
      icon: "fas fa-car",
      github: "https://github.com/Adarshpandey80/AzAutomobils",
      live: "https://add-to-card-az-automobile-dzrr.vercel.app/"
    },
    {
      title: "Weather Forecast App",
      description: "Developed a React-based weather application integrating with OpenWeatherMap API to display real-time and forecasted weather data for global locations with interactive charts and location-based services.",
      technologies: ["React", "OpenWeather API", "CSS3", "Responsive Design"],
      icon: "fas fa-cloud-sun",
      github: "https://github.com/Adarshpandey80/Weather-Forecast",
      live: "https://weather-forecast-xh9v.vercel.app/"
    },
    {
      title: "Simon Saga Game",
      description: "Contributed to the design and development of Simon Saga, a puzzle-based adventure game. Utilized modern web technologies to create an engaging and interactive gaming experience with smooth animations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      icon: "fas fa-gamepad",
      github: "https://github.com/Adarshpandey80/SimonSage-Game",
      live: "https://simon-sage-game.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;