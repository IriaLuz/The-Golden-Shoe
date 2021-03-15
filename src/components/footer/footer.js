import React from 'react';
import logo from './images/withe-logo.png';
import './footer.css';

const AppFooter = () => {
  return (
    <div className="main-footer">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>Help</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">FQA/Cotact us</a>
              </li>
            </ul>
          </div>
          {/* colum2 */}
          <div className="col">
            <h4>Shop</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Products</a>
              </li>
            </ul>
          </div>
        </div>
        <hr id="divider-footer" />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} The Golden Shoe | All right
            reserved | Term Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
