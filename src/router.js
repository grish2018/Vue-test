import Vue from 'vue'
import VueRouter from 'vue-router'
import Messages from '@/views/Messages'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/:id',
            name: 'messages',
            component: Messages
        }

    ]
})