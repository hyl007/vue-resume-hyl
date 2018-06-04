const routes = [
    {path: '/', component: window.Appmain},
    {path: '/login', component: window.Login},
    {path: '/register', component: window.Register}
]
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router,
}).$mount('#app')
