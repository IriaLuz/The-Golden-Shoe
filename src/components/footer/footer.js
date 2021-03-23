import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/white-logo.png';
import './footer.css';

const AppFooter = () => {
  return (
    <div className="main-footer">
      <hr />
      <div className="footer-logo-container">
        <a href="/">
          <img className="logo-footer" src={logo} alt="logo" />
        </a>
      </div>

      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <ul className="list-footer">
              <h4>Help</h4>
              <li>
                <Link className="link-footer-style" to="/faq">
                  FAQ/Contact us
                </Link>
              </li>
            </ul>
          </div>
          {/* colum2 */}
          <div className="col">
            <ul className="list-footer">
              <h4>Shop</h4>
              <li>
                <Link className="link-footer-style" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr id="divider-footer" />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} The Golden Shoe | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
