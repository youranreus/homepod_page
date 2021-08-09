import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css';
import animate from 'animate.css'
import router from './router'
import { Popup } from 'vant';
import 'vant/lib/index.css';

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

const X = createApp(App)
X.use(router)
X.use(animate)
X.use(Popup)
X.use(VueAxios, axios)
X.mount('#app')
