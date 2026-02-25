import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/projects/:slug', name: 'projects', component: Projects, props: true },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/resume', name: 'resume', component: Resume}

]

export default createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0 }) })