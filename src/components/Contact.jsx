import { useInView } from 'react-intersection-observer';
import '../styles/Contact.css';

const Contact = () => {
  const [infoRef, infoInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div ref={infoRef} className={`contact-info ${infoInView ? 'in-view' : ''}`}>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 8090587220</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>pandeyadarsh9628@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>
           
          </div>
          
          <div ref={formRef} className={`contact-form-container ${formInView ? 'in-view' : ''}`}>
            <div className="contact-form-content">
              <h3 className="form-title">Send me a message</h3>
              <p className="form-description">
                Have a project in mind or want to discuss opportunities? 
                Feel free to reach out through any of the contact methods above, 
                or use the Google Form below to send me a detailed message.
              </p>
              <div className="form-cta">
                <a 
                  href="https://forms.gle/your-google-form-link" 
                  className="btn btn-primary form-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-google"></i>
                  Open Contact Form
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;