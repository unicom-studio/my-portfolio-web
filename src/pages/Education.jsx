export default function Education() {
  return (
    <>
      {/* Education Timeline Section */}
      <section id="education" className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h2 className="section-title">Education</h2>
          
          <div className="timeline-container animate-slide delay-1">
            
            {/* Timeline Item 1: B.Tech */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-card-title">
                    <h3>B.Tech in Software & Intelligent Systems</h3>
                    <p className="timeline-inst">University of Vocational Technology</p>
                  </div>
                  <span className="timeline-period active">2026 - Upward</span>
                </div>
                <p className="timeline-desc">
                  Pursuing undergraduate studies in Software & Intelligent Systems technology, expanding expertise in software engineering principles, artificial intelligence concepts, modern application architecture, and high-performance computing systems.
                </p>
              </div>
            </div>

            {/* Timeline Item 2: Diploma in IT */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-card-title">
                    <h3>Diploma in Information Technology (NVQ Level 5)</h3>
                    <p className="timeline-inst">College of Technology, Galle</p>
                  </div>
                  <span className="timeline-period">2025 - 2026</span>
                </div>
                <p className="timeline-desc">
                  Completed NVQ Level 5 Diploma with practical specialization in Java programming, Web Application development, RESTAPI engineering, Database Management (MySQL), System Analysis, Software Testing, and Version Control using Git & GitHub.
                </p>
              </div>
            </div>

            {/* Timeline Item 3: GCE Advanced Level */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-card-title">
                    <h3>GCE Advanced Level</h3>
                    <p className="timeline-inst">Dr Richard Pathirana College</p>
                  </div>
                  <span className="timeline-period">2022 - 2024</span>
                </div>
                <p className="timeline-desc">
                  Completed GCE Advanced Level examinations, developing strong mathematical logic, technical understanding, and problem-solving fundamentals for higher IT studies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academic References Section */}
      <section id="references" className="section bg-dim-section">
        <div className="container">
          <h2 className="section-title">References</h2>
          
          <div className="references-grid animate-slide delay-1">
            
            {/* Reference 1 */}
            <div className="ref-card">
              <div className="quote-mark">“</div>
              <div className="ref-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="ref-avatar">CD</div>
                <div className="ref-info">
                  <h4>Chamindu Devaka</h4>
                  <span>Lecturer, College of Technology, Galle</span>
                  <div className="ref-contact-links" style={{ marginTop: '0.5rem' }}>
                    <a href="tel:0714494042" style={{ fontWeight: '600' }}>📞 071 449 4042</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reference 2 */}
            <div className="ref-card">
              <div className="quote-mark">“</div>
              <div className="ref-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="ref-avatar">SD</div>
                <div className="ref-info">
                  <h4>Shyami De Silva</h4>
                  <span>Lecturer, College of Technology, Galle</span>
                  <div className="ref-contact-links" style={{ marginTop: '0.5rem' }}>
                    <a href="tel:0718616693" style={{ fontWeight: '600' }}>📞 071 861 6693</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

