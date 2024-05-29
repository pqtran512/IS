import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to Bookstore, your number-one source for all books. We're dedicated to giving you the very best of books, with a focus on quality, customer service, and uniqueness.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@bookstore.com</p>
          <p>Phone: +84 57 180 984</p>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Bookstore | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
