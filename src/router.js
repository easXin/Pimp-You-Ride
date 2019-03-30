import Vue from 'vue'
import Router from 'vue-router'
import Levels from './components/Levels.vue'
import IDE from './views/IDE.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Levels
        },
        {
            path: '/ide',
            name: 'ide',
            component: IDE
        }
    ]
})