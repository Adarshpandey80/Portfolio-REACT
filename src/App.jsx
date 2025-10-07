import { useEffect } from 'react';
import './styles/globals.css';
import Header from './components/Header';
  import Hero from './components/Hero';
 import About from './components/About';
 import Internships from './components/Internship';
 import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
 //import Footer from './components/Footer';
import { useParticles } from './hooks/useParticles';

function App() {
  useParticles();

  useEffect(() => {
    // Add Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Add Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(googleFonts);

    return () => {
      document.head.removeChild(fontAwesome);
      document.head.removeChild(googleFonts);
    };
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Internships />
        <Skills />
        {/* <Projects />
        <Contact /> */}
      </main>
      {/* { <Footer /> } */}
    </div>
  );
}

export default App;