import { Carousel } from 'flowbite-react'
import React, { Component } from 'react'
import first from "../images/carsoul1.png"
import second from "../images/2.png"
import third from "../images/3.png"
import fourth from "../images/4.png"
import fifth from "../images/5.png"
export class Section extends Component {
  render() {
    return (
      <div className="max-h-100 sm:h-64 xl:h-80 2xl:h-96 aa rounded-none	">

        <Carousel className='rounded-none'>
          <img
            src={first}
            alt="..."
           className='h-63 rounded-none'
          />
          <img
            src={second}
            alt="..."
          />
          <img
            src={third}
            alt="..."
          />
          <img
            src={fourth}
            alt="..."
          />
          <img
            src={fifth}
            alt="..."
          />
        </Carousel>
      </div>
    )
  }
}

export default Section