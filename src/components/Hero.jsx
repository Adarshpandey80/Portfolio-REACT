import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Adarsh Pandey</h1>
          <h2 className="hero-subtitle">MERN Stack Developer</h2>
          <p className="hero-description">
            Passionate developer with strong proficiency in JavaScript, React.js, Node.js, Express.js, and MongoDB. 
            Eager to leverage problem-solving skills to build scalable, high-performance web applications.
          </p>
          <div className="hero-buttons">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;