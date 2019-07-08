import Dashboard from './components/Dashboard.vue'
const lazyAbout = () => import('./components/About.vue')

export const routes = [
  {path: '', component: Dashboard},
  {path: '/dashboard', component: Dashboard},
  {path: '/about', component: lazyAbout}
];