<template>
    <div>
        <Alert show-icon>
            <h2>一、别名（alias）：两个名字指向同一个路由；</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>
                    const routes:[   <br/>
                        // 定义alias属性 <br/>
                        { path: '/a', alisa: '/b', component: A } <br/>
                    ]; </p>
                <p>此时，访问/a时，渲染A；访问/b时，渲染的也是A。</p>    
                
            </template>
        </Alert>

        <Alert show-icon>
            <h2>二、路由重定向（redirect）：若路由/a重定向到/b，即访问/a时，url会自动跳到/b，然后匹配路由/b；</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>
                    const routes:[  <br/>
                        // 定义redirect属性，将/a重定向到/b  <br/>
                        { path: '/a', redirect: '/b' }  <br/>
                    ]
                </p>
            </template>
        </Alert>

        <div>
            <h3>实例：</h3>
            <router-link to="/new">Go to 最新问答</router-link><br>
            <router-link to="/">Go to 热门问答</router-link><br>
            <router-link to="/questions/unanswered">Go to 等待问答</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Redirect',

    }
</script>

<style scoped>

</style>