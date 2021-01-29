<template>
    <div>
        <Alert show-icon>
            <h2>slot即插槽</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                相当于在子组件的DOM中留一个位置，父组件如果有需要，就可以在插槽里添加内容。
            </template>
        </Alert>
        <Alert show-icon>
            <h2>slot的基础使用</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、子组件中，《slot》我是插槽内容《/slot》；标签中的内容是后备内容，也可以为空</p>
                <p>后备内容：当父组件不在插槽里添加内容时，显示插槽的内容。</p>
                <p>2、父组件中，两种情况：</p>
                <p>（1）不向子组件插槽添加内容：显示的是子组件插槽的内容；《Modal》《/Modal》</p>
                <p>（2）向子组件插槽添加内容，显示的是添加的内容;《Modal》添加的内容《/Modal》</p>
            </template>
        </Alert>
    </div>
</template>

<script>
    export default{
        name: 'Introduction',
        data: function() {
            return{

            }
        }
    }
</script>

<style scoped>

</style>