<template>
    <div class="home-page">
        <div class="page-name" :class="{ white: turnWhite }">
            好友动态
        </div>

        <div ref="banner" class="banner">
            <img :src="userInfo.avatar" alt="" class="avatar" />
        </div>

        <div class="menu">
            <a
                v-for="menu in menuList"
                :key="menu.name"
                :href="menu.path"
                :style="getStyle(menu.name)"
            >
                {{ menu.txt }}
            </a>
        </div>

        <NewsList :newsListOriginal="newsList" :userInfo="userInfo" />
    </div>
</template>

<script>
    import request from '@/utils/request.js';
    import NewsList from '@/components/NewsList/index.vue';

    export default {
        name: 'Home',
        components: {
            NewsList
        },
        data: function() {
            return {
                turnWhite: false,
                showOptMenu: false,
                menuList: [
                    {
                      name: 'album',
                      txt: '相册',
                      path: 'album'
                    },
                    {
                      name: 'mood',
                      txt: '说说',
                      path: 'mood'
                    }
                ],
                userInfo: {},
                newsList: [],
                newsIdx: -1
            };
        }, 
        async mounted() {  
            window.addEventListener('scroll', this.handlePageName);
            await this.getAccount();
            await this.queryNewsList();
        },
        methods: {
            async getAccount() {
                this.userInfo = (await request('/api/account')) || {};
            },
            async queryNewsList() {
                this.newsList = (await request('/api/querynews')) || [];
            },
            getStyle(iconName) {
                return `background-image: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/menu-${iconName}.png);`;
            },
            handlePageName() {
                this.$nextTick(() => {
                    const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop ||
                        0;
                    if (
                        this.$refs.banner &&
                        scrollTop >= this.$refs.banner.getBoundingClientRect().height
                    ) {
                        this.turnWhite = true;
                    } else {
                        this.turnWhite = false;
                    }
                });
            }
        }
    };
</script>

<style scoped>
    /* @import '@/styles/lib.scss'; */

    /* $txtColor: #000; */

    .home-page{
        width: 370px;
        border: 1px solid #f2f2f2;
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
    }
    .home-page .page-name {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 52px;
        z-index: 100;
        color: #fff;
        font-size: 16px;
        line-height: 52px;
        text-align: center;
        transition: all 0.2s;
    }
    .home-page .banner {
        height: 186px;
        background: url('https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/banner-bg.jpg')
          center / cover;
        position: relative;
    }
    .home-page .banner .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        left: 30px;
        bottom: 30px;
    }
    .home-page .menu {
        height: 65px;
        display: flex;
        margin: 0 20px;
        box-sizing: border-box;
        padding: 10px 0 7px;
        border-bottom: 1px solid #f2f2f2;
    }
    .home-page .menu a {
        flex: 1;
        font-size: 12px;
        line-height: 17px;
        background-size: 26px;
        background-repeat: no-repeat;
        background-position: center top;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: #000;
    }
</style>
