import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import DetailProject from './views/DetailProject.vue'

import Ateliers from './views/Ateliers.vue'
import DetailAtelier from './views/DetailAtelier.vue'
import Racines from './views/Racines.vue'
import Infos from './views/Infos.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/', 
            name: 'home', 
            component: Home
        },
        {
            path: '/projects', 
            name:  'projects', 
            component: Projects
        },
        {
            path: '/project/:uid',
            name:'detail-serie', 
            component: DetailProject
        },
        {
            path: '/ateliers', 
            name:  'ateliers', 
            component: Ateliers
        },
        {
            path: '/atelier/:uid',
            name:'detail-atelier', 
            component: DetailAtelier
        },
        {
            path: '/racines', 
            name:'racines', 
            component: Racines
        },
        {
            path: '/infos', 
            name:'infos', 
            component: Infos
        },
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})