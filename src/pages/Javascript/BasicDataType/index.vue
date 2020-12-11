<template>
    <Tabs value="name1">
        <TabPane label="变量" name="name1">
            <Variable />
        </TabPane>
        <TabPane label="数值类型" name="name2">
            <NumberType />
        </TabPane>
        <TabPane label="类型转换/字符串拼接" name="name3">
            <TypeChange />
        </TabPane>
        <TabPane label="运算符" name="name4">
            <Operator />
        </TabPane>
    </Tabs>
</template>

<script>
import Variable from './components/Variable.vue';
import NumberType from './components/NumberType.vue';
import TypeChange from './components/TypeChange.vue';
import Operator from './components/Operator.vue'
export default{
    name: ' ',
    components: {
        Variable,
        NumberType,
        TypeChange,
        Operator
    }
}
</script>

<style scoped>

</style>