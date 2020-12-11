// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store' 
import router from './router/index.js'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


Vue.config.productionTip = false

Vue.use(ViewUI);

// 4、创建和挂载跟实例
// 记得要通过router配置参数注入路由
// 从而让整个应用都有路由功能
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");