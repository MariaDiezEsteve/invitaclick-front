import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import LoginView from '../views/LoginView'
import ProfileView from '../views/ProfileView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: ProfileView,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
