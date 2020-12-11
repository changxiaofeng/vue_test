<template>
    <div>
        <Alert show-icon>
            <h2>fetch</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>
                    1、fetch用于请求数据。
                </p>
                <p>
                    fetch( <br/>
                        &nbsp;&nbsp; 'https://www.fastmock.site/mock/b73a1b9229212a9a3749e046b1e70285/f4/f4-11-1-1' <br/>
                    ).then(function(response) { <br/>
                        &nbsp;&nbsp; return response.json(); <br/>
                    })
                </p>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                缺点：Promise对象的特点是无等待。所以想对返回的数据进行操作，就必须在then里处理。在业务逻辑复杂的情况下，每一步都是异步的，就会有好多then链。
                <p>异步编程终极解决方案：async 和 await</p>
            </template>
        </Alert>
        
        <Alert show-icon>
            <h2>一、"异步"async</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>
                    1、async是"异步"的简写，用于申明一个异步function,而这个async函数返回的是一个Promise对象。
                </p>
                <p>
                    async function asyncFn() {   <br/>
                        &nbsp;&nbsp; return { <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp; "company": "优课达", <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp; "slogan": "学的比别人好一点" <br/>
                        &nbsp;&nbsp;}; <br/>
                    } <br/>
                    const result = asyncFn(); <br/>
                    console.log(result); <br/>
                </p>
            </template>
        </Alert>

        <Alert show-icon>
            <h2>二、"等待异步"await</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p> 
                    1、await用于等待一个异步方法执行的完成，它会阻塞后面的代码，等着Promise对象resove*,然后得到resove的值，作为await表达式的运算结果；
                </p>
                <p>
                    async function getAsyncFn() { <br/>
                        &nbsp;&nbsp; const result = await asyncFn(); <br/>
                        &nbsp;&nbsp; console.log(result); <br/>
                    } <br/>
                    getAsyncFn(); <br/>
                </p>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            <template slot="desc">
                <p>注意：await只能出现在async函数中，如果用在普通函数里，就会报错，所以上面我们又定义了一个async函数getAsyncFn。</p>
            </template>
        </Alert>

        <Alert show-icon>
            <h2>三、多个请求并发执行Promise.all</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                <p>1、如果要完成多个请求并发执行，可以使用Promise.all</p>
                <p>
                    async function asyncFn1() { <br/>
                        &nbsp;&nbsp; return "优课达"; <br/>
                    } <br/>

                    async function asyncFn2() { <br/>
                        &nbsp;&nbsp; return "学的比别人好一点"; <br/>
                    } <br/>

                    async function getAsyncFn() { <br/>
                        &nbsp;&nbsp; const result = await Promise.all([asyncFn1(), asyncFn2()]); <br/>
                        &nbsp;&nbsp; console.log(result); <br/>
                    } <br/>
                    getAsyncFn(); 
                </p>
            </template>
        </Alert>

        <Alert show-icon>
            <h2>四、在vue中运用async和await请求数据</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                
            </template>
        </Alert>

        <Alert show-icon>
             <h2>五、给api传参数</h2>
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                
            </template>
        </Alert>
    </div>
</template>

<script>
    export default{
        name: 'AsyncAwait'
    }
</script>

<style scoped>

</style>