import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name:'Home', component: Home},
        {path:'/feedback', name:'Feedback', component: ()=> import('../pages/AddFeedback.vue')},

    ]
})

export default router