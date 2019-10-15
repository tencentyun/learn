import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import './index.scss'

export default class Gallery extends Component {

  render(){
    return (
      <div className='gallery'>
        <Row gutter={15}>
          <Col span={5} className='col-bottom'>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/1.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/2.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
          </Col>
          <Col span={5} className='col-bottom'>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/3.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/4.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
          </Col>
          <Col span={5} className='col-bottom'>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/5.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/6.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
          </Col>
          <Col span={5} className='col-bottom'>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/7.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/8.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
          </Col>
          <Col span={4} className='col-bottom'>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/9.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
            <Card className='card-warp' cover={<img alt='' src='/assets/imgs/10.png' />}>
              <Card.Meta title='React' description='学习React学习React'></Card.Meta>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}