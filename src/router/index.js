import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name:'Home', component: Home},
        {path:'/feedback', name:'Feedback', component: ()=> import('../pages/AddFeedback.vue')},
        {path:'/roadmap', name:'Roadmap', component: ()=> import('../pages/Roadmap.vue')},

    ]
})

export default router