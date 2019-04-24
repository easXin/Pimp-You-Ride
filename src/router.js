import Vue from 'vue'
import Router from 'vue-router'
import Levels from './components/Levels.vue'
import IDE from './views/IDE.vue'
import Login from './views/Login.vue'
import StyleGuide from './views/Styleguide.vue'
import LevelDescription from './components/LevelDescription.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Levels,
            props: true
        },
        {
            path: '/ide',
            name: 'ide',
            component: IDE,
            props: true
        },
        {
            path: '/description',
            name: 'levelDescription',
            component: LevelDescription
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/styleguide',
            name: 'styleguide',
            component: StyleGuide
        }
    ]
})