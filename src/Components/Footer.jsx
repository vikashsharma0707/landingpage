import "../Css/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
