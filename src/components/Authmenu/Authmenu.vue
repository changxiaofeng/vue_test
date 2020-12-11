<template>
    <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="0" theme="light" width="auto" :open-names="['1']">
            <MenuItem name="0"><a href="http://localhost:8080/#/">首页</a></MenuItem>
            <Submenu name="1">
                <template slot="title"><Icon type="ios-keypad"></Icon>Vue入门到精通</template>
                <MenuItem name="1-1"> Vue介绍</MenuItem>
                <MenuItem name="1-2"> <router-link :to="{name: 'Watch'}">Vue双向绑定</router-link> </MenuItem>
                <MenuItem name="1-3"> <router-link to="/Temp">Vue Template</router-link> </MenuItem>
                <MenuItem name="1-4"> <router-link to="/Computed">Vue动态Class、Style</router-link> </MenuItem>
                <MenuItem name="1-5"> <router-link to="/Component">Vue组件</router-link> </MenuItem>
                <MenuItem name="1-6"> <router-link to="/ComRouter">Vue-Router</router-link> </MenuItem>
                <MenuItem name="1-7"> <router-link to="/Example">实战-可互动的qq空间动态</router-link> </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title"><Icon type="ios-analytics"></Icon>Vue 进阶：Vuex</template>
                <MenuItem name="2-1"> <router-link to="/VuexIntroduction"> Vuex 入门 </router-link> </MenuItem>
                <MenuItem name="2-2"> <router-link to="/VuexCoreTechnology"> Vuex 核心技术 </router-link> </MenuItem>
                <MenuItem name="2-3"> <router-link to="/VuexModule"> Vuex 模块 </router-link> </MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title"><Icon type="ios-navigate"></Icon>JavaScript基础</template>
                <MenuItem name="3-1"> <router-link to="/"> 走进javascript世界 </router-link> </MenuItem>
                <MenuItem name="3-2"> <router-link to="/BasicDataType"> 基础数据类型 </router-link> </MenuItem>
                <MenuItem name="3-3"> <router-link to="/Boolean"> 布尔类型/条件判断 </router-link> </MenuItem>
                <MenuItem name="3-4"> <router-link to="/"> 数组 </router-link> </MenuItem>
                <MenuItem name="3-5"> <router-link to="/"> 循环 </router-link> </MenuItem>
                <MenuItem name="3-6"> <router-link to="/"> 函数 </router-link> </MenuItem>
                <MenuItem name="3-7"> <router-link to="/"> 对象 </router-link> </MenuItem>
                <MenuItem name="3-8"> <router-link to="/"> BOM </router-link> </MenuItem> 
                <MenuItem name="3-9"> <router-link to="/"> DOM和BOM操作 </router-link> </MenuItem>
                <MenuItem name="3-10"> <router-link to="/"> DOM事件 </router-link> </MenuItem>
                <MenuItem name="3-11"> <router-link to="/"> 网络请求 </router-link> </MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title"><Icon type="ios-navigate"></Icon>web前端进阶</template>
                <MenuItem name="3-1"> <router-link to="/Css"> Css </router-link> </MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>


<script>
export default {
    name: 'Authmenu',
    data () {
        return{
             
        }
    }
}
</script>