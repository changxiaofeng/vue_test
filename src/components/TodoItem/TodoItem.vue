<template>
    <div>
        <li>{{ todo.text }}</li>
    </div>
    
</template>>

<script>
    export default{
        name: 'todoItem',
        props: ['todo'],
        data() {
            return{
                
            }
        }
    }
</script>