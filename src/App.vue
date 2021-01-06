<template>
    <div  id="app" class="layout">
        <Layout>
            <Header>
                <!-- <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu> -->
                <div class="topbar">
                    <!-- <img
                        src="https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/6/logo.png"
                        alt=""
                        class="logo"
                    /> -->
                    <p class="title">前端学习知识整理</p>
                    <div class="options">
                        <button class="share"></button>
                        <button class="menu"></button>
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Authmenu></Authmenu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem to="/ComRouter">Home</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import Authmenu from '@/components/Authmenu/Authmenu'
export default {
  name: 'App',
  components: { Authmenu },
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
</style>

<style scope>
    .topbar {
        height: 100%;
        /* background: #040404; */
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .topbar .logo {
        width: 61px;
        height: 22px;
    }
    .topbar .title{
        color: #fff;
    }
    .topbar .options {
        display: flex;
        align-items: center;
    }
    .topbar .options .share,
    .topbar .options .menu {
        border: none;
        background: none;
        /* &:focus {
        outline: none;
        } */
    }
    .topbar .options .share {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/6/share.png)
        no-repeat center / contain;
    }
    .topbar .options .menu {
        width: 18px;
        height: 15px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/6/menu.png)
        no-repeat center / contain;
    }
</style>
