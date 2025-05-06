import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/Home.vue'
import LoginComponent from './components/Login.vue'
import ProfileComponent from './components/Profile.vue'

const routes = [
    { name:'Home',
        path:'/',
        component:HomeComponent,
     },
     { name:'LoginComponent',
        path:'/login',
        component:LoginComponent,
     },
     { name:'ProfileComponent',
        path:'/profile/:name',
        component:ProfileComponent,
     }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;