<template>
    <div class="add-news">
        <div class="page-name">
            <div class="btn-cancel" @click="goBack">取消</div>
            说说
            <div class="btn-add" @click="addNews">发表</div>
        </div>

        <div class="userinfo">
            <img :src="userInfo && userInfo.avatar" alt="" class="avatar" />
            <div class="username">{{ userInfo && userInfo.nick }}</div>
        </div>

        <div class="container">
            <textarea
                rows="6"
                type="text"
                v-model="mood"
                placeholder="分享新鲜事......"
            />
        </div>

        <div class="photo">
            <div class="photo-picked"></div>
            <div class="add-photo" @click="pickPhoto">
                <span class="icon"></span>
                <span>照片/视频</span>
            </div>
        </div>
    </div>
</template>

<script>
    import request from '@/utils/request.js';

    export default {
        name: 'AddNews',
        data: function() {
            return {
                userInfo: {},
                mood: ''
            };
        },
        async mounted() {
            await this.getAccount();
        },
        methods: {
            async getAccount() {
                this.userInfo = (await request('/api/account')) || {};
            },
            goBack() {
                this.$router.go(-1);
            },
            addNews() {
                const news = {
                    user: this.userInfo,
                    content: {
                        time: new Date().toJSON(),
                        txt: this.mood,
                        imgList: []
                    },
                    liked: false
                }
                console.log(news)
                // todo
            },
            pickPhoto() {
            // todo
            }
        }
    };
</script>

<style scoped>
    /* @import '@/styles/lib.scss';

    $txtColor: #000; */

    .add-news {
        width: 370px;
        height: 100vh;
        background: #f5f5f5;
    }
    .add-news .page-name {
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        color: #272727;
        border-bottom: 10px solid #f5f5f5;
        background: #fff;
        position: relative;
        text-align: center;
    }
    .add-news .page-name .btn-cancel {
        width: 72px;
        height: 50px;
        position: absolute;
        left: 0;
        top: 0;
    }
    .add-news .page-name .btn-add {
        height: 22px;
        line-height: 22px;
        border-radius: 22px;
        padding: 0 11px;
        font-size: 14px;
        color: #ffffff;
        background: #1daeff;
        position: absolute;
        right: 12px;
        top: 14px;
    }
    .add-news .userinfo {
        display: flex;
        align-items: center;
        background: #fff;
        padding: 15px 20px;
    }
    .add-news .userinfo .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .add-news .userinfo .username {
        margin-left: 10px;
        font-size: 16px;
        color: #000;
    }
    .add-news .container {
        background: #fff;
        padding-top: 5px;
    }
    .add-news .container textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
    }
    .add-news .container textarea::placeholder {
        font-size: 15px;
        line-height: 21px;
        color: #c9c9c9;
    }
    .add-news .container textarea:focus {
        outline: none;
    }
    .add-news .photo {
        padding: 20px;
        background: #fff;
    }
    .add-news .photo .add-photo {
        width: 100px;
        height: 100px;
        border-radius: 2px;
        font-size: 12px;
        line-height: 17px;
        color: #a3a3a3;
        padding-top: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #efefef;
        
    }
    .add-news .photo .add-photo .icon {
        width: 30px;
        height: 25px;
        margin-bottom: 10px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/mood-photo-add.png)
        no-repeat center / contain;
    }
</style>
