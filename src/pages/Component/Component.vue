<template>
    <Tabs value="name1">
        <TabPane label="自定义组件" name="name1">
            <ComponentCustom></ComponentCustom>
        </TabPane>
        <TabPane label="组件单向数据流" name="name2">
            <ComponentProp :title="title1"></ComponentProp>
            <h2>实例</h2>
            <HelloWorld :titlePro="title2" v-for="article in articleList" :key="article.title" :article="article"></HelloWorld>
        </TabPane>
        <TabPane label="自定义组件绑定原生事件" name="name3">
            <ComponentModifier @click="print(article)"></ComponentModifier>
        </TabPane>
        <TabPane label="自定义事件" name="name4">
            <ComponentCustomEvent></ComponentCustomEvent>
        </TabPane>
        <TabPane label="组件函数调用" name="name5">
            <ComponentFun></ComponentFun>
        </TabPane>
        <TabPane label="组件slot入门" name="name6">
            <ComponentSlot></ComponentSlot>
        </TabPane>
        <TabPane label="组件slot进阶" name="name7">
            <ComponentSlotAdvanced></ComponentSlotAdvanced>
        </TabPane>
        <TabPane label="实例" name="name8">
            <ExampleModel :visible.sync="visible">
                个性化内容
                
                <template v-slot:header>
                    <h1>Modal title</h1>
                </template>  
                
                <div>main content</div>  
                <div>main content</div>  
                
                <template v-slot:footer>
                    <p>Modal footer</p>
                </template>  
            </ExampleModel>
            <Button type="primary" @click="visible = true">打开 Modal</Button>
        </TabPane>
    </Tabs>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld'
    import ComponentCustom from './ComponentCustom.vue'
    import ComponentProp from './ComponentProp.vue'
    import ComponentModifier from './ComponentModifier.vue'
    import ComponentCustomEvent from './ComponentCustomEvent.vue'
    import ComponentFun from './ComponentFun'
    import ExampleModel from './ExampleModel.vue'
    import ComponentSlot from './ComponentSlot.vue'
    import ComponentSlotAdvanced from  './ComponentSlotAdvanced'
    export default{
        name: 'Component',
        components: {
            HelloWorld,
            ComponentCustom,
            ComponentProp,
            ComponentModifier,
            ComponentCustomEvent,
            ComponentFun,
            ExampleModel,
            ComponentSlot,
            ComponentSlotAdvanced
        },
        data: function() {
            return {
                title1: '我是父组件传给子组件的值title1',
                title2: '我是父组件传给子组件的值title2',
                articleList: [
                    {
                        cover: require('@/assets/images/article-cover-1.jpg'),
                        title: '首发！近百位漫画家创作了一本战“疫”漫画，全书免费读',
                        time: '2020-02-02 14:40:00',
                        content:
                            '这个春节与往年大不相同：大人们停止了走亲访友，孩子们被禁止外出玩耍，“口罩”取代“红包”成为正月里的关键词。也许你已经知道了，这些改变与新型冠状病毒有关，也许你还想知道，这讨厌的病毒为什么会突然出现、该怎么打败它，一级小朋友们可以帮什么忙？为了解答你的疑问，《中国少年报》、未来网联手近百位漫画家制作了这本电子漫画书，你应当知道的五件事。'
                    },
                    {
                        cover: require('@/assets/images/article-cover-2.jpg'),
                        title: '战友，你的“补给”到了！抗击疫情，青年突击队在行动',
                        time: '2020-02-01 18:51:00',
                        content:
                            '今天是2月1日，疫情仍在延续。在大部分人还在家里“避险”的时候，医生、警察们早已坚守在自己的工作岗位，用自己的血肉之躯铸就抗击疫情的钢铁长城。钢轨上，火车呼啸，铁路人们也早早地来到单位，他们为运输物资的重要“生命线”保驾护航。新型冠状肺炎疫情打响后，车站封闭、乡镇互关，交通不便，留守值班干部职工的日常生活、防控药品极缺。'
                    }
                ],
                visible: false,
            }
        },
    }
</script>

<style scoped>
    
</style>