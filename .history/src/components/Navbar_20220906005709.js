import React, { Component } from "react";
import { Link } from "react-router-dom";

export class navbar extends Component {
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
                  <Link exact to="/" className="nav-link" aria-current="page">
                     Home
                  </Link>
                </li> 
                <li className="nav-item"><Link  to="general" className="nav-link">General</Link></li> 
                <li className="nav-item"><Link  to="/business" className="nav-link" >Business</Link></li>
                <li className="nav-item"><Link   to="/entertainment" className="nav-link" >Entertainment</Link></li>
                <li className="nav-item"><Link key={"health"}  to="/health" className="nav-link " >Health</Link></li>
                <li className="nav-item"><Link key={"science"}  to="/science" className="nav-link">Science</Link></li>
                <li className="nav-item"><Link key={"sports"}  to="/sports" className="nav-link">Sports</Link></li>
                <li className="nav-item"><Link key={"technology"}  to="/technology" className="nav-link" >Technology</Link></li> 
               </ul> 
            </div>
          </div>
        </nav> 
      </>
    );
  }
}

export default navbar;
