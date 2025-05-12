// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <FaFacebook />
          <FiX />
          <FaYoutubeSquare />
          <FaLinkedin />
          <FaGithub />
        </div>
        <div className="copyright">
          © {currentYear} SomeCompany, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;