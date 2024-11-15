
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import DeliveryDeliveryManager from "./components/listers/DeliveryDeliveryCards"
import DeliveryDeliveryDetail from "./components/listers/DeliveryDeliveryDetail"

import BoundedContext318OrderManager from "./components/listers/BoundedContext318OrderCards"
import BoundedContext318OrderDetail from "./components/listers/BoundedContext318OrderDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/deliveries/deliveries',
                name: 'DeliveryDeliveryManager',
                component: DeliveryDeliveryManager
            },
            {
                path: '/deliveries/deliveries/:id',
                name: 'DeliveryDeliveryDetail',
                component: DeliveryDeliveryDetail
            },

            {
                path: '/boundedContext318s/orders',
                name: 'BoundedContext318OrderManager',
                component: BoundedContext318OrderManager
            },
            {
                path: '/boundedContext318s/orders/:id',
                name: 'BoundedContext318OrderDetail',
                component: BoundedContext318OrderDetail
            },



    ]
})
