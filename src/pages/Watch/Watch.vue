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
            <div>
                <p>你点击按钮的次数是：{{count}}</p>
                <button @click="add">点击</button>
            </div>
            <div>
                <p>2、侦听器更多的是用在异步操作中</p>
                <input type="text" v-model="inputValue">
                <p>input输入框的值为{{passedInputValue}}</p>
            </div>
            <div>
                <p>3、handler方法和immediate属性</p>
                <p>FullName: {{FullName}}</p>
                <p>FirstName:  <input type="text" v-model="FirstName"></p>
            </div>
            <div>
                <p>4、deep深度侦听</p>
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
            // 如果设置了false，那么在页面第一次渲染以后不会触发侦听器 
            FirstName: {
                handler(newName, oldName) {
                    console.log(newName);
                    this.FullName = newName + '' + this.lastName;
                },
                // 如果设置了false，那么在页面第一次渲染以后不会触发侦听器
                immediate: false
            }
        }
    }
</script>


<style scope>
    /* 38233.43-(1800*3)=38233.43-(5400+455+1666.67+5592.21=13113.88)=25119.55+3000=28119.55 */ 
</style>
