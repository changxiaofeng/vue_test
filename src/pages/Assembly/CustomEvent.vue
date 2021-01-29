<template>
    <!-- 自定义事件组件 -->
    <div>
        <!-- 自定义事件 -->
        <Alert show-icon>
            <h2>1、自定义事件</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <div>
                     1、父组件中，v-on:upVote="handleLikes(article)" 给子组件绑定自定义事件。
                    <p>（1）v-on:upVote(自定义事件)   v-on:click(点击事件)</p>
                </div>
                <div>
                    2、在子组件中调用自定义事件（两种写法）：
                    <p>（1）在 template 中直接调用自定义事件 upVote。  @click="$emit('upVote')"</p>
                    <p>
                        （2）如果要执行的代码多可以这样写：
                        《button @click="childEvent"》《/button》
                        methods: {
                            childEvent: function() {
                                // 调用自定义事件upVote
                                this.$emit('upVote');
                                // 要执行的其他代码
                            }
                        }
                    </p>
                </div>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            注意：
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、handleLikes：父组件中修改数据的方法</p>
                <p>2、upVote：自定义事件名</p>
                <p>3、childEvent：子组件中的按钮点击时调用的方法</p>
            </template>
        </Alert>

        <!-- 自定义事件的参数 -->
        <Alert show-icon>
            <h2>2、自定义事件的参数</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1》prop可以完成父组件到子组件的数据传递；自定义事件完成子组件到父组件的数据传递</p>
                <p>2》
                    <p>1、父组件中，v-on:upVote="handleLikes"</p>
                    <p>2、子组件中，@click="childEvent" </p>
                    <p> 
                        methods: {
                            childEvent: function() {
                                this.$emit('upVote',this.article);
                                // 调用自定义事件upVote,这里的第二个参数最后会传到父组件中的handleLikes方法里，（这里可以有多个参数）
                                
                                // 要执行的其他代码
                            }
                        }
                    </p>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            注意：
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、在子组件中调用父组件的方法</p>
                <p>2、把子组件的数据通过自定义事件参数的形式传给父组件</p>
            </template>
        </Alert>

        <!-- 自定义事件中的双向绑定 -->
         <Alert show-icon>
            <h2>3、自定义事件中的双向绑定：修饰符 .sync</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、父组件中，:count.sync="count";</p>
                <p>2、子组件中，@click="$emit('updata:count',count+1)";</p>
                <p>解释：用updata:count的模式触发事件，把count+1赋值给count;</p>
            </template>
        </Alert>

    </div>
</template>

<script>
    export default{
        name: 'CustomEvent',
        data: function() {
            return{

            }
        }
    }
</script>

<style scoped>

</style>