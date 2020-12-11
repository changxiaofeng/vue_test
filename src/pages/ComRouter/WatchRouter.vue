<template>
    <div>
        <Alert show-icon>
            <h2>一、监听路由$route的变化</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、用到的知识点：watch和$route</p>
                <p>2、watch即数据变化监听；   $route即当前路由</p>
                <p>
                    路由监听写法：
                    watch:{
                        $route(to, from) {
                            console.log(to, from);
                        }
                    }
                </p>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                注释：to是变化后的路由，from是变化前的路由。
            </template>
        </Alert>

        <Alert show-icon>
            <h2>二、监听路由的使用</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <h3>1、基础样式</h3>
                <h3>2、定义tab点击事件</h3>
                <h3>3、监听路由变化，更新tab样式</h3>
                <h3>4、处理特殊情况</h3>
            </template>
        </Alert>
        <div class="watchTab">
            <h3>实例：</h3>
            <EgTabs />
        </div>
    </div>
</template>

<script>
    import EgTabs from './EgTabs'
    export default{
        name: 'WatchRouter',
        components: {
            EgTabs
        }
    }
</script>

<style scoped>
    .watchTab{
        width: 30%;
        border: 1px solid #f2f2f2;
    }
</style>