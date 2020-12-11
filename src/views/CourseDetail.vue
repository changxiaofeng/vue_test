<template>
    <div class="page-coursedetail">
        <div class="banner"></div>
        <div class="detail">
            <div class="title">{{course && course.title}}</div>
            <div class="desc">{{course && course.desc}}</div>
        </div>
        <button class="btn-buy">加入购物清单</button>
    </div>
</template>

<script>
export default {
    name: 'CourseAll',
    data: function() {
        return {
            course: []
        };
    },
    async mounted() {
        await this.getCourse();
    },
    methods: {
        async getCourse() {
            // 从路径中获取课程 id
            const courseId = this.$route.params.courseId
            console.log(courseId);
            // 在接口地址后传入参数 id
            const res = await fetch('https://www.fastmock.site/mock/2c5613db3f13a5c02f552c9bb7e6620b/f5/api/getcourse?id=' + courseId);
            console.log(res);
            const myJson = await res.json();
            this.course = myJson.data;
        }
    }
    // data: function() {
    //     return {
    //         courseList: [
    //             {
    //                 id: 'f1',
    //                 title: 'Web前端基础',
    //                 desc:
    //                   '本课程通过HTML、CSS基础的学习，结合实战QQ注册页的开发，带领大家掌握Web前端基础。'
    //             },
    //             {
    //                 id: 'f2',
    //                 title: 'Web前端进阶',
    //                 desc:
    //                   '本课程是对基础课程的补充和提升，补充了一些CSS进阶知识，另外你还会学到当前最流行的布局方式----Flex布局，以及CSS扩展语句SASS，课程以微博主页为目标导向，结合丰富的小练习来夯实基础。'
    //             }
    //         ]
    //     };
    // },
    // computed: {
    //     course() {
    //         return this.courseList.find(course => course.id === this.$route.params.courseId) || {}
    //     }
    // }
};
</script>

<style scoped>
    .page-coursedetail {
        padding-top: 70px;
        background: #30415D;
    }
    .banner {
        width: 335px;
        height: 120px;
        margin: 0 auto;
        background: #2c3744;
        border-radius: 8px;
    }
    .detail {
        width: 335px;
        margin: 0 auto;
        text-align: left;
    }
    .detail .title {
        padding-top: 15px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
    }
    .detail .desc {
        padding-top: 10px;
        font-size: 15px;
        line-height: 21px;
        color: #ffffff;
    }
    .btn-buy {
        display: block;
        width: 335px;
        height: 46px;
        margin: 0 auto;
        margin-top: 20px;
        background: #3ab599;
        border: none;
        border-radius: 4px;
        font-weight: 500;
        font-size: 15px;
        color: #ffffff;
        box-sizing: border-box;
    }
    .btn-buy:focus {
        outline: none;
    }
</style>

<style>
    html {
        background: #17191D;
    }
</style>

