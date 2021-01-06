import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 1、定义（路由组件）
// import Home from '@/components/Home/Home'

// 2、定义路由  
// 每个路由应该映射一个组件，其中"component"可以是通过Vue.extend()创建的组件构造器,或者，只是一个组件配置对象
const routes = [
    // { path: '/Home', component: Home },
    
    { path: '/Watch', name: 'Watch', component: () => import('@/pages/Watch/Watch') },
    { path: '/Temp', name: 'Temp', component: () => import('@/pages/Temp/Temp') },
    { path: '/Computed', name: 'Computed',component: () => import('@/pages/Computed/Computed') },
    { path: '/Component', name: 'Component', component: () => import('@/pages/Component/Component') },
    // 路由 实例：全部课程
    { path: '/ComRouter', name: 'ComRouter', component: () => import('@/pages/ComRouter/ComRouter'),
        children: [
            { path: 'homes', name: 'Homes', component: () => import('../views/Homes.vue') },
            { path: 'courseall', name: 'CourseAll', component: () => import('../views/CourseAll.vue') },
            { path: 'coursedetail/:courseId', name: 'CourseDetail', component: () => import('../views/CourseDetail.vue') },
        ]
    },
    { path: '/RouteTabs', name: 'RouteTabs', component: () => import('@/pages/ComRouter/RouteTabs.vue') },
    // 实例，QQ空间
    { path: '/Example', name: 'Example',
        alias: '/',
        component: () => import('@/pages/Example/Example'),
        children: [
            { path: 'HomeQQ', name: 'HomeQQ', component: () => import('@/pages/HomeQQ/index.vue') },
            { path: 'mood', name: 'mood', component: () => import('@/pages/Mood/index.vue') },
            { path: 'mood/add', name: 'MoodAdd', component: () => import('@/pages/Mood/Add.vue') },
            { path: 'album', name: 'album', component: () => import('@/pages/Album/index.vue') },
            { path: 'album/add', name: 'AlbumAdd', component: () => import('@/pages/Album/Add.vue') },
            { path: 'album/detail', name: 'AlbumDetail', component: () => import('@/pages/Album/Detail.vue') }
        ]
    },
    {
        path: '/questions',
        alisa: '/',   alias: '/',  // 别名定为 /
        redirect: '/hottest',   // 重定向到 /hottest
        component: () => import('@/views/Questions.vue'),
        children: [
            { path: 'new', component: () => import('@/views/New.vue') },
            { path: 'hottest', component: () => import('@/views/Hottest.vue') },
            { path: 'unanswered', component: () => import('@/views/Unanswered.vue') }
        ]
    },
    {
        path: '/VuexIntroduction',
        name: 'VuexIntroduction',
        component: () => import('@/pages/VuexIntroduction/index.vue')
    },
    {
        path: '/VuexCoreTechnology',
        name: 'VuexCoreTechnology',
        component: () => import('@/pages/VuexCoreTechnology/index.vue')
    },
    {
        path: '/VuexModule',
        name: 'VuexModule',
        component: () => import('@/pages/VuexModule/index.vue')
    },
    {
        path: '/BasicDataType',
        name: 'BasicDataType',
        component: () => import('@/pages/Javascript/BasicDataType/index.vue')
    },
    {
        path: '/Boolean',
        name: 'Boolean',
        component: () => import('@/pages/Javascript/Boolean/index.vue')
    },
    {
        path: '/Css',
        name: 'Css',
        component: () => import('@/pages/Css/index.vue')
    },
    {
        path: '/ES6',
        name: 'ES6',
        component: () => import('@/pages/ES6/index.vue')
    },
    {
        path: '/ES6Command',
        name: 'ES6Command',
        component: () => import('@/pages/ES6Command/index.vue')
    },
    {
        path: '/Decon',
        name: 'Decon',
        component: () => import('@/pages/Decon/index.vue')   
    },
    { path: '*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

// 3、创建router实例，然后传'routes'配置

// 你换可以传别的配置参数 
export default new Router({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})