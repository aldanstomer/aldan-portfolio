import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'
import DesignsView from '../components/sections/DesignsView.vue'
import DevView from '../components/sections/DevView.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/designs/:slug', name: 'designs', component: DesignsView },
    { path: '/projects/:slug', name: 'projects', component: DevView }

]

export default createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0 }) })