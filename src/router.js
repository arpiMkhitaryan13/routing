import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Table from './components/Table'
import Typography from './components/Typography'
import Notifications from './components/Notifications'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
  ]
})
