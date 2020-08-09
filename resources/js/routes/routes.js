import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: home,
        name:'home'
    },
    {
        path: '/post/:slug',
        name: 'postDetails',
        component: () => import('../components/postDetails.vue')
    },
    {
        path: '/posts/category/:slug',
        name: 'PostCategory',
        component: () => import('../components/PostCategory.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register.vue')
    }
]
const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router