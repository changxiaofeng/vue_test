<template>
    <div>
        <Alert show-icon>
            <h2>ref属性：访问子组件实例</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、父组件中，ref="model"；通过this.$refs.modal.show();来访问在子组件中的show()方法；</p>
                <div>eg:
                    <p>html代码：
                        《Modal ref="modal"》《/Modal》
                        《button @click="showModal"》打开Modal《/button》
                    </p> 
                    <p>script代码：
                        methods: {
                            showModal() {
                                this.$refs.modal.show();
                            }
                        }
                    </p>
                    
                </div>
            </template>
        </Alert>
        <Alert show-icon>
            <h2>ref属性：访问子元素</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、在元素上ref="input"；通过this.$refs.input.focus();来访问input输入框，并调用focus方法将其获取焦点。</p>
                <div>eg:
                    <p>html代码：
                        《input ref="input" type="text" /》
                        《button @click="focusInput"》点击使输入框获取焦点《/button》
                    </p> 
                    <p>script代码：
                        methods: {
                            focusInput() {
                                <!-- this.$refs.input 访问输入框元素，并调用 focus() 方法使其获取焦点 -->
                                this.$refs.input.focus();
                            }
                        }
                    </p>
                    
                </div>
            </template>
        </Alert>
    </div>
</template>

<scritp>
    export default{
        name: 'ComponentFun',

    }
</script>

<style scoped>

</style>