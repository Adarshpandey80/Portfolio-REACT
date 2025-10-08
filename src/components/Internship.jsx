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
        <i className={internship.icon}></i>
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
      company: "CodSoft",
      role: "Front-end Engineer",
      duration: "1 Month",
      icon: "fas fa-laptop-code",
      details: [
        "Worked as a Frontend Developer, creating interactive and visually appealing web interfaces",
        "Built responsive UI components using HTML, CSS, JavaScript, and modern frameworks",
        "Improved website performance and cross-browser compatibility",
        "Collaborated with designers and backend teams to deliver seamless, user-friendly applications"
      ]
    },
  
    {
      company: "Cybrom Technology",
      role: "Web Development Intern",
      duration: "2 Months",
      icon: "fas fa-laptop-code",
      details: [
        "Developed and optimized scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Collaborated with cross-functional teams to deliver secure, high-performance, and user-friendly solutions.",
        "Implemented RESTful APIs, authentication, and database management to ensure efficiency and reliability."
      ]
    },
   
  ];

  return (
    <section id="internships" className="internships-section">
      <div className="container">
        <h2 className="section-title">Internships</h2>
        <div className="internships-container">
          {internships.map((internship, index) => (
            <InternshipCard 
              key={`${internship.company}-${internship.duration}`}
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