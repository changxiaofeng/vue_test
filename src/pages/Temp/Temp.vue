<template>
    <Tabs value="name1">
        <TabPane label="hTML属性渲染语法" name="name1">
           
        </TabPane>
        <TabPane label="模板中使用表达式" name="name2">
            <p>是否通过考试: {{ flag?'恭喜你，通过了考试':'很抱歉，你未能通过考试' }}</p>
            <input type="text" v-model="chengji" />
        </TabPane>
        <TabPane label="条件渲染语句" name="name3">
           <div>
                <h4>v-if</h4>
                <span v-if="isShow">{{message}}</span>
            </div>
            <div>
                <h4>v-else</h4>
                <span v-if="isShow">{{message}}</span>
                <span v-else>{{defaultMessage }}</span>
            </div>
            <div>
                <h4>v-else-if</h4>
                <span v-if="questions[0].type==='fruits'">{{questions[0].content}}</span>
                <span v-else-if="questions[1].type==='vegetables'">{{questions[1].content}}</span>
                <span v-else>这个食物没有加载进来。。。</span>
            </div>
            <div>
                <p v-if="questions1[0].type==='PICK'">{{ questions1[0].content }}</p>
                <p v-else-if="questions1[1].type==='MULT'">{{ questions1[1].content }}</p>
                <p v-else>题目还没有加载进来...</p>
            </div>
            <div>
                <h4>v-show</h4>
                <Alert type="warning" show-icon>
                    <template slot="desc">
                        注意：v-show和v-if用法异同点
                        <p>相同点：都是在满足条件的时候显示内容。</p>
                        <p>不同点：v-show指令只是将标签的display设置为none；v-if指令，如果不满足条件，则此标签在dom中根本不存在。</p>
                    </template>
                </Alert>
            </div>

            <div class="img-box">
                <div><img :src="imgList[0].url" alt="" /><span class="news" v-if="imgList[0].isShow==='new'">{{tip}}</span></div> 
                <div><img :src="imgList[1].url" alt="" /><span class="news" v-if="imgList[1].isShow==='new'">{{tip}}</span></div> 
                <div><img :src="imgList[2].url" alt="" /><span class="news" v-if="imgList[2].isShow==='new'">{{tip}}</span></div> 
                <div><img :src="imgList[3].url" alt="" /><span class="news" v-if="imgList[3].isShow==='new'">{{tip}}</span></div> 
                <div><img :src="imgList[4].url" alt="" /><span class="news" v-if="imgList[4].isShow==='new'">{{tip}}</span></div> 
            </div>

            <div class="img-box">
                <div v-for="(item,index) in imgList" :key="index">
                    <img :src="item.url" alt="" :class="{hover:indexs===1}" @mouseover="indexs=1" @mouseout="indexs=-1"/>
                    <img :src="item.url" alt="" :style="indexs===1 ? hover: ''" @mouseover="indexs=1" @mouseout="indexs=-1"/>
                    <span class="news" v-if="item.isShow==='new'">{{tip}}</span>
                </div>
            </div>
        </TabPane>
        <TabPane label="列表渲染语句" name="name4">
            <ul>
                <li v-for="item in 5" :key="item">{{ item }}</li>
            </ul>

            <ul>
                <li v-for="(item,index) in nameList" :key="index">{{ index + 1 }}---{{ item }}</li>
            </ul>

            <ul>
                <li v-for="(value,key,index) in book" :key="index">值：{{ value }}--键：{{ key }}--索引：{{ index }}</li>
            </ul>

            <ul>
                <li v-for="(item,index) in books" :key="index">
                    {{ index+1 }}----{{ item.title }}----{{ item.author }}----{{ item.publishedTime }}
                </li>
            </ul>
        </TabPane>
    </Tabs>
</template>

<script>
    export default{
        name: 'Temp',
        data() {
            return{
                chengji: '',
                flag: true,

                // 条件渲染语句
                message: '当满足条件的时候显示message内容',
                defaultMessage: '优客达',
                questions: [
                    {
                        type: 'fruits',
                        content: '橘子'
                    },
                    {
                        type: 'vegetables',
                        content: '西红柿'
                    },
                    {
                        type: 'meat',
                        content: '驴肉'
                    }
                ],
                questions1:[
                    {
                        type:"PICK",
                        content:"这是一道选择题"
                    },
                    {
                        type:"MULT",
                        content:"这是一道多选题"
                    },
                    {
                        type:"ESSAY",
                        content:"这是一道论述题"
                    }
                ],
                tip: '新',
                imgList: [
                    {
                        isShow: 'new',
                        url: "http://static.haocheedai.com/data/media/brand/25/311/311_210140.jpg",
                    },
                    {
                        isShow: 'new',
                        url: "//static.haocheedai.com/data/media/brand/112/32611/32611_210140.jpg"
                    },
                    {
                        isShow: 'old',
                        url: "//static.haocheedai.com/data/media/brand/5/2297/2297_210140.jpg"
                    },
                    {
                        isShow: 'old',
                        url: "//static.haocheedai.com/data/media/brand/5/52/52_210140.jpg"
                    },
                    {
                        isShow: 'new',
                        url: "//static.haocheedai.com/data/media/brand/125/4521/4521_300200.jpg"
                    },
                ],
                indexs: -1,

                // 列表渲染语句
                nameList:["张淮森","周逸依","梁澄静","宁古薄","丘约靖"],
                book:{
                    bookName:'指环王',
                    author:'JK 罗琳'
                },
                books: [
                    {
                        title: '《魔戒》',
                        author: '约翰·罗纳德·瑞尔·托尔金',
                        publishedTime: '1954'
                    },{
                        title:'《哈利·波特》',
                        author:'J·K·罗琳',
                        publishedTime:'1997'
                    },{
                        title:'《人性的弱点》',
                        author:'戴尔•卡内基',
                        publishedTime:'2008'
                    }
                ],
                hover: {
                    border: '1px solid blue',
                }
            }
        },
        methods:{
            isShow(){
                console.log("this.message的值为"+this.message);
                if(!this.message) 
                    return false;
                return true;
            }
        },
        computed: {
            hoverObj() {
                return{
                    hover: this.indexs === 1
                }
            }
        },
        watch: {
            chengji(newValue,oldValue) {
                console.log(oldValue);
                console.log(newValue);
                this.chengji = newValue;
                if(newValue >= 60) {
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }
        }
    }
</script>

<style scope>
    .img-box{
        width: 460px;
        margin: 10px;
        padding: 10px;
        background: #f2f2f2; 
    }
    .img-box div{
        display: inline-block;
    }
    .img-box img{
        display: inline-block;
        width: 100px;
        height: 100px;
    }
    .img-box span.news{
        position: relative;
        top: -94px;
        background: orange;
        border-radius: 50%;
        color: #fff;
    }
    .hover{
        border: 1px solid blue;
    }
</style>