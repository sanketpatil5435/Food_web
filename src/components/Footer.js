import React from 'react';
import '../Foodweb.css'

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div className="data">
          <h1>Food Hub</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ab!</p>
        </div>
        <div className="data">
          <h2>Contact Us</h2>
          <p>foodhub@gmail.com</p>
          <p>+12345678</p>
        </div>
        <div className="data">
          <h2>Follow Us</h2>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <p>All Right Reserved &copy; 2024</p>
    </footer>
  );
};

export default Footer;
