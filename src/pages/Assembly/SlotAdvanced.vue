<template>
    <div>
        <Alert show-icon>
            <h2>slot进阶</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">多个插槽</template>
        </Alert>
        <Alert show-icon>
            <h2>《slot》元素的特殊属性：name</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、name属性用来定义额外的插槽，称为“具名插槽”；不带name属性的称为“匿名插槽”；</p>
                <p>2、在向具名插槽提供内容的时候，在《template》元素上使用v-slot指令，即v-slot:header;</p>
                <p>子组件中，《header》《slot name="header"》《/slot》《header》</p>
                <p>父组件中，《template v-slot:header》这里写header插槽的内容《/template》</p>
            </template>
        </Alert>
    </div>
</template>

<script>
    export default{
        name: 'SlotAdvanced',
        data: function() {
            return{
                
            }
        }
    }
</script>

<style scoped>

</style>