import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

class RouteWrapper extends Component {
    render() {
        const { routes } = this.props
        return (
            <Switch>
                {
                    routes.map((item, index) => {
                        return (
                            <Route 
                                exact={item.exact} 
                                path={item.path} 
                                key={index}
                                render={(location) => {
                                    return <item.component {...location} routes={item.children}></item.component>
                                }}
                            ></Route>
                        )
                    })
                }
            </Switch>
        )
    }
};

export default RouteWrapper;