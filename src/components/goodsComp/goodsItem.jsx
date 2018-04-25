import React, { Component } from 'react';
import $http from '../../utils/http'
import './goodsItem.css'
import Lazyload from 'react-lazyload'

class Placeholder extends Component {
  render() {
    return (
      <img src={require('../../static/img/5.jpg')} />
    )
  }
}

class GoodsItem extends Component {
  render() {
    let { data } = this.props
    return (
      <dl className='goods-item' onClick={() => {this.toDetail()}}>
          <dt>
            <Lazyload 
              overflow 
              once 
              height={'100%'} 
              placeholder={<Placeholder></Placeholder>} 
              debounce={200}
            >
              <img src={"http://www.lb717.com/" + data.obj_data} />
            </Lazyload>
          </dt>
          <dd>
            <p className="goods-detail">{data.goods_name}</p>
            <p className="goods-nums">
              <span className="goods-price">{data.discount_price}</span>
              <span className="iconfont icon-gouwuche"></span>
            </p>
          </dd>
      </dl>
    )
  }
  toDetail() {
    this.props.history.push({
      pathname: '/detail',
      state: this.props.data
    })
  }
};

export default GoodsItem
