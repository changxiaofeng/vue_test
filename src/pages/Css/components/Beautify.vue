<template>
    <!-- <Collapse active-key="1">
        <Panel key="1"> 一、文本溢出省略 -->
            <div slot="content">
                <h4>一、文本溢出省略</h4>
                <p>文本溢出省略分为：单行溢出和多行溢出省略；</p>
                <div>
                    <Alert>1、单行文本超出省略：三步：强制不换行、元素内容溢出处理和文本溢出省略；</Alert>
                    <div>（1）强制不换行：   white-space: nowrap;</div>
                    <div>（2）元素内容溢出： overflow: hidden;</div>
                    <div>（3）文本溢出省略： text-overflow: ellipsis;</div>
                </div>
                <div>
                    <Alert>2、多行文本超出省略：</Alert>
                    <div>WebKit内核浏览器多行文本溢出省略；</div>
                    <img src="../../../assets/images/ellipsis.png" alt="">
                </div>
            </div>
        <!-- </Panel>
    </Collapse> -->
</template>

<script>
    export default{
        name: 'Beautify'
    }
</script>

<style scoped>
    p{
        padding: 5px;
    } 
    img{
        padding: 5px;
        width: 560px;
    }
</style>