import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  render() {
    return (
      <>
      <div className="container">
        <h2>Top News Headline - NewsBot</h2>
        <div className="row mt-5">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
      </div>
        
      </>
    )
  }
}
