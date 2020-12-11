<template>
    <div class="page-home">
        <div class="page-title">首页</div>
        <Button @click="toCourseAll">跳转全部课程页</Button>
        <Button @click="to404">404</Button>
    </div>
</template>

<script>
    export default {
        name: "Homes",
        methods: {
            toCourseAll() {
                this.$router.push(`courseall`);    
            },
            to404() {
                this.$router.push(`other`);
            }
        }
    }
</script>

<style scoped>
.page-home {
    height: 100vh;
    background: #D55805;
    padding-top: 80px;
    box-sizing: border-box;
    text-align: center;
}
.page-home .page-title{
    font-size: 30px;
    line-height: 42px;
    color: #F8F5F5;
}
.page-home .btn-goto{
    border: none;
    background: none;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #F8F5F5;
    cursor: pointer;
}
.page-home .btn-goto:focus {
    outline: none;
}
</style>