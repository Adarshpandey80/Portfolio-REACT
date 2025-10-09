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
          <div className="hero-text">
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
          
          <div className="hero-image">
            <div className="tech-3d-container">
              <div className="floating-element element-1">
                <i className="fab fa-react"></i>
              </div>
              <div className="floating-element element-2">
                <i className="fab fa-js-square"></i>
              </div>
              <div className="floating-element element-3">
                <i className="fab fa-node-js"></i>
              </div>
              <div className="floating-element element-4">
                <i className="fas fa-database"></i>
              </div>
              <div className="floating-element element-5">
                <i className="fab fa-html5"></i>
              </div>
              <div className="floating-element element-6">
                <i className="fab fa-css3-alt"></i>
              </div>
              <div className="central-cube">
                <div className="cube-face front">
                  <i className="fas fa-code"></i>
                </div>
                <div className="cube-face back">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="cube-face right">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="cube-face left">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="cube-face top">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="cube-face bottom">
                  <i className="fas fa-microchip"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;