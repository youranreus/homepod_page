import { createApp } from 'vue'
import App from './App.vue'

//style sheets
import 'vant/lib/index.css';
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css';
import animate from 'animate.css'

//components
import { Popup } from 'vant';

//functional
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import { createStore } from 'vuex'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

const store = createStore({
    state () {
        return {
            articles:[],
            plugins:{},
            systemInfo:{
                version: '加载中',
                msg: '加载中',
                DB: '加载中'
            },
            OriginData:{},
            api: "https://i.exia.xyz"
        }
    },
    mutations: {
        updateSystemData(state, n){
            state.OriginData = n;
        },
        storeArts(state, n){
            state.articles = n;
        },
        storePlugins(state, n){
            state.plugins = n;
        },
        storeSystemInfo(state, n){
            state.systemInfo = n;
        }
    }
})


const X = createApp(App)
X.use(router)
X.use(animate)
X.use(Popup)
X.use(VueAxios, axios)
X.use(store)
X.mount('#app')
