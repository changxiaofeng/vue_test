<template>
    <Tabs value="name1">
        <TabPane label="计算属性" name="name1">
            <Alert show-icon>1、计算属性写法：computed:{} 和data、methods、watch是一个级别的，位置一样
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc"></template>
            </Alert>
            <!-- 计算属性写法实例 -->
            <div>
                <p>原字符串： {{ message }}</p>
                <p>反转后的字符串：{{ reverseMessage }}</p>
            </div>
            
            <Alert show-icon>2、计算属性和方法的区别
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    <p>1》computed计算属性methods也可以实现这样的效果，只要将reverseMessage移动到methods中即可。但是，计算属性(computed)是基于它们的响应式依赖进行计算的。意思是：<br>
                    <p>  （1）当message发生改变，访问reverseMessage计算属性会重新计算，然后返回计算结果；</p>    
                    <p>（2）message不发生改变，reverseMessage计算属性会返回之前的计算结果，而不会重新计算。</p> 
                    <p>2》而，methods在每次访问的时候，都会执行方法体力的逻辑，然后返回结果。</p> 
                </template>
            </Alert>
            
            <div>
                <h3>实例：使用计算属性来完成一个案例：定义数组对象bookList,通过点击按钮来显示对应内容</h3>
                <ul class="bookList">
                    <li class="item" v-for="(item,index) in filterBookList" :key="index">{{ index+1 }}---{{ item.name }}</li>
                </ul>
                <button @click="flag = 0">全部</button>
                <button @click="flag = 1">已读</button>
                <button @click="flag = 2">未读</button>
            </div>
        </TabPane>
        <TabPane label="动态class" name="name2">
            <Alert type="warning" show-icon>
                <template slot="desc">
                    动态class有两种语法：对象语法 和 数组语法
                </template>
            </Alert>
            <Alert show-icon>1、对象语法：《div v-bind:class="{ active: isActive }"》《/div》
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    <p>（1）active为类名，isActive是一个布尔值，可以是变量，也可以是方法(返回值是布尔类型的)，isActive的真假决定active类是否生效。</p>
                    <p>（2）可以绑定多个类名：《div v-bind:class="{ active: isActive,'light-bg':true,lightText:false}"》《/div》</p>
                </template>
            </Alert>
            <!-- 对象语法的实例 -->
            <div>
                <ul id="#app">
                    <!-- @mouseover:绑定鼠标移动上去事件     @mouseout:绑定鼠标移动下去事件-->
                    <div class="base" :class="{hover:index===1}" @mouseover="index=1" @mouseout="index=-1">选项选项</div>
                </ul>

                <h2>对象写在计算属性里</h2>
                <ul>
                    <div class="base" :class="hoverObj" @mouseover="index=1" @mouseout="index=-1">选项选项</div>
                </ul>
            </div>
            <Alert show-icon>2、数组语法：《div class="base" v-bind:class="['red','size','blue']"》选项选项《/div》
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    <p>（1）数组中可以使用三元表达式：  《div class="base" v-bind:class="['red','size',{blue:isActive}]"》选项选项《/div》</p>
                </template>
            </Alert>
            <!-- 数组语法的实例 -->
            <div>
                <!-- 数组中可以使用三元表达式 -->
                <div class="base" v-bind:class="['red','size',isActive?'blue':'']">选项选项</div>
                <!-- 数组中可以使用三元表达式 （推荐用这种）-->
                <div class="base" v-bind:class="['red','size',{blue:isActive}]">选项选项</div>
            </div>
            
        </TabPane>
        <TabPane label="动态style" name="name3">
             <Alert type="warning" show-icon>
                <template slot="desc">
                    动态style有两种语法：对象语法 和 数组语法
                </template>
            </Alert>
            <Alert show-icon>1、对象语法：
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    1》
                    <p>（1）《div :style="{background:'red','font-weight':700,'font-size':'20px'}"》style动态样式《/div》</p>
                    <p>（2）《div :style="baseStyle"》style动态样式《/div》</p>
                    2》
                    <p>注意：css属性是两个单词，例如：font-size的有两种写法：（1）驼峰命名发（2）给属性用单引号引起来；移植到data中也是同样的。</p>
                    <p>《div :style="{'font-size':'20px'}"》多姿多彩《/div》</p>
                    <p>《div :style="{fontSize:'20px'}"》多姿多彩《/div》</p>
                </template>
            </Alert>
            <div>
                <p>对象语法实例：</p>
                <div :style="baseStyle">style动态样式</div>
            </div>
            <Alert show-icon>2、数组语法：
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                    <p>《div :style="[baseStyle,hoverStyle]"》多姿多彩《/div》</p>
                    <p>《div :style="[baseStyle,isActive ? hoverStyle:'']"》多姿多彩《/div》</p>
                </template>
            </Alert>
            <div>
                <p>数组语法实例：</p>
                <div :style="[baseStyle,hoverStyle]">多姿多彩</div>
                <div :style="[baseStyle,isActive ? hoverStyle: '']">多姿多彩</div>
            </div>
        </TabPane>
    </Tabs>
</template>

<script>
    export default{
        name: 'Computed',
        data() {
            return{
                message: "优课达--学的比别人好一点～",
                bookList: [
                    {
                    name: "哈利波特",
                    isRead: true
                    },
                    {
                    name: "简爱",
                    isRead: true
                    },
                    {
                    name: "指环王",
                    isRead: false
                    },
                    {
                    name: "红楼梦",
                    isRead: false
                    }
                ],
                flag: 0,
                isActive: false,
                index: -1,

                // 动态style
                baseStyle: {
                    width:'300px',
                    height:'100px',
                    border:'1px solid black',
                    margin:'10px 0',
                },
                hoverStyle: {
                    background:'red',
                    'font-weight':700,
                    'font-size':'20px',
                }
            };
        }, 
        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('')
            }, 
            filterBookList() {
                if(this.flag === 0) {
                    return this.bookList;
                } else if(this.flag === 1) {
                    return this.bookList.filter(item => {
                        return item.isRead === true;
                    });
                } else if(this.flag === 2) {
                    return this.bookList.filter(item => {
                        return item.isRead === false;
                    });
                } else{
                    return [];
                }
            },
            // 对象写在计算属性里
            hoverObj(){
                return {
                    hover: this.index === 1
                }
            },
        }
    }
</script>

<style scoped>
    /* 基础样式 */
    .base{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px;
        border-radius: 5px;
        color: #FEFEFE;
        width: 300px;
        height: 50px;
        background: #8D999D;
    }
    /* 动态改变的样式 */
    .hover{
        background: #FD6821;
        border: 1px solid blue;
    }
    .red{
        color: red;
    }
    .size{
        font-size: 22px;
    }
    .blue{
        color: blue;
    }
</style>