import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer animate-fade">
      <div className="container footer-content">
        <span className="footer-logo">KC.</span>
        <p>&copy; {new Date().getFullYear()} Kavindu Chirath. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
