<template>
    <div>
        <Alert show-icon>
            组件的注册：全局注册 和 局部注册
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、全局注册：用Vue.component创建组件，注册之后可以在任何新创建的Vue根实例中使用；</p>
                <p>2、局部注册：在单个Vue格式的文件中创建组件，在需要用到的地方进行注册；（常用）</p>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                组件的局部注册需要：
                <p>1、一个组件文件(HelloWorld)</p>
                <p>2、在需要使用组件(HelloWorld)的vue文件(App)中引入组件(HelloWorld);</p>
                <p>3、在App的components中注册组件HelloWorld;</p>
                <p>4、在App的template中使用组件;</p>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                注意：自定义组件内的数据data必须是一个函数：
                <p>
                    data: function () {
                        return {
                            count: 0
                        }
                    }
                </p>
            </template>
        </Alert>
    </div>
</template>

<script>
    export default{
        name: 'ComponentCustom',
        data: function() {
            return{

            }
        }
    }
</script>