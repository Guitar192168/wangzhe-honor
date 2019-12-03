import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css';
import './assets/scss/style.scss';	
import router from './router';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default global options } */);

import Card from './components/Card';
Vue.component('m-card', Card);

import ListCard from './components/ListCard';
Vue.component('m-list-card', ListCard);


Vue.prototype.$http = axios.create({
	baseURL:'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
