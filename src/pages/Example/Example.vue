<template>
   <Tabs value="name1">
        <TabPane label="实战1-好友动态" name="name1">
            <Button type="primary" @click="toHomeQQ">跳转QQ空间</Button>
            <router-view></router-view>

            <!-- 2014年10月份
            我们认识到现在过了{{1385天}}秒 -->
        </TabPane>
        <TabPane label="实战2-说说" name="name2">
            
        </TabPane>
        <TabPane label="实战3-相册" name="name3">
            <!--  -->
        </TabPane>
   </Tabs>
</template>

<script>
    export default{
        name: 'Example',
        components: {
            
        },
        methods: {
            toHomeQQ() {
                this.$router.push(`/Example/HomeQQ`);
            }
        }
    }
</script>

<style scoped>
    /* 
     */
</style>