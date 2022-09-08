import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";

export class navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
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
                  <NavLink key={"home"} exact to="/" className="nav-link active" aria-current="page">
                     Home
                  </NavLink>
                </li>
                <li className="nav-item"><Link key={"general"} exact to="/general" className="nav-link" aria-current="page">General</Link></li>
                <li className="nav-item"><Link key={"business"} exact to="/business" className="nav-link" aria-current="page">Business</Link></li>
                <li className="nav-item"><Link key={"entertainment"} exact to="/entertainment" className="nav-link" aria-current="page">Entertainment</Link></li>
                <li className="nav-item"><Link key={"health"} exact to="/health" className="nav-link " aria-current="page">Health</Link></li>
                <li className="nav-item"><Link key={"science"} exact to="/science" className="nav-link" aria-current="page">Science</Link></li>
                <li className="nav-item"><Link key={"sports"} exact to="/sports" className="nav-link" aria-current="page">Sports</Link></li>
                <li className="nav-item"><Link key={"technology"} exact to="/technology" className="nav-link" aria-current="page">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default navbar;
