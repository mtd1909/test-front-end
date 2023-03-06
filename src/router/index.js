import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import Home from '../views/pages/Home.vue'
import Services from '../views/pages/Services.vue'
import News from '../views/pages/News.vue'
import Blog from '../views/pages/Blog.vue'
import Contact from '../views/pages/Contact.vue'

// Layouts
import Layout from '@/views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/services',
        name: 'Services',
        component: Services,
      },
      {
        path: '/news',
        name: 'News',
        component: News,
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
