import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "../stores/user";

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Edit from '../views/Edit.vue'

const requireAuth= async(to, from, next)=>{
  const userStore = useUserStore();
  userStore.loading = true;
  const user = await userStore.currentUser();
  if(user){next()}
  else {next('/login')}
  userStore.loading = false;
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: requireAuth,
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/register',
      name: 'register',
      component: Register
    },{
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },

  ]
})



export default router
