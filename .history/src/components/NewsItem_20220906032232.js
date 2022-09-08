import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <>
      <div className="col-md-3 my-2">
        <div className="card">
          <img src={imgurl?imgurl:"https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg"} referrerPolicy="no-referrer" className="card-img-top" alt={imgurl} style={{height:"12rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}......
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-outline-primary">
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
