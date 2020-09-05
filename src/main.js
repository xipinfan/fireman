import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import VueRouter from 'vue-router'
import Sign from './components/Signin.vue'
import Medal from './components/Medal.vue'
import Contact from './components/Demo.vue'
import Record from './components/Records.vue'
import Chart from './components/Chart.vue'
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path:'/chart',name:'chart', component:Chart},
        {path:'/contact',name:'contact', component:Contact},
        {path:'/records',name:'record', component:Record},
        {path:'/medal',name:'medal', component:Medal},
        {path:'',name:'sign', component:Sign},
    ],
    mode:"history"
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
