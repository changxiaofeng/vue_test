<template>
    <div>
        <ul class="tabs">
            <li v-for="(tab, index) in tabList" 
                :key="index" 
                class="tab" 
                :class="{ active: tab.active }"
                @click="changeTab(tab.type)"
            >
                <div class="txt">{{ tab.title }}</div>
                <div class="line"></div>
            </li>
        </ul>
    </div>
</template>0

<script>
    export default{
        name: 'RouteTabs',
        data: function() {
            return {
                tabList: [
                    {
                        title: 'Java',
                        type: 'JAVA',
                        active: true
                    },
                    {
                        title: '前端',
                        type: 'FONTEND',
                        active: false
                    },
                    {
                        title: 'Python',
                        type: 'PYTHON',
                        active: false
                    },
                    {
                        title: '大数据',
                        type: 'BIGDATA',
                        active: false
                    }
                ]
            };
        },
        // watch: {
        //     // 3、监听路由变化，更新tab样式
        //     $route(to, from) {
        //         // 路由变化了就执行更新样式的方法
        //         this.updateTab();
        //         console.log(to, form);
        //     }
        // },
        mounted() {
            // 4、处理特殊情况
            this.updateTab()
        },
        methods: {
            // 更新样式的方法 
            updateTab() {
                this.tabList.map(menu => {
                    menu.active = menu.type === this.$route.query.courseType || 'JAVA'
                })
            },
            // 2、定义tab点击事件
            changeTab(type) {
                // 使用Router实例方法改变路径参数
                this.$router.push({ query: { courseType: type } })
            }
        }
    }
</script>

<style scope>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tabs {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        padding: 0 20px;
        background: #16181d;
    }
    .tabs .tab {
        color: rgba(#fff, 0.4);
        position: relative;
    }
    .tabs .tab.active {
        color: #fff;
    }
    .txt {
        position: relative;
        z-index: 2;
    }
    .line {
        position: absolute;
        bottom: 3px;
        left: 50%;
        width: 1.45rem;
        height: 0.3rem;
        margin-left: -0.75rem;
        background: #e68344;
        border-radius: 0.15rem;
        z-index: 0;
    }
</style>