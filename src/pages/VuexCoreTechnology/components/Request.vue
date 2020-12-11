<template>
    <div>
        <p class="ui-btm">通过前面的学习，我们了解到Action是接收数据并处理逻辑的地方。</p>
        <Collapse active-key="1">
            <Panel key="1">
                一、Axios
                <div slot="content">
                    1、一般使用axios框架来做网络请求，用法加await关键字。
                    <div>（1）新建api文件夹 =》 cart.js文件存放cart的数据请求；</div>
                    <div>（2）写法：
                        <div>
                            <img src="../../../assets/images/axios.png" alt="">
                        </div>
                    </div>  
                    <Alert type="warning" show-icon>
                        <template slot="desc">
                            <div>注意：axios请求完后得到的是一个http response对象，所以如果想要获取服务器的内容，就需要读取这个response对象的data属性；
                                <p>比如：{ "data": { "users": [{...}] } },如果想要获取users api的users返回值，你得console.log(response.data.data.users);</p>
                            </div>
                        </template>
                    </Alert>
                </div>
            </Panel>
            <Panel key="2">
                二、action中运用axios
                <div slot="content">
                    <img src="../../../assets/images/axiosInAction.jpg" alt="">
                </div>
            </Panel>
            <Panel key="3">
                三、运用
                <div slot="content">
                    <p>我们最后在User.vue文件中添加store的依赖和配置</p>
                    <div>
                        <img src="../../../assets/images/axiosInVue.png" alt="">
                    </div>
                </div>
            </Panel>
            <Panel key="4">
                四、总结
                <div slot="content">
                    <p>1、接口亲贵写法有两种：（1）写道api目录下；（2）直接写道store的action中；本章节课主要学习写到store的action；</p>
                    <div>2、在vue组件中用有数据请求的store的action时，
                        <p>（1）初始化获取接口数据时,不需要给接口传参数的情况：</p>
                            <img src="../../../assets/images/1.png" alt="">
                        <p>（2）初始化获取数接口数据时，给接口传参数的情况：</p>
                            <img src="../../../assets/images/2.png" alt="">
                        <p>（3）其他事件触发获取接口数据时,（比如点击登录的onLogin事件）</p>
                            <img src="../../../assets/images/3.png" alt="">
                    </div>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script>
    export default{
        name: 'Request'
    }
</script>

<style scoped>
    .ivu-alert{
        margin-top: 16px;
    }
    .ui-btm{
        margin-bottom: 16px;
    }
</style>