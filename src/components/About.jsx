import { useInView } from 'react-intersection-observer';
import '../styles/About.css';
const About = () => {
  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [textRef, textInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div 
            ref={imageRef}
            className={`about-image ${imageInView ? 'in-view' : ''}`}
          >
            <img src="/my.jpeg" alt="Adarsh Pandey" />
          </div>
          <div 
            ref={textRef}
            className={`about-text ${textInView ? 'in-view' : ''}`}
          >
            <p>
              I am a passionate MERN Stack Developer with a Bachelor's degree in Computer Science 
              from Technocrates Institute of Technology, Bhopal.
            </p>
            <p>
              With a CGPA of 7.6, I have built a strong foundation in computer science principles 
              and web development technologies. My journey in web development has equipped me with 
              expertise in modern JavaScript frameworks and libraries.
            </p>
            <p>
              I thrive on solving complex problems and building efficient, scalable applications. 
              My experience includes developing full-stack web applications, working with databases, 
              and implementing responsive designs.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and continuously learning to stay updated with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;