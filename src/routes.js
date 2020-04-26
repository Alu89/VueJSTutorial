import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Form from './components/Form.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login},
    { path: '/form', component: Form},
];

export default routes;