<template>
    <div id="exampleModel">
        <Modal
            v-model="visible"
            title="自定义组件框"
            @on-ok="confirm"
            @on-cancel="close">
            <slot>这是个弹框</slot>
            
            <header>
                <slot name="header"></slot>    
            </header>
            
            <main>
                <slot></slot>    
            </main>
            
            <footer>
                <slot name="footer"></slot>    
            </footer>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'ExampleModel',
    props: ['visible'],
    methods: {
        // 通过 update:visible 的模式触发事件，改变 App.vue 中 visible 的值
        close() {
            this.$emit('update:visible', false)
        },
        confirm() {
            console.log('confirm')
            this.close()
        }
    }
};
</script>

<style scoped>

</style>
