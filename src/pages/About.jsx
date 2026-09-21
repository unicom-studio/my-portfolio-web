export default function About() {
  return (
    <section id="about" className="section bg-dim-section" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          
          {/* Left Column: Summary */}
          <div className="about-text-container animate-slide delay-1">
            <h3 className="about-text-title">Profile Summary</h3>
            <p className="about-paragraph">
              I am an Undergraduate in Software & Intelligent Systems and a graduate with a Diploma in Information Technology (NVQ Level 5). I have hands-on experience in Java programming, Web Application development, and RESTAPI development using modern web technologies and frameworks.
            </p>
            <p className="about-paragraph">
              Eager to apply technical skills, learn new technologies, and contribute effectively in a professional working environment while delivering high-quality, practical software solutions.
            </p>

            <div className="profile-quick-details">
              <div className="detail-item">
                <span>Location</span>
                <span>153/E/1 Gintota, Galle</span>
              </div>
              <div className="detail-item">
                <span>Phone</span>
                <span>070 231 5229</span>
              </div>
              <div className="detail-item">
                <span>Email</span>
                <span>kavinduchirath2@gmail.com</span>
              </div>
              <div className="detail-item">
                <span>LinkedIn</span>
                <span style={{ fontSize: '0.85rem' }}>
                  <a href="https://linkedin.com/in/kavindu-chirath" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                    linkedin.com/in/kavindu-chirath
                  </a>
                </span>
              </div>
            </div>

            {/* Languages Section */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Languages</h4>
              <div className="skill-badges">
                <span className="skill-badge" style={{ background: 'var(--primary-glow)', borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                  English
                </span>
                <span className="skill-badge" style={{ background: 'var(--accent-glow)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  Sinhala
                </span>
              </div>
            </div>

            {/* Professional Certificates Section */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Professional Certificates</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Python Programming</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>University of Moratuwa (Open Distance Learning)</div>
                </div>
                <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Web Development</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>University of Moratuwa (Open Distance Learning)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Technical Skills */}
          <div className="skills-container animate-slide delay-2">
            
            {/* Card 1: Programming Languages */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h4>Programming Languages</h4>
              </div>
              <div className="skill-badges">
                <span className="skill-badge">Java</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">PHP</span>
                <span className="skill-badge">C#</span>
              </div>
            </div>

            {/* Card 2: Frontend & Backend Development */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h4>Frontend & Backend Development</h4>
              </div>
              <div className="skill-badges">
                <span className="skill-badge">HTML5</span>
                <span className="skill-badge">CSS</span>
                <span className="skill-badge">ReactJs</span>
                <span className="skill-badge">NodeJs</span>
                <span className="skill-badge">ExpressJs</span>
                <span className="skill-badge">Laravel</span>
                <span className="skill-badge">RestAPI Development</span>
                <span className="skill-badge">Prisma ORM</span>
                <span className="skill-badge">Mongoose ODM</span>
              </div>
            </div>

            {/* Card 3: Database & Tools */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  </svg>
                </div>
                <h4>Databases & Dev Tools</h4>
              </div>
              <div className="skill-badges">
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">MongoDB</span>
                <span className="skill-badge">PostgreSQL</span>
                <span className="skill-badge">Postman</span>
                <span className="skill-badge">PyCharm</span>
                <span className="skill-badge">IntelliJ IDEA</span>
                <span className="skill-badge">Figma</span>
                <span className="skill-badge">GitHub</span>
                <span className="skill-badge">Docker</span>
              </div>
            </div>

            {/* Card 4: Design & Soft Skills */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h4>Design & Core Competencies</h4>
              </div>
              <div className="skill-badges">
                <span className="skill-badge">Adobe Photoshop</span>
                <span className="skill-badge">Adobe Illustrator</span>
                <span className="skill-badge">Problem Solving</span>
                <span className="skill-badge">Critical Thinking</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

