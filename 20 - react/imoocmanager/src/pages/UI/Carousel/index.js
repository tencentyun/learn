import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './index.scss'

export default class Carousela extends Component {
  render() {
    return (
      <div className='carousel'>
        <Card title='文字轮播' className='card-warp'>
          <Carousel autoplay={true}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>

        <Card title='图片轮播' className='card-warp'>
          <Carousel autoplay={true}>
            <div>
             <img src="/assets/carousel-img/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/carousel-img/carousel-2.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/carousel-img/carousel-3.jpg" alt=""/>
            </div>
          </Carousel>
        </Card>
      </div >
    )
  }
}