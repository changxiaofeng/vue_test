<template>
    <Collapse active-key="1">
        <Panel key="1"> 一、CSS伪元素--::after/::before
            <div slot="content">
                <div class="container">
                    <p>1、伪元素就是利用css代码在标签内部的前面，或者后面添加一个行内元素，这个行内元素你可以理解为span。</p>
                    <p>2、::after和::before是一样的，当我们需要第二个行内元素的时候，就需要用after。</p>
                    <img src="../../../assets/images/before.png" alt="">
                </div>
                <div class="afterOrBefore">
                    <h4>例子：</h4>
                    <p><span>主页</span></p>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="banner">
                        <!--可以使用列表完成小圆点的绘制，注意清除列表样式-->
                        <ul>
                            <li></li>
                            <li></li>
                            <li class="third"></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="clearFloat">
                        <div class="father-one clearfix">
                            <div class="son-one">son-one</div>
                            <div class="son-two">son-two</div>
                            <div class="son-three">son-three</div>
                        </div>
                        <!-- 添加father-one的兄弟元素 -->
                        <div class="father-two"></div>
                    </div>
                </div>
            </div>
        </Panel>
        <Panel key="2">二、css伪类--清除浮动
            <div slot="content">
                <p>1、哪个盒子的子元素有浮动，就在哪个盒子上添加清楚浮动。</p>
                <!-- .clearfix::after{
                    content: '';
                    display: block;
                    clear: both;
                } -->
                <img src="../../../assets/images/clearfix.jpg" alt="" :style="{'width':'240px','margin-left': '36px'}">
            </div>
        </Panel>
        <Panel key="3">三、CSS伪类--事件伪类
            <div slot="content">
                <p>1、hover --鼠标移动上去。    :hover{}</p>
                <p>2、active --鼠标点击时。（这里的点击是点住鼠标不松开）；  :active{}    <br>
                    注意：可以结合hover使用；一定要hover在active之前，否则不会生效。
                </p>
                <p>3、focus --获取焦点后。    :focus{}   <br>
                    一般用于具有焦点的元素，比如：input;
                </p>
                <Alert type="warning" show-icon>
                    注意点：
                    <template slot="desc">
                        <p>1、一个标签上可以添加多个:hover效果，并且都会生效；</p>
                        <div>
                            <p>2、:hover一个标签来改变另一个标签的属性；</p>
                            <h4>（1）通过父元素的:hover改变直接子元素的样式（注意这里是子元素不是后代元素）；</h4>
                            <img src="../../../assets/images/hover.jpg" alt="" :style="{'width':'240px','margin-left': '36px'}"> 
                            <h4>（2）通过兄弟元素的伪类改变另一个紧邻兄弟元素的属性（注意紧邻）</h4>
                            <img src="../../../assets/images/borderHover.jpg" alt="" :style="{'width':'240px','margin-left': '36px'}">
                        </div> 
                    </template>
                </Alert>

                <h4>实例</h4>
                <div class="search-box">
                    <input type="text" value="红米k20">
                    <div class="select-list">
                        <ul>
                            <li>小米9</li>
                            <li>Redmi K20 pro</li>
                            <li>Redmi K20 </li>
                            <li>Redmi note 7 Pro </li>
                            <li>Redmi note 7</li>
                            <li>小米电视4c</li>
                            <li>电视32英寸</li>
                            <li>笔记本Pro</li>
                            <li>小爱音箱</li>
                            <li>净水器</li>
                        </ul>
                    </div>
                    <div class="search-btn">
                        <span></span>
                    </div>
                </div>
            </div>
        </Panel>
        <Panel key="4">四、CSS伪类--列表伪类
            <div slot="content">
                <p>1、匹配父元素中的第一个子元素-- :first-child{}</p>
                <p>2、匹配父元素中最后一个子元素-- :last-child{}</p>
                <p>3、匹配父元素中的第n个子元素-- :nth-child(n)</p>
                <div>
                    （1）n代表从1开始的任意数字 <br>
                    （2）除了数字还可以写odd(奇数)、even(偶数)-- :nth-child(odd) 和 nth-child(even)；
                </div>
                <Alert type="warning" show-icon>
                    注意：
                    <template slot="desc">
                        <p>列表伪类的使用条件是，同一级别、相同元素</p>  
                    </template>
                </Alert>
            </div>
        </Panel>
        <Panel key="5">
            五、微博头部开发
            <div slot="content">
                
            </div>
        </Panel>
    </Collapse>
</template>

<script>
    export default{
        name: 'CssPseudoClass'
    }
</script>

