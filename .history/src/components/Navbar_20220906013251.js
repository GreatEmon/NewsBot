import React, { Component } from "react";
import { NavLink,Link} from "react-router-dom";

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
                  {/* <Link exact to="/" className="nav-link" aria-current="page">
                     Home
                  </Link> */}
                </li> 
                <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink exact to="/general" className="nav-link">General</NavLink></li> 
                <li className="nav-item"><NavLink exact to="/business" className="nav-link" >Business</NavLink></li>
                <li className="nav-item"><NavLink exact to="/entertainment" className="nav-link" >Entertainment</NavLink></li>
                <li className="nav-item"><NavLink exact to="/health" className="nav-link " >Health</NavLink></li>
                <li className="nav-item"><NavLink exact to="/science" className="nav-link">Science</NavLink></li>
                <li className="nav-item"><NavLink exact to="/sports" className="nav-link">Sports</NavLink></li>
                <li className="nav-item"><NavLink exact to="/technology" className="nav-link" >Technology</NavLink></li> 
               </ul> 
            </div>
          </div>
        </nav> 
      </>
    );
  }
}

export default navbar;
