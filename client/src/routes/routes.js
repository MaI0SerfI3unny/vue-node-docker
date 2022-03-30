import { createWebHistory,createRouter } from "vue-router";
import Home from '@/pages/Main/Main.vue'
import Login from '@/pages/Login/Login.vue'
import About from '@/pages/About/About.vue'
import Contact from '@/pages/Contact/Contact.vue'
import Register from '@/pages/Register/Register.vue'
import Admin from '@/pages/Admin/Admin.vue'
import AdminEdit from '@/pages/AdminEdit/AdminEdit.vue'
import Single from '@/pages/Single/Single.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component:Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
        {
            path: '/admin/:id',
            name: 'admin-edit',
            component: AdminEdit
        },
        {
            path: '/page/:id',
            name: 'single',
            component: Single,
        }
    ]
})

export default router; 