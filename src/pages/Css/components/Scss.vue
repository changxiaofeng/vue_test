<template>
    <Collapse active-key="1">
        <Panel key="1"> 一、SCSS介绍
            <div slot="content">
                <p>1、SASS是一款css预编译器，是对css的扩展；在CSS基础上增加变量、嵌套、混合等功能；</p>
                <p>
                    安装：npm install -g sass  <br>
                    检查版本号：sass --version  <br>
                    执行SASS命令将sass和.scss文件编译为css文件：sass source/stylesheets/index.scss build/stylesheets/index.css  <br>
                </p>
                <P>
                    2、SCSS：兼容了CSS3，推荐使用SCSS；
                </P>
            </div>
        </Panel>
        <Panel key="2">二、变量
            <div slot="content">
                <p>1、在CSS属性的基础上Sass提供了一些名为SassScript的新功能；</p> 
                <img src="../../../assets/images/scss.png" alt="" :style="{'width': '700px'}">
                <p>2、如果变量类型为字符串，一般不需要加引号，但是有一些特殊情况，比如字符串中有双斜杠“//”</p>
                <p>3、简单计算：简单的加减乘除；+ - * /</p>
                <p>4、插值法：#{}</p>
            </div>
        </Panel> 
        <Panel key="3">三、嵌套
            <div slot="content">
                <p>1、父选择器 &
                    直接使用嵌套外层的父选择器，例如hover，可以用&代表夫选择器；
                </p>
                <img src="../../../assets/images/4.jpg" alt="">
                <div>或者特殊一点的用法：</div>
                <img src="../../../assets/images/5.jpg" alt="">
            </div>
        </Panel>
        <Panel key="4">四、复用：mixin/include
            <div slot="content">
                
            </div>
        </Panel>
    </Collapse>
</template>

<script>
    export default{
        name: 'Scss'
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