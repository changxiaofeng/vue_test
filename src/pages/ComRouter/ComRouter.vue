<template>
    <Tabs value="name1">
        <TabPane label="安装、配置 Router" name="name1">
            
        </TabPane>
        <TabPane label="添加路由" name="name2">
            
        </TabPane>
        <TabPane label="路由布局管理" name="name3">
            
        </TabPane>
        <TabPane label="动态路由" name="name4">
            
        </TabPane>
        <TabPane label="页面跳转" name="name5">
            <ComRouterToPage />
        </TabPane>
        <TabPane label="重定向和别名" name="name6">
            <Redirect />
        </TabPane>
        <TabPane label="监听路由" name="name7">
            <WatchRouter />
        </TabPane>
        <TabPane label="网络请求async和await" name="name8">
            <AsyncAwait />
        </TabPane>
        <TabPane label="路由实例" name="name9">
            <Button @click="toComRouter">返回ComRouter页面</Button>
            <Button type="primary" @click="toHomes">跳转课程首页</Button>
            <div class="banner">优课达</div>
            <!-- 路由匹配到的组件将渲染在这里 -->
            <!-- 在本例中为 List.vue 组件或 Add.vue 组件 -->
            <router-view></router-view>
        </TabPane>
    </Tabs>
</template>

<script>
    import Homes from '../../views/Homes'
    import ComRouterToPage from './ComRouterToPage'
    import Redirect from './Redirect'
    import RouteTabs from './RouteTabs'
    import WatchRouter from './WatchRouter'
    import AsyncAwait from './AsyncAwait'
    export default{
        name: 'ComRouter',
        components: {
            Homes,
            ComRouterToPage,
            Redirect,
            RouteTabs,
            WatchRouter,
            AsyncAwait
        },
        methods: {
            toHomes() {
                this.$router.push(`/ComRouter/homes`);
            },
            toComRouter() {
                this.$router.push('/ComRouter');
            }
        }
    }
</script>

<style scoped>
    /*  */
</style>