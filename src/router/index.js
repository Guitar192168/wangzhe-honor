import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Main from '../views/Main';
import Hero from '../views/hero';

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'main',
  component: Main,
  children:[
  {path:'/',name:'home', component: Home},
  ]
},
{
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path:'/:id',name:'hero',component:Hero, props:true
}
]

const router = new VueRouter({
  routes
})

export default router
