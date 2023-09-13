import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Geek__Bhirahatees</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Project
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/geek-bhirahatees"
            className="footer__social-link"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bhirahateesvaran-periyasamy-47aa14256/"
            className="footer__social-link"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://www.instagram.com/geek__pragathees__/"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
