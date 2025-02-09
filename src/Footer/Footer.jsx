import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>© {new Date().getFullYear()} Himalaya Kharate. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:kharatehimalaya@gmail.com">
          <img
            src="https://img.icons8.com/ios/50/6486ad/email.png"
            alt="Email"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/himalaya-kharate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios/50/6486ad/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/HimalayaKharate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </footer>
  );
}
