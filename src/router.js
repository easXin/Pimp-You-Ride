import Vue from 'vue'
import Router from 'vue-router'
import Levels from './components/Levels.vue'
import IDE from './views/IDE.vue'
import Login from './views/Login.vue'
import Leaderboard from './views/Leaderboard.vue';

import Signup from './views/Signup.vue'

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
            path: '/leaderboard',
            name: 'leaderboard',
            component: Leaderboard

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
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        
        {
            path: '/styleguide',
            name: 'styleguide',
            component: StyleGuide
        }
    ]
})
