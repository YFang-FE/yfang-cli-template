import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import api from '@/apis/index.js'
import EventBus from '@/base/eventBus/index.js'
// import "./utils/flexible" // 移动端适配专用
import './index.scss'

// 注册路由
Vue.use(VueRouter)
Vue.use(EventBus)
// 将ajax请求方法赋给$ajax
Vue.prototype.$ajax = api

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
})
