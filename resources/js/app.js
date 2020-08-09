require('./bootstrap');

window.Vue = require('vue');

// Vue.component('home', require('./components/Home.vue').default);
Vue.component('app-home', require('./AppHome.vue').default)
Vue.component('pagination', require('laravel-vue-pagination'));


import router from './routes/routes'

const app = new Vue({
    el: '#app',
    router
});
