<template>
<!-- 自定义组件绑定原生事件 -->
    <div>
        <Alert show-icon>
            <h2>事件修饰符：</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">.native</template>
        </Alert>
        <Alert show-icon>
            <h2>按键修饰符：</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">回车键监听： .enter 或者 .13
                <button @keyup.enter="printTitle">按回车键执行 print</button>
                <button @keyup.13="printTitle">按回车键执行 print</button>
            </template>
        </Alert>
    </div>
</template>

<script>
    export default{
        name: 'ComponentModifier',
        methods: {
            printTitle() {
                alert("cilcked a title");
            }
        }
    }
</script>

<style scoped>
    /* 2w* */
</style>