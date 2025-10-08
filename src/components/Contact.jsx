import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import '../styles/contact.css';
const Contact = () => {
  const [infoRef, infoInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div ref={infoRef} className={`contact-info ${infoInView ? 'in-view' : ''}`}>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>adarshpandey@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 9876543210</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h3>Website</h3>
                <p>www.adarshpandey.com</p>
              </div>
            </div>
          </div>
          
          <div ref={formRef} className={`contact-form ${formInView ? 'in-view' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;