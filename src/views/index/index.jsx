import React, { Component } from 'react';
import './index.css'
import RouterWrapper from '../../components/routeWrapper'
import {
    NavLink
} from 'react-router-dom'

class Index extends Component {
    render() {
        let { routes } = this.props
        return (
            <div id="index">
                <div className="content">
                    <RouterWrapper routes={routes}></RouterWrapper>
                </div>
                <ul className="nav">
                    <li>
                        <NavLink to="/index/home" activeClassName="tab-active">
                            <span className='iconfont icon-shouye'></span>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index/catagory" activeClassName="tab-active">
                            <span className='iconfont icon-fenlei'></span>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index/cart" activeClassName="tab-active">
                            <span className='iconfont icon-gouwuche'></span>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index/mine" activeClassName="tab-active">
                            <span className='iconfont icon-wode'></span>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Index;