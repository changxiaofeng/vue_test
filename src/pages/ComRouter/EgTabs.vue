<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="tab"
        :class="{ active: tab.active }"
        @click="changeTab(tab.type)"
      >
        {{ tab.title }}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'Tabs',
        data: function() {
            return {
            tabList: [
                {
                title: '最新回答',
                type: 'new',
                active: true
                },
                {
                title: '等待回答',
                type: 'unanswered',
                active: false
                },
                {
                title: '热门回答',
                type: 'hottest',
                active: false
                }
            ]
            };
        },
        watch: {
            $route(to, from) {
                // 路由变化了就执行更新样式的方法
                this.updateTab();
                console.log(to, from);
            }
        },
        methods: {
            changeTab(type) {
                this.$router.push({ query: { type: type } });
            },
            // 更新样式的方法
            updateTab() {
                this.tabList.map(menu => {
                    menu.active = menu.type === this.$route.query.type;
                });
            }
        },
        mounted() {
            if (this.$route.query.type) {
                this.updateTab();
            }
        }
    };
</script>

<style scoped>
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
    }
    .tabs .tab {
        color: #009a61;
        position: relative;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }
    .tabs .tab:hover {
        background-color: #eee;
    }
    .tabs .tab.active {
        color: #555;
        outline: 1px solid #eee;
    }
</style>
