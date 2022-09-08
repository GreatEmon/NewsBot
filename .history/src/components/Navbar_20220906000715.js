import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";

export class navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link exact to="/" className="navbar-brand" href="/">
              NewsBot
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link active" aria-current="page" href="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default navbar;
