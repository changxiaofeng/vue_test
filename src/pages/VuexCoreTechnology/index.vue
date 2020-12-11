<template>
    <Tabs value="name1">
        <TabPane label="State/Muation/Action" name="name1">
            <ThreeCore />
        </TabPane>
        <TabPane label="Vuex Getter" name="name2">
            <Getter />
        </TabPane>
        <TabPane label="Vuex request" name="name3">
            <Request />
        </TabPane>
        <TabPane label="Vuex 表单" name="name4">
            <VuexForm />
        </TabPane>
    </Tabs>
</template>

<script>
    import ThreeCore from './components/ThreeCore.vue';
    import Getter from './components/Getter';
    import Request from './components/Request';
    import VuexForm from './components/VuexForm'
    export default{
        components: {
            ThreeCore,
            Getter,
            Request,
            VuexForm
        }
    }
</script>

<style scoped>
    ul{
        margin-left: 14px;
    }
    .writeMethod{
        padding-left: 22px;
    }
</style>