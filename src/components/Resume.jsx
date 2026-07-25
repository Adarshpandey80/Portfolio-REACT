import { useInView } from 'react-intersection-observer';
import '../styles/Resume.css';

const Resume = () => {
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.12,
    triggerOnce: true
  });

  const resumeCards = [
    {
      title: 'Resume (India)',
      icon: 'fas fa-landmark',
      tag: 'Education, internships, and core experience',
      summary: 'A concise resume highlighting my academic background, internship experience, technical skills, and full-stack development projects.',
      highlights: ['Education', 'Internship Experience', 'Full-Stack Development'],
      file: '/MyResume.pdf',
      actionLabel: 'Open National CV'
    },
    {
      title: 'Resume (International)',
      icon: 'fas fa-globe',
      tag: 'Global-ready engineering profile',
      summary: 'A resume tailored for international opportunities, showcasing software engineering expertise, technical skills, project experience, and collaborative development practices.',
      highlights: ['Full-Stack Engineering', 'Modern Web Technologies', 'Scalable Application Development' , 'Collaboration & Problem Solving'],
      file: '/Adarsh_Pandey_CV.pdf',
      actionLabel: 'Open International CV'
    }
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div ref={sectionRef} className={`resume-panel ${sectionInView ? 'in-view' : ''}`}>
          <div className="resume-header">
            <p className="resume-kicker">Curriculum Vitae</p>
            <h2 className="section-title">Resume</h2>
            <p className="resume-intro">
              Explore my resume in the format that best matches your hiring needs. 
                Two professionally formatted versions are available for Indian and international opportunities.
            </p>
          </div>

          <div className="resume-grid">
            {resumeCards.map((card) => (
              <article key={card.title} className="resume-card">
                <div className="resume-card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="resume-card-content">
                  <p className="resume-card-tag">{card.tag}</p>
                  <h3>{card.title}</h3>
                  <p className="resume-card-summary">{card.summary}</p>
                  <ul className="resume-card-highlights">
                    {card.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="resume-card-actions">
                    <a
                      className="btn btn-primary resume-action"
                      href={card.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {card.actionLabel}
                    </a>
                    <a
                      className="btn btn-outline resume-action"
                      href={card.file}
                      download
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;