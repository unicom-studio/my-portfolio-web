export default function Projects() {
  const projects = [
    {
      id: 'pizza-shop',
      title: 'Pizza Shop Online Ordering & Management System',
      category: 'Full-Stack Web App',
      description: 'A comprehensive online ordering platform for customers and an integrated management administration dashboard. Features customer authentication, interactive pizza menu, shopping cart checkout, and an admin panel with full CRUD operations for users, items, and orders.',
      highlights: [
        'Customer Registration & Login authentication',
        'Interactive menu browsing & real-time cart update',
        'Checkout & Order Management System',
        'Admin Panel with CRUD operations for menu & users',
        'Version control with Git & GitHub'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git', 'GitHub'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      category: 'Full-Stack Web App (MERN Stack)',
      description: 'A modern web-based Library Management System developed for a university library to optimize book circulation and daily administrative workflows. Includes user registration, catalog management, book circulation tracking, and real-time status updates.',
      highlights: [
        'User registration & membership system',
        'Book catalog management & inventory lookup',
        'Book circulation & borrowing activity tracking',
        'Circulation status & return date management',
        'Streamlined administrative library operations'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="section container animate-fade" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className={`animate-slide delay-${idx + 1}`}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '2.25rem',
                transition: 'var(--transition-normal)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    color: 'var(--primary)', 
                    fontWeight: '600' 
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginTop: '0.25rem', color: 'var(--text-main)' }}>
                    {project.title}
                  </h3>
                </div>
                
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {project.icon}
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Key Features & Scope:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {project.highlights.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Tech Stack Used:</h4>
                <div className="skill-badges">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="skill-badge"
                      style={{ 
                        background: 'rgba(59, 130, 246, 0.08)', 
                        borderColor: 'rgba(59, 130, 246, 0.25)', 
                        color: 'var(--text-main)' 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

