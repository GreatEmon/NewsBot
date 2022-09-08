import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  render() {
    return (
      <>
      <div className="container">
        <h2>Top News Headline - NewsBot</h2>
        <div className="row">
            <div className="col-md-4">
               <NewsItem />
            </div>
            <div className="col-md-4">
               <NewsItem />
            </div>
            <div className="col-md-3">
               <NewsItem />
            </div>
            <div className="col-md-3">
               <NewsItem />
            </div>
            <div className="col-md-3">
               <NewsItem />
            </div>
            <div className="col-md-3">
               <NewsItem />
            </div>
            <div className="col-md-3">
               <NewsItem />
            </div>
        </div>
      </div>
        
      </>
    )
  }
}
