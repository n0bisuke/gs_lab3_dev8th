import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Admin from  './components/Admin.vue'
// const Menu = () => import('./components/Menu.Vue')
// const About = () => import('./components/About.vue')
// const Admin = () => import('./components/Admin.vue')
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
  { path: '/',
    name: 'homeLink',
    components: {
      default: Home,
      "ordering-guide": OrderingGuide,
      "delivery": Delivery,
      "history": History
    }
  },
  {path: '/menu', name: 'menuLink', component: Menu },
  {path: '/admin',
    name: 'adminLink',
    component: Admin,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
    alert('This area is for authorised users only, Please login to continue')
    next();
  }},
  {path: '/about', name: 'aboutLink',  component: About, children: [
    {path: '/contact', name: 'contactLink',  component: Contact},
    {path: '/history', name: 'historyLink',  component: History},
    {path: '/delivery', name: 'deliveryLink',  component: Delivery},
    {path: '/ordering-guide', name: 'orderingGuideLink',  component: OrderingGuide},
  ]},
  {path: '*', redirect: '/'}
];
