import { getByTitle } from "@testing-library/react";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imgurl,newsI} = this.props;
    return (
      <>
      <div className="col-md-3 my-2">
        <div className="card" style={{width : "20rem"}}>
          <img src={imgurl} className="card-img-top" alt={imgurl} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}
            </p>
            <a href="/newsdetail/" className="btn btn-sm btn-outline-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }
}

NewsItem.defaultProps = {
    title : "Your title here",
    description : "Your description here"
}
