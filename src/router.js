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
      name: 'home',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },
  ]
})
