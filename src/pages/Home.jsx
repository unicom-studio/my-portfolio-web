import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/profile-image.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section id="home" className="section container" style={{ paddingTop: '8rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero-wrapper animate-slide">
        
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <br />
            <span>Kavindu Chirath</span> <span className="wave-emoji">👋</span>
          </h1>
          <span className="hero-subtitle">Undergraduate Software & Intelligent Systems</span>
          <p className="hero-description">
            IT Student & Aspiring Software Engineer with experience in Java programming, Full-Stack Web Application development, and RESTful APIs using modern frameworks.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/projects')}>
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a 
              href="https://linkedin.com/in/kavindu-chirath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="mailto:kavinduchirath2@gmail.com" 
              className="social-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              kavinduchirath2@gmail.com
            </a>
          </div>

        </div>

        <div className="hero-image-area">
          <div className="profile-img-container">
            <img src={profileImg} alt="Kavindu Chirath Profile" className="profile-pic" />
          </div>
        </div>

      </div>
    </section>
  );
}

