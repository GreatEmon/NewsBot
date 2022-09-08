import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark py-1 text-center text-light">
            <p className='mb'>All Right Reserved by &copy; <span className='text-warning'>NewsBot</span></p>
        </div>
      </div>
    )
  }
}
