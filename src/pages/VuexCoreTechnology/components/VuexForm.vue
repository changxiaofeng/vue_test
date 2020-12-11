<template>
    <div>
        <p class="ui-btm">搞定获取数据后，我们看一下提交数据，比如注册用户、点赞等等，这就需要往action函数传递参数了；下面通过登录看下如何传递参数去请求数据</p>
        <Collapse active-key="1">
            <Panel key="1">
                一、axios
                <div slot="content">
                    1、远程请求接口数据，且传给接口参数
                    <div>
                        <img src="../../../assets/images/axiosParam.png" alt="">
                    </div>
                </div>
            </Panel>
            <Panel key="2">
                二、action中运用axios 完整代码如下：
                <p slot="content">
                    <img src="../../../assets/images/axiosParams1.png" alt="">
                </p>
            </Panel>
            <Panel key="3">
                三、运用
                <div slot="content">
                    <p>最后在User.vue文件中添加store的依赖和配置</p>
                    <img src="../../../assets/images/axiosParams2.png" alt="">
                    <img src="../../../assets/images/axiosParams2s.png" alt="">
                </div>
            </Panel>
            <Panel key="4">
                四、注意
                <div slot="content">
                    <Alert type="warning" show-icon>
                        注意：使用store的action的时候有点不一样的是：我们只需给action函数传递第二个参数就可以了，因为第一个参数是Vuex的上下文，框架会自动注入的。
                    </Alert>
                    <img src="../../../assets/images/axiosParams2-1.png" alt="">
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script>
    export default{
        name: 'VuexForm'
    }
</script>

<style scoped>
    .ui-btm{
        margin-bottom: 16px;
    }
</style>