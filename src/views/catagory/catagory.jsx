import React, { Component } from 'react';
import './catagory.css'
import $http from '../../utils/http'

class Catagory extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      activeIndex: 0
    }
  }
  render () {
    let { data } = this.state
    let catList = ["家乡味道", "进口食品", "牛奶乳品", "休闲零食", "生鲜果蔬", "米面粮油", "调味调料", "酒水饮料"]
    return (
      <div id='catagory'>
        <header><input type='text' /></header>
        <div className='catagory-wrap'>
          <div className='left-side'>
            <ul>
              {
                catList.map((item, index) => {
                  return (
                    <li 
                      className={this.state.activeIndex == index ? 'catagory-active': ''} 
                      onClick={() => {this.toggleActive(index)}} 
                      key={index}
                    >
                      {item}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='right-side' ref='right_side'>
            <h2>{data && data.title}</h2>
            {
              data && data.meallist.map((item,index) => {
                  return (
                    <ul key={index}>
                      <li>
                        <img src={item.img}/>
                        <p>{item.name}</p>
                      </li>
                    </ul>
                  )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  toggleActive(ind){
    this.setState({
      activeIndex: ind
    })
    //每点击一次就发起一次请求,把不同的id发过去
    $http.get('/mobile/Catagory/catagorySon',{sonid: ind + 1}).then((res) =>{
      this.setState({
          //接受后端传来的不同的数据
          data: JSON.parse(res)
      })
    })
  }
  componentDidMount() {
    $http.get('/mobile/Catagory/catagorySon',{sonid: 1}).then((res) =>{
      this.setState({
          data: JSON.parse(res)
      })
    })
  }
}

export default Catagory