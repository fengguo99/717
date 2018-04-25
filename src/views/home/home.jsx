import React, { Component } from 'react';
import './home.css'
import RouteSwiper from '../../components/routeSwiper/routeSwiper'
import $http from '../../utils/http'
import GoodsItem from '../../components/goodsComp/goodsItem'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      goodsList: [],
      channel_id: 2,
      caniquery: true
    }
  }
  toSearch() {
    console.log(this.props)
    const { history } = this.props
    history.push('/search')
  }
  render() {
    return (
      <div id='home'>
        <header><input type='text' onClick={this.toSearch.bind(this)} /></header>
        <div>
          <RouteSwiper></RouteSwiper>
        </div>
        <section className="home-cat">
          <dl>
            <dt><img src={require('../../static/img/5.jpg')} /></dt>
            <dd>牛奶乳品</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/6.jpg')} /></dt>
            <dd>家乡味道</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/7.jpg')} /></dt>
            <dd>休闲零食</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/8.jpg')} /></dt>
            <dd>米面粮油</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/9.jpg')} /></dt>
            <dd>调味调料</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/10.jpg')} /></dt>
            <dd>酒水饮料</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/11.jpg')} /></dt>
            <dd>生鲜果蔬</dd>
          </dl>
          <dl>
            <dt><img src={require('../../static/img/12.jpg')} /></dt>
            <dd>进口食品</dd>
          </dl>
        </section>
        <div className='verso' ref='verso'>
          <div className='goods_list' onScroll={this.scrolling.bind(this)}>
            {
              this.state.goodsList.map((item, idx) => {
                  return <GoodsItem key={idx} data={item} history={this.props.history} localtion={this.props.localtion}></GoodsItem>
              })
            }
          </div>
        </div>
      </div>
    )
  }
  scrolling() {
    if (!this.state.caniquery) return

    const { verso, scrollDom } = this.refs
    let st = scrollDom.scrollTop
    let sh = scrollDom.offsetHeight
    let vh = verso.offsetHeight
    if (vh - (st + sh) < -80) {
      this.setState({
        channel_id: ++this.state.channel_id
      })

      this.setState({
        caniquery: false
      })
      $http.post('/mall/index/getGoodsChannel', { channel_id: this.state.channel_id })
      .then(res => {
        this.setState({
          goodsList: [...this.state.goodsList, ...JSON.parse(res).data.data],
          caniquery: true
        })
      })
    }
  }
  componentDidMount() {
    $http.post('/mall/index/getGoodsChannel', { channel_id: this.state.channel_id })
    .then(res => {
      this.setState({
        goodsList: JSON.parse(res).data.data
      })
    })
  }
}

export default Home