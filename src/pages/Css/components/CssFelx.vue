<template>
    <Collapse active-key="1">
        <Panel key="1"> 一、CSS Flex布局
            <div slot="content">
                <p>1、display: flex;
                    <Alert type="warning" show-icon>注意：设为Flex布局以后，子元素的float、clear 和 vertical-align属性将失效。</Alert>
                </p>
                <p>2、设置Flex布局的元素称“容器”，它的所有子元素称“项目”；</p>
            </div>
        </Panel>
        <Panel key="2">二、justify-content和align-items； （容器上的属性）
            <div slot="content">
                <Alert type="warning" show-icon>注意：justify-content和align-items是容器上的属性</Alert>
                <div class="direction">
                    <Alert>（1）justify-content-- 调整水平方向的分布；</Alert>
                    <Alert>（2）align-items-- 调整垂直方向上的分布； </Alert>
                    <div class="directionContent">
                        <div>
                            <h4>justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;</h4>
                            <img src="../../../assets/images/9.jpg" alt="">
                        </div>
                        <div>
                            <h4>align-items: flex-start | flex-end | center | baseline | stretch;</h4>
                            <img src="../../../assets/images/10.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
        <Panel key="3">三、flex-wrap-- 定义项目是否换行、以及如何换行； （容器上的属性）
            <div slot="content" class="wrap">
                <Alert>flex-wrap-- 定义项目是否换行、以及如何换行</Alert>
                <Alert type="warning" show-icon>注意：flex-wrap是容器上的属性</Alert>
                <h4>flex-warp: nowrap | wrap | wrap-reverse;</h4>
                <img src="../../../assets/images/19.jpg" alt="">
            </div>
        </Panel>
        <Panel key="4">四、flex:none;和flex:1;-- 控制项目的放大和缩小
            <div slot="content">
                <Alert>flex:none;和flex:1;-- 控制项目的放大和缩小</Alert>
                <h4>flex: none; 不允许项目压缩、放大</h4>
                <h4>flex: 1; 项目自动充满剩余空间</h4>
                <Alert type="warning" show-icon>注意：flex:none和flex:1 要在每一个项目上都设置</Alert>
                <Alert type="warning" show-icon>注意：flex:1 可以用来评分一行的空间</Alert>
            </div>
        </Panel>
        <Panel key="5">五、flex-direction-- 改变容器中主轴和交叉轴的方向；（容器的属性）
            <div slot="content">
                <Alert>flex-direction-- 改变容器中主轴和交叉轴的方向 </Alert>
                <Alert type="warning" show-icon>注意：flex-direction是容器的属性</Alert>
                <h4>flex-direction: row | row-reverse | column | column-reverse;</h4>
                <img src="../../../assets/images/8.jpg" alt="">
                <p>
                    主轴改变后的影响：设置了flex-direction: column; justify-content控制垂直方向，align-items控制水平方向；
                </p>
            </div>
        </Panel>
    </Collapse>
</template>

<script>
    export default{
        name: 'CssFelx'
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
    .direction img{
        width: 560px;
    }
    .wrap img{
        width: 360px;
    }
    .directionContent{
        display: flex;
        justify-content: space-between;
        /* align-items: flex-end; */
    }
</style>
