import { useInView } from 'react-intersection-observer';
import '../styles/Internships.css';
const InternshipCard = ({ internship, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 200
  });

  return (
    <div ref={ref} className={`internship-card ${inView ? 'in-view' : ''}`}>
      <div className="internship-icon">
        <i className="fas fa-briefcase"></i>
      </div>
      <div className="internship-content">
        <h3 className="internship-title">{internship.company}</h3>
        <p className="internship-role">{internship.role}</p>
        <p className="internship-duration">{internship.duration}</p>
        <ul className="internship-details">
          {internship.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Internships = () => {
  const internships = [
    {
      company: "Code Clause",
      role: "Web Development Intern",
      duration: "June 2023 - July 2023",
      details: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Implemented front-end features and user interfaces",
        "Collaborated with team members on project development"
      ]
    },
    {
      company: "Bharat Intern",
      role: "Web Development Intern",
      duration: "July 2023 - August 2023",
      details: [
        "Built full-stack web applications using MERN stack",
        "Worked on RESTful API development and integration",
        "Implemented authentication and authorization features"
      ]
    }
  ];

  return (
    <section id="internships">
      <div className="container">
        <h2 className="section-title">Internships</h2>
        <div className="internships-container">
          {internships.map((internship, index) => (
            <InternshipCard 
              key={internship.company}
              internship={internship}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;