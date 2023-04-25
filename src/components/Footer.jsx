import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className="footer_links">
        <li className="footer__list">
          <a
            href="https://www.tesla.com/about?redirect=no"
            target="_blank"
            className="footer__link"
          >
              Tesla &copy; 2023
          </a>
        </li>
        <li className="footer__list">
        <a
            href="https://www.tesla.com/legal/privacy?redirect=no"
            target="_blank"
            className="footer__link"
          >
            Privacy & Legal
          </a>
        </li>
        <li className="footer__list">
          <a
            href="https://service.tesla.com/vin-recall-search"
            target="_blank"
            className="footer__link"
          >
            Vehicle Recalls
          </a>
        </li>
        <li className="footer__list">
          <a
            href="https://www.tesla.com/contact?redirect=no"
            target="_blank"
            className="footer__link"
          >
            Contact
          </a>
        </li>
        <li className="footer__list">
          <a
            href="https://www.tesla.com/careers"
            target="_blank"
            className="footer__link"
          >
            Careers
          </a>
        </li>
        <li className="footer__list">
          <a
            href="https://www.tesla.com/blog"
            target="_blank"
            className="footer__link"
          >
            News
          </a>
        </li>
        <li className="footer__list">
          <a
            href="https://engage.tesla.com/"
            target="_blank"
            className="footer__link"
          >
            Engage
          </a>
        </li>
        <li className="footer__list">
          <a
            href="https://www.tesla.com/findus/listo"
            target="_blank"
            className="footer__link"
          >
            Locations
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
