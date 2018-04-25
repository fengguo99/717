import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './static/css/react.css'
import './static/css/common.css'
import router from './router/router.config'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import RouterWrapper from './components/routeWrapper'
import './static/font/iconfont.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/index/home"></Redirect>
            <RouterWrapper routes={router.routes}></RouterWrapper>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)