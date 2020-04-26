require("./assets/stylesheets/styles.scss");
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import App from './App.vue'

Vue.use(VueRouter)

// fix
const router = new VueRouter({routes});

new Vue({
	router,
	el: '#app',
	render: h => h(App)
  })