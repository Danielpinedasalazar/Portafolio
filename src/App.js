// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
  },
  container: {
    maxWidth: '1200px',
    margin: '80px auto 0',
    padding: '20px',
  },
  heroSection: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: 'white',
    position: 'relative',
  },
  heroContent: {
    textAlign: 'center',
    zIndex: 2,
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid white',
    marginBottom: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    objectFit: 'cover',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    margin: '2rem 0',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    color: '#2c3e50',
    textDecoration: 'none',
  },
  section: {
    marginBottom: '3rem',
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    color: '#2c3e50',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #3498db',
    paddingBottom: '0.5rem',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '2rem 0',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  projectInfo: {
    padding: '1.5rem',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
    marginTop: '1rem',
  },
  skillsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    padding: '2rem 0',
  },
  skillCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  testimonialSection: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 0',
  },
  testimonialCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  testimonialImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '0 auto 1rem',
    objectFit: 'cover',
  },
  testimonialControls: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    padding: '4rem 0',
    backgroundColor: '#f8f9fa',
  },
  statCard: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '4rem 0',
    marginTop: '4rem',
  },
  timeline: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '2rem',
    marginBottom: '2rem',
    borderLeft: '2px solid #3498db',
  },
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at TechCorp",
      text: "Increíble profesional con quien he tenido el placer de trabajar. Su atención al detalle y capacidad para resolver problemas complejos es excepcional.",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer at StartupXYZ",
      text: "Un desarrollador excepcional que siempre va más allá de las expectativas. Su capacidad para innovar y encontrar soluciones creativas es admirable.",
    },
    {
      name: "Mike Johnson",
      role: "Product Manager at InnovateCo",
      text: "Colaborar en proyectos con este profesional ha sido una experiencia extraordinaria. Su compromiso con la excelencia es verdaderamente inspirador.",
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico desarrollada con React y Node.js",
    },
    {
      title: "Portfolio App",
      description: "Aplicación de portfolio personal con diseño responsive",
    },
    {
      title: "Task Manager",
      description: "Aplicación de gestión de tareas con React y Firebase",
    }
  ];

  const skills = [
    { name: "React", level: "Avanzado" },
    { name: "Node.js", level: "Intermedio" },
    { name: "JavaScript", level: "Avanzado" },
    { name: "HTML/CSS", level: "Avanzado" },
    { name: "Python", level: "Intermedio" },
    { name: "SQL", level: "Intermedio" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Daniel Pineda</h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Ingeniero de Sistemas
          </h2>
          <div style={styles.socialLinks}>
            <a href="https://linkedin.com" style={styles.socialIcon}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com" style={styles.socialIcon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" style={styles.socialIcon}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      <section style={{...styles.section, margin: '4rem auto', maxWidth: '1200px'}}>
        <h2 style={styles.sectionTitle}>Proyectos Destacados</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button style={styles.button}>Ver Más</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h3 style={{ fontSize: '2.5rem', color: '#3498db' }}>50+</h3>
          <p>Proyectos Completados</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={{ fontSize: '2.5rem', color: '#3498db' }}>30+</h3>
          <p>Clientes Satisfechos</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={{ fontSize: '2.5rem', color: '#3498db' }}>5+</h3>
          <p>Años de Experiencia</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={{ fontSize: '2.5rem', color: '#3498db' }}>100%</h3>
          <p>Compromiso</p>
        </div>
      </section>

      <section style={{...styles.section, margin: '4rem auto', maxWidth: '1200px'}}>
        <h2 style={styles.sectionTitle}>Habilidades</h2>
        <div style={styles.skillsSection}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{...styles.section, background: '#f8f9fa', margin: '4rem auto', maxWidth: '1200px'}}>
        <h2 style={styles.sectionTitle}>Testimonios</h2>
        <div style={styles.testimonialSection}>
          <div style={styles.testimonialCard}>
            <blockquote style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              marginBottom: '1rem'
            }}>
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <p style={{fontWeight: 'bold'}}>{testimonials[currentTestimonial].name}</p>
            <p style={{color: '#666'}}>{testimonials[currentTestimonial].role}</p>
          </div>
          
          <div style={styles.testimonialControls}>
            <button onClick={prevTestimonial} style={styles.button}>←</button>
            <button onClick={nextTestimonial} style={styles.button}>→</button>
          </div>
        </div>
      </section>
    </>
  );
};

const About = () => (
  <div style={styles.container}>
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Mi Historia</h2>
      <div style={styles.timeline}>
        <div style={styles.timelineItem}>
          <h3>2023</h3>
          <p>Senior Developer en Empresa XYZ</p>
          <ul>
            <li>Lideré equipo de desarrollo frontend</li>
            <li>Implementé arquitectura de microservicios</li>
            <li>Optimicé el rendimiento de aplicaciones críticas</li>
          </ul>
        </div>
        <div style={styles.timelineItem}>
          <h3>2021</h3>
          <p>Full Stack Developer en Startup ABC</p>
          <ul>
            <li>Desarrollo de aplicaciones web escalables</li>
            <li>Implementación de APIs RESTful</li>
            <li>Optimización de bases de datos</li>
          </ul>
        </div>
        <div style={styles.timelineItem}>
          <h3>2019</h3>
          <p>Frontend Developer en Tech Inc</p>
          <ul>
            <li>Desarrollo de interfaces de usuario</li>
            <li>Implementación de diseños responsivos</li>
            <li>Optimización de rendimiento frontend</li>
          </ul>
        </div>
      </div>
    </section>

    <section style={styles.section}>
    <h2 style={styles.sectionTitle}>Certificaciones</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        <div style={styles.certificationCard}>
          <h4>AWS Certified Developer</h4>
          <p>Expedido: 2023</p>
        </div>
      </div>
    </section>
  </div>
);

const Contact = () => (
  <div style={styles.container}>
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Contáctame</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
        <div>
          <h3>Información de Contacto</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li>📧 daniel.pineda73@eia.edu.co</li>
            <li>📱 +57 3005103421</li>
            <li>📍 Medellin, Colombia </li>
          </ul>
          <div style={styles.socialLinks}>
          </div>
        </div>
        <form style={styles.contactForm}>
          <input style={styles.input} type="text" placeholder="Nombre" />
          <input style={styles.input} type="email" placeholder="Email" />
          <textarea style={styles.input} placeholder="Mensaje" rows="5" />
          <button style={styles.button}>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><Link style={styles.navLink} to="/">Inicio</Link></li>
          <li><Link style={styles.navLink} to="/about">Sobre Mí</Link></li>
          <li><Link style={styles.navLink} to="/contact">Contacto</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer style={styles.footer}>
        <div style={{...styles.container, textAlign: 'center'}}>
          <h3>Daniel Pineda</h3>
          <p>Ingeniero de Sistemas</p>
          <div style={styles.socialLinks}>
          </div>
          <p>© 2024 Todos los derechos reservados</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;