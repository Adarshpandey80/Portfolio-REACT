import '../styles/Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/Adarshpandey80" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/adarshpandey80/" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <a href="https://twitter.com/adarsh" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a> */}
          <a href="mailto:adarshpandey8058@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="copyright">
          © {currentYear} Adarsh Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;