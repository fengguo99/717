import Index from '../views/index'
import Home from '../views/home'
import Catagory from '../views/catagory'
import Cart from '../views/cart'
import Mine from '../views/mine'
import Detail from '../views/detail'
import Search from '../views/search'

let router = {
    routes: [
        {
            path: '/index',
            component: Index,
            children: [
                {
                    path: '/index/home',
                    component: Home
                },
                {
                    path: '/index/catagory',
                    component: Catagory
                },
                {
                    path: '/index/cart',
                    component: Cart
                },
                {
                    path: '/index/mine',
                    component: Mine
                }
            ]
        },
        {
            path: '/detail',
            component: Detail
        },
        {
            path: '/search',
            component: Search
        }
    ]
}

export default router