<template>
    <div>
        <h3>Vuex的三大核心点：State/Mutation/Action</h3>

        <Alert>
            一、定义Vuex Store
            <p class="ui-margin">store即src/store/index.js；Vuex的规范就是State/Mutation/Acion的约定。</p>
        </Alert>
        <Collapse active-key="1">
            <Panel key="1">
                一、State
                <div slot="content">
                    <p>1、State的作用就是存储数据，全局的大JSON对象。只能从state里获取数据。</p>
                    <div>2、写法： 
                        <p class="writeMethod">
                            export default new Vuex.Store({     
                                <br/>&nbsp;&nbsp;
                                state: { count: 0 } 
                                <br/>
                            }); 
                        </p>
                    </div>
                </div>
            </Panel>
            <Panel key="2">
                二、Mutation
                <div slot="content">
                    <p>1、Mutation的作用就是修改State的状态值(即数据)。State的数据不能被直接修改，只能借助于Mutation来完成。</p>
                    <div>2、Mutation是一个函数，<span :style="{'font-weight':'bold','color':'red'}">接收两个参数：(1)state 和 (2)payload；</span>
                        <ul>
                            <li>state：当前上下文的state实例，可以通过这个参数修改state值，比如state.count=12就可以完成State中count对象的修改。</li>
                            <li>payload：接收外部传入的对象，需要和调用方约定好对象类型，也可以不传参数。</li>
                        </ul>
                    </div>
                    <div>3、写法： 
                        <p class="writeMethod">
                            export default new Vuex.Store({ 
                                <br/>&nbsp;&nbsp;
                                state: {
                                    count: 0,
                                    <br/>
                                    user: {}
                                },
                                <br/>&nbsp;&nbsp;
                                mutations: {
                                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    increment(state) {
                                        state.count++;
                                    },
                                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    decrement(state) {
                                        state.count--;
                                    }
                                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    load(state, payload) {
                                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        state.users = payload;
                                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    },
                                    <br/>&nbsp;&nbsp;
                                }
                                <br/>
                            });
                        </p>
                    </div>
                    <Alert type="warning" show-icon>
                        <template slot="desc">
                            注意：在mutation函数方法执行后state值就会触发状态变更了。
                        </template>
                    </Alert>
                </div>
            </Panel>
            <Panel key="3">
                三、Action
                <div slot="content">
                    <div>1、Action的作用就是用来触发mutation函数,从而修改state。</div>
                    <div>2、Action是一个函数，<span :style="{'font-weight':'bold','color':'red'}">接收两个参数：(1)context对象(最常用的：state、commit、dispatch) 和 (2)接收外部传递的参数；</span>
                        <ul :style="{'padding-left': '36px'}">
                            <li>（1）context对象包含以下属性和方法：   <br/>
                                {   
                                    <p class="writeMethod">
                                        state, // 等同于'store.state'，若在模块中则为局部状态；且只能取值，不能修改值；  <br/>
                                        rootState, // 等同于'store.state'，只存在于模块中   <br/>
                                        commit, // 等同于'store.commit'  <br/>
                                        dispatch, // 等同于'store.dispatch' <br/>
                                        getters, // 等同于 'store.getters'  <br/>
                                        rootGetters, // 等同于 'store.getters', 只存在于模块中
                                    </p>
                                }
                                
                                <Alert type="warning" show-icon>
                                    <template slot="desc">
                                        <div>注意：
                                            <p>(1)绝大多数的情况下，我们只需要使用state、commit、dispatch这三个就可以了；</p>
                                            <p>(2)由于context是一个JSON对象，所以我们可以使用ES6的解构方式来声明参数，也就是：
                                                increment: ({ commit }) => commit("increment")
                                                还可以定义多个参数：
                                                increment: ({ state,commit,dispatch }) => commit("increment")</p> 
                                            <p>(3)这里的state只能取值，不能修改值</p>
                                        </div>
                                    </template>
                                </Alert>

                                 <div>
                                    <h4>commit</h4>
                                    <div>1、commit的作用就是把数据提交到mutation中；</div>
                                    <div>2、commit是一个函数，接收两个参数：(1)mutation的函数名称；(2)自定义的对象
                                        <ul :style="{'paddingLeft': '36px'}">
                                            <li>mutation的函数名称</li>
                                            <li>自定义的对象</li>
                                        </ul>
                                    </div>
                                    <div>3、写法：
                                        <p class="writeMethod" :style="{'paddingLeft': '22px'}">
                                            actions: {
                                                <br/>&nbsp;&nbsp;
                                                increment: ({ commit }) => commit('increment');
                                                <br/>
                                                <!-- load: async ({ commit }) => {
                                                    const response = await axios.get(
                                                        "https://www.fastmock.site/mock/a9b15cd4db90d4e03ed76cd3c76d9197/f6/users"
                                                    );
                                                    commit("load", response.data.data.users);
                                                }, -->
                                            }
                                        </p>
                                        <Alert type="warning" show-icon>
                                            <template slot="desc">
                                                <p class="writeMethod">注释：这个increment的action函数执行结果就是触发了一次mutations的increment函数。这样也就完成了从action提交数据到mutation；从mutation执行state状态变更。</p>
                                            </template>
                                        </Alert>
                                    </div>
                                </div>
                            </li>
                            <li>（2）接收外部传递的参数：非必穿</li>
                        </ul>
                    </div>
                    <!-- <div :style="{'padding-left': '72px'}">
                        <h4>commit</h4>
                        <div>1、commit的作用就是把数据提交到mutation中；</div>
                        <div>2、commit是一个函数，接收两个参数：(1)mutation的函数名称；(2)自定义的对象
                            <ul>
                                <li>mutation的函数名称</li>
                                <li>自定义的对象</li>
                            </ul>
                        </div>
                        <div>3、写法：
                            <p class="writeMethod">
                                actions: {
                                    <br/>&nbsp;&nbsp;
                                    increment: ({ commit }) => commit('increment');
                                    <br/>
                                }
                            </p>
                            <Alert type="warning" show-icon>
                                <template slot="desc">
                                    <p class="writeMethod">注释：这个increment的action函数执行结果就是触发了一次mutations的increment函数。这样也就完成了从action提交数据到mutation；从mutation执行state状态变更。</p>
                                </template>
                            </Alert>
                        </div>
                    </div> -->
                </div>
            </Panel>
        </Collapse>
        
        <Alert>二、运用Vuex Store
            <p class="ui-margin">store强大的地方还在于运用的简单，只要我们定义好state、action，就可以在任意vue文件中得到数据和执行数据变化；</p>
        </Alert>
        <Collapse active-key="1">
            <Panel key="1">
                一、获取state
                <div slot="content">
                    <div class="writeMethod">1、方法一、$store.state.count获取state中的count属性值；
                        <p class="writeMethod">(1)写法： $store.state.count，直接写在html内</p>
                        <p class="writeMethod">(2)和vue的双向绑定不同，state只支持单向绑定，当mutation更新了state状态后，vue中的值也会自动更新。</p>
                    </div>
                    <div class="writeMethod">2、方法二、借助Vuex的mapState函数，动态的将state和computed绑定上；（常用此方法） 
                        <p class="writeMethod">
                            (1)写法： count，直接用于html内<br/>
                            import { mapState } from 'vuex';
                            <br/>
                            export default{
                                <br/>&nbsp;&nbsp;
                                computed: {
                                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    ...mapState({
                                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        count: state => state.count
                                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    })
                                    <br/>&nbsp;&nbsp;
                                }
                                <br/>
                            }
                        </p>
                        <p class="writeMethod">(2)只用computed和mapState组合方案的好处是：页面只会根据count值变化而书信页面，而不会因为state的变化就会触发页面刷新。</p>
                    </div>
                </div>
            </Panel>
            <Panel key="2">
                二、执行store的action
                <div slot="content">
                    <div class="writeMethod">
                        <p>1、借助Vuex的mapActions函数，动态的将action绑定到vue的methods对象里；</p>
                        <p>2、写法：
                            methods: { ...mapActions(['increment', 'decrement']) }
                        </p>
                    </div>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script>
    export default{
        name: 'ThreeCore'
    }
</script>

<style scoped>
    .ivu-alert-info{
        margin-top: 16px;
    }
    .ui-margin{
        margin: 10px 0;
    }
</style>