<template>
    <Collapse active-key="1">
        <Panel key="1">
            一、Vuex Getter
            <div slot="content">
                <p>1、Vuex的Getter函数就是类似Vue computed函数的作用，Getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p>
                <p>2、Vue的computed函数的缺点就是不能复用。但是Vuex的Getter可以被多个组件复用。</p>
            </div>
        </Panel>
        <Panel key="2">
            二、定义Getter
            <div slot="content">
                <p>1、Getter接受state作为其第一个参数</p>
                <img src="../../../assets/images/getter1.png" alt="">
            </div>
        </Panel>
        <Panel key="3">
            三、使用Getter
            <div slot="content">
                <p>1、类似state的使用方式一样，可以使用mapGetters函数来完成映射。</p>
                <img src="../../../assets/images/getter2.png" alt="">
            </div>
        </Panel>
    </Collapse>
</template>

<script>
    export default{
        name: 'Getter'
    }
</script>

<style scoped>

</style>