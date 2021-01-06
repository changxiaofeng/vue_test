<template>
    <Tabs value="name1">
        <TabPane label="声明式渲染" name="name1">

        </TabPane>
        <TabPane label="处理用户输入" name="name2">
            <div>
                <userInput />
                <div :value1="value" @input="value = arguments[0]">{{value}}</div>
            </div>
        </TabPane>
        <TabPane label="处理用户事件" name="name3">
            
        </TabPane>
        <TabPane label="监听数据变化" name="name4">
            <h1>侦听器  watch: {}</h1>
            <div>
                <p>1、你点击按钮的次数是：{{count}}</p>
                <button @click="add">点击</button>
            </div>

            <h2>2、侦听器更多的是用在异步操作中</h2>
            <div>
                <h4>
                    inputValue(value,oldValue) { } <br>
                    第一个参数为新值，第二个参数为旧值，不能调换顺序 <br>
                </h4>
                <input type="text" v-model="inputValue">
                <p>input输入框的值为{{passedInputValue}}</p>
            </div>

            <h2>3、handler方法和immediate属性</h2>
            <div>
                <h4>（1）watch里写的方法默认写的就是hander，Vue.js会去处理这个逻辑，最终编译出来的其实就是这个handler。</h4>
                <h4>（2）如果immediate设置了false，那么在页面第一次渲染时候不会触发侦听器。</h4>
                <h4>（3）使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。</h4>
                <h4>（4）immediate:true代表最初绑定值得时候也执行函数。反之不会执行。</h4>
                
                <p>FullName: {{FullName}}</p>
                <p>FirstName:  <input type="text" v-model="FirstName"></p>
            </div>

            <h2>4、deep深度侦听</h2>
            <div>
                
            </div>
            <div>
                
            </div>
        </TabPane>
    </Tabs>
</template>

<script>
    import userInput from './components/userInput'
    export default{
        components: {
            userInput
        },
        name: 'Watch',
        // 数据
        data() {
            return{
                count: 0,
                inputValue: '',
                passedInputValue: '',
                FirstName: 'Su',
                lastName: 'Junyang',
                FullName: '',
                value: '123'
            }
        },
        // 方法
        methods: {
            add() {
                this.count++;
            }
        },
        // 侦听器
        watch: {
            count() {
                console.log('count发生了变化');
            },
            inputValue(value,oldValue) {
                // 第一个参数为新值，第二个参数为旧值，不能调换顺序
                console.log(`新值：${value}`);
                console.log(`旧值：${oldValue}`);
                setTimeout(()=>{
                    this.passedInputValue = this.inputValue; 
                }, 1000)
            },
            // 如果immediate设置了false，那么在页面第一次渲染时候不会触发侦听器 
            FirstName: {
                // watch里写的方法默认写的就是hander，Vue.js会去处理这个逻辑，最终编译出来的其实就是这个handler。
                handler(newName, oldName) {
                    console.log(newName);
                    this.FullName = newName + '' + this.lastName;
                },
                // 如果immediate设置了false，那么在页面第一次渲染时候不会触发侦听器
                // 使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。
                // immediate:true代表最初绑定值得时候也执行函数。反之不会执行。
                immediate: false
            }
        }
    }
</script>


<style scope>
    h1{
        margin-bottom: 50px;
    }
    h2{
        padding: 40px 0 10px 0;
    }
    h4{
        padding: 10px 0;
    }
</style>
