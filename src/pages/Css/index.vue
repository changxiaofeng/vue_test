<template>
    <Tabs value="name1">
        <TabPane label="CSS伪类" name="name1">
            <CssPseudoClass />
        </TabPane>
        <TabPane label="CSS装饰" name="name2">
            <h4>一、CSS装饰--box-shadow/text-shadow</h4>
            <div slot="content">
                <p>
                    1、box-shadow-- 盒子阴影
                    div{
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
                    }
                </p>
                <p>
                    2、text-shadow-- 文字阴影
                    span{
                        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
                    }
                </p>
            </div>
        </TabPane>
        <TabPane label="CSS Flex布局" name="name3">
            <CssFelx />
        </TabPane>
        <TabPane label="CSS高级美化" name="name4">
            <Beautify />
        </TabPane>
        <TabPane label="CSS预处理器" name="name5">
            <Scss />
        </TabPane>
        <TabPane label="CSS响应式" name="name6">
            
        </TabPane>
        <TabPane label="实战：微博个人页" name="name7">
            
        </TabPane>
    </Tabs>
</template>

<script>
    import CssPseudoClass from './components/CssPseudoClass.vue'; 
    import CssFelx from './components/CssFelx.vue';
    import Beautify from './components/Beautify.vue'; 
    import Scss from './components/Scss.vue';
    export default{
        name: 'Css',
        components: {
            CssPseudoClass,
            CssFelx,
            Beautify,
            Scss
        }
    }
</script>
  
<style scoped>
    
</style>