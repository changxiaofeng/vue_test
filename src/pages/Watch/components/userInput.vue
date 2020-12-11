<template>
    <div>
        <input type="text" @input="handleInput" :value="value">
    </div>
</template>

<script>
    export default{
        name: 'userInput',
        props: ['value'],
        // 数据
        data () {
            return {
                
            }
        },
        // 方法
        methods: {
            handleInput (e) {
              this.$emit('input', e.target.value)
            }
        },
    }
</script>