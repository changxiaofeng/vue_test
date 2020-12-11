<template>
    <div class="hello">
        <!-- 基础使用 -->
        <div>
            <Alert show-icon>
                <h2>基础使用：</h2>
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">父组件给子组件传值：prop的使用方法</template>
            </Alert>
            <Alert type="warning" show-icon>
                1、父组件中，传一个值给子组件：《HelloVue  :title="title1"》《/HelloVue》
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    注意：
                    <p>（1）title1是父组件的data中定义的数据，而title则是子组件中接收数据时的变量名；</p>
                    <p>
                        data: function() {
                            return {
                                title1: '我是父组件传给子组件的值title1',
                                title2: '我是父组件传给子组件的值title2'
                            }
                        },
                    </p>
                    <p>（2）因为title1是变量，所以title前需要加 :</p>
                </template>
            </Alert>
            <Alert type="warning" show-icon>
                1、子组件中，用prop接收title： props: [title]；   页面html写法不变
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    注意： 
                    <p>（1）在子组件中prop属性的写法，因为传过来的值可能不止一个，因此这里是个数组，其中的每一项均为传过来的值的名称。</p>
                    
                </template>
            </Alert>
            <h2 class="baseEg">eg(基础使用实例)：<span>{{ title }}</span> </h2>
        </div>
        <!-- 进阶使用 -->
        <div>
            <Alert show-icon>
                <h2>进阶使用</h2>附带类型声明
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    <p>1、在prop对象中声明，类型首字母大写，props: {title: String}； </p>
                    <p>2、传入多个用逗号隔开：多类型props: {title: String,likes: [String, Number]}</p>
                </template>
            </Alert>
        </div>
        <!-- 单向数据流 -->
        <div>
            <Alert show-icon>
                <h2>单向数据流：prop只能实现从父到子的数据传递，不能从子到父；</h2>
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    <p>（1）prop可以实现父到子的数据传递；</p>
                    <p>（2）父组件中数据变化，会通过prop传递到子组件；</p>
                    <p>（3）子组件不能直接修改父组件通过prop传递过来的数据；</p>
                </template>
            </Alert>
            <Alert type="warning" show-icon>
                1、prop传入的数据需要处理
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    用计算属性对数据进行处理：computed:{}
                </template>
            </Alert>
            <Alert type="warning" show-icon>
                2、prop传入的数据作为本地数据使用
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    定义一个本地的data属性并将这个prop用作其初始值
                </template>
            </Alert>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ComponentProp',
    props: [
        'title',
    ],
    
}
</script>

<style scoped>
    h2.baseEg{
        margin-bottom: 30px;
    }
</style>