import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark y-1 text-center text-light">
            <p className='py-'>All Right Reserved by &copy; <span className='text-warning'>NewsBot</span></p>
        </div>
      </div>
    )
  }
}