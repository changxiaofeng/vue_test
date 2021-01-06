<template>
    <Tabs value="name1">
        <TabPane label="let和const命令" name="name1">
            <LetConst/>
        </TabPane>
        <TabPane label="变量的解构赋值" name="name2">
            <Decon/>
        </TabPane>
    </Tabs>
</template>

<script>
    import LetConst from './components/LetConst.vue';
    import Decon from './components/Decon.vue';
    export default{
        name: 'ES6',
        components: {
            LetConst,
            Decon
        }
    }
</script>

<style scoped>
    /*  */
</style>