<style scoped>
    p{
        padding: 5px;
    }
    /* 伪元素start */
        .afterOrBefore span{
            position: relative;
            padding-left: 28px;
            font-size: 18px;
            line-height: 24px;
        }
        .afterOrBefore span::before {
            content: '';
            /* 将添加的行内元素定位，并设置大小、背景 */
            position: absolute;
            left: 0px;
            width: 24px;
            height: 24px;
            background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-2-HTML-CSS/1.2/source/first-page.png) no-repeat center;
            background-size: contain;
        }
        .container img{
            width: 680px;
            margin-top: 10px;
        }
    /* 伪元素end */

    /* 同心圆start */
        .circle, .circle1{
            box-sizing: border-box;
            display: inline-block;
            width: 100px;
            height: 100px;
            margin: 20px auto;
            border-radius: 50%;
            background: #9995A5;
            padding: 15px;
            border: 10px solid #8E8A97;
        }
        .circle::before{
            content: '';
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #666278;
        }
    /* 同心圆end */

    /* banner开始 */
        .banner {
            position: relative;
            width: 850px;
            height: 394px;
            background: url(../../../assets/images/banner.png) no-repeat center;
            background-size: contain;
        }

        .banner::before {
            /*在这里使用伪元素完成左箭头*/
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url(../../../assets/images/left.png);
            background-size: 100%;
            position: absolute;
            top: 50%;
            margin-top: -15px;
        }

        .banner::after {
            /*在这里使用伪元素完成右箭头*/
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url(../../../assets/images/right.png);
            background-size: contain;
            position: absolute;
            top: 50%;
            right: 0;
            margin-top: -15px;
        }
        .banner ul{
            position: absolute;
            bottom: 16px;
            right: 26px;
        }
        .banner ul li{
            display: inline-block;
            box-sizing: border-box;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #9995A5;
            padding: 1px;
            border: 1px solid #8E8A97;
        }
        .banner ul li::before {
            content: '';
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #666278;
        }
        .banner ul li.third{
            background: #ffffff;
            width: 8px;
            height: 8px;
            padding: 0;
        }
        .banner ul li.third::before{
            content: '';
            width: 6px;
            height: 6px;
            background: #ffffff;
        }
    /* banner结束 */

    /* 清除浮动start */
        .clearFloat{
            width: 850px;
            margin-top: 20px;
        }
        .father-one {
            border: 2px solid #CE5E5E;
            text-align: center;
        }
        .father-one div{
            float: left;
            width: 33.33%;
            line-height: 100px;
            background-color: #7B909C;
        }
        .father-one div.son-two{
            background-color: #CACACA;
        }
        .father-two{
            height: 150px;
            background-color: #174159;
        }
        .clearfix::after{
            content: '';
            display: block;
            clear: both;
        }
    /* 清除浮动end */

    /* 事件伪类start */
        body {
            margin: 0;
            background-color: #fff;
        }
        ul,li {
            margin: 0px;
            padding: 0px;
            list-style: none;
        }
        .search-box {
            position: relative;
            box-sizing: border-box;
            width: 254px;
            height: 42px;
            background: #FFFFFF;
            border: 1px solid #E0E0E0;
        }
        .search-box>input {
            box-sizing: border-box;
            float: left;
            border: none;
            height: 40px;
            width: 209px;
            padding-left: 20px;
            outline: none;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 17px;
            color: #AEAEAE;
        }
        .search-box .search-btn {
            float: right;
            height: 42px;
            width: 42px;
            border: 1px solid #E0E0E0;
            box-sizing: border-box;
            margin-top: -1px;
            margin-right: -1px;
            padding: 12px;
        }
        .search-box>div>span {
            display: block;
            width: 16px;
            height: 16px;
            background: url(../../../assets/images/search-normal.png) no-repeat center;
            background-size: contain;
        }
        .search-box .select-list {
            position: absolute;
            top: 40px;
            left: -1px;
            width: 213px;
            height: 282px;
            background: #FFFFFF;
            border: 1px solid #FD6821;
            box-sizing: border-box;
            display: none;
            z-index: 99;
        }
        .search-box .select-list li {
            height: 28px;
            font-weight: normal;
            font-size: 12px;
            color: #000000;
            padding-left: 15px;
            line-height: 28px;
        }
        .search-box:hover {
            border: 1px solid #FD6821;
        }
        .search-box:hover .search-btn {
            border: 1px solid #FD6821;
        }
        .search-box input:focus+.select-list {
            display: block;
        }
    /* 事件伪类end */
</style> 


// 46*4+45+30+24+24+21=328