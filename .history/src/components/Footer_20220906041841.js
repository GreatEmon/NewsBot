import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-center text-light">
            <p className='py-2'>All Right Reserved by &copy; <span className='text-warning'>NewsBot</span></p>
        </div>
      </div>
    )
  }
}
