<template>
    <div>
        <!-- 编程式导航 -->
        <Alert show-icon>
            <h2>一、编程式导航</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>
                    页面跳转有两种方式： <br/>
                    （1）声明式：《router-link to="/user"》跳转到user页面《/router-link》<br/>
                    （2）编程式：router.push('/user') 也可以写成this.$router.push(`user`);
                </p>
            </template>
        </Alert>
        <!-- 用router.push进行页面跳转及参数传递 -->
        <Alert show-icon>
            <h2>二、用router.push进行页面跳转及参数传递</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                
            </template>
        </Alert>
        <Alert show-icon>
            <h3>1、router.push的参数为字符串路径：</h3>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <div>
                    router.push('user')  <br/>
                    router.push('/user') 
                    <p :style="{'margin': '10px 0'}">下面详细说明上面两种写法的不同，主要是跳转后url的变化不同：</p> 
                    <Table :columns="columns1" :data="data1"></Table>
                </div>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                解释：因为/意味着匹配跟路径，所以'/user'这样的写法不管原路径localhost:8080/??中的??是什么，跳转后url都会变为localhost:8080/user。
            </template>
        </Alert>
        <Alert show-icon>
            <h3>2、router.push的参数为描述地址的对象；</h3>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <div>
                    <p>（1）这种写法和字符串类型的参数一样： router.push({ path: 'home' }) </p>  
                    <p>（2）命名的路由：router.push({ name: 'user', params: { userId: '123' }})</p>
                    <p>（3）带查询参数，变成/register?plan=private：router.push({ path: 'register', query: { plan: 'private' }})</p>
                </div>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            注解：
            <template slot="desc">
                <div>
                    <p>*只提供path值的参数和字符串类型的参数一样。</p>
                    <p>（1）{ name: 'user', params: { userId: '123' }}
                         <ul :style="{paddingLeft: '50px'}">
                            <li>对应的命名路由为：{ path:'user/:userId', name:'user' };</li>
                            <li>跳转后url：localhost:8080/user/123;</li>
                            <li>取参数：$route.params.userId;</li>
                        </ul>
                    </p> 
                    <p>（2）{ path: 'register', query: { plan: 'private' }} 
                        <ul :style="{paddingLeft: '50px'}">
                            <li>对应的路由为：{ path: 'register' };</li>
                            <li>跳转后url：localhost:8080/register?plan=private;</li>
                            <li>取参数：$route.query.plan;</li>
                        </ul>
                    </p>
                    <p>
                        小结/总结：
                        <ul :style="{paddingLeft: '50px'}">
                            <li>1、name对应params，路径形式：user/123；</li>
                            <li>2、path对应query，路径形式：user?id=123</li>
                        </ul>
                    </p>
                </div>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                <p>*注意1：同样的规则也适用于router-link组件的to属性；</p>
                <p>*注意2：如果用path进行页面跳转时，params传参会被忽略。可写router.push({ path: 'user/123' })</p>
            </template>
        </Alert>
        <!-- 页面跳转后如何获取参数 -->
        <Alert show-icon>
            <h2>三、页面跳转后如何获取参数</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <div>
                    <p>1、如果当前页面的url地址为http://localhost:8080/user/123?name=userName#abc时，对应的$route如下：</p>   
                    //$route <br>
                    { <br>
                        name: "user",  //路由名称 <br>
                        meta: {}, <br>
                        path: "user/123", 路由path <br>
                        // 网页位置指定标识符 <br>
                        hash: "#abc", <br>
                        // window.location.search <br>
                        query: {name: "userName"}, <br>
                        // 路径参数 user/:userId <br>
                        params: {userId: "123"}, <br>
                        fullPath: "/user/123?name=userName#abc" <br>
                    }    <br>
                    <p>2、页面跳转后获取参数可以很方便的通过$route.query、$route.params、$route.hash获取。</p>
                </div>
            </template>
        </Alert>
    </div>
</template>

<script>
    export default{
        name: 'ComRouterToPage',
        data () {
            return {
                columns1: [
                    {
                        title: '原url',
                        key: 'oldUrl'
                    },
                    {
                        title: 'localhost:8080',
                        key: 'oneUrl'
                    },
                    {
                        title: 'localhost:8080/home',
                        key: 'twoUrl'
                    }
                ],
                data1: [
                    {
                        oldUrl: "router.push('user')跳转后的url",
                        oneUrl: 'localhost:8080/user',
                        twoUrl: 'localhost:8080/home/user'
                    },
                    {
                        oldUrl: "router.push('/user')跳转后的url",
                        oneUrl: 'localhost:8080/user',
                        twoUrl: 'localhost:8080/user'
                    },
                ]
            }
        }
    }
</script>  

<style scoped>
    
</style>