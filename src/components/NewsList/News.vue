<template>
    <div class="news">
        <div class="news-header">
            <img :src="news && news.user.avatar" alt="" class="avatar" />
            <div class="detail">
                <div class="nick">{{ news && news.user.nick }}</div>
                <div class="time">{{ news && news.content.time }}</div>
            </div>
            <div class="btn-menu" @click="openOptMenu"></div>
        </div>
        <div class="news-content">
            <div class="content-txt">{{ news && news.content.txt }}</div>
            <div class="content-imgs" v-if="news && news.content.imgList">
                <img
                    v-for="img in news.content.imgList"
                    :key="img"
                    alt=""
                    :src="img"
                    :class="{ single: news.content.imgList.length === 1 }"
                />
            </div>
            <div class="content-video" v-if="news && news.content.video">
                <video
                    controls
                    class="video"
                    ref="video"
                    :src="news.content.video.url"
                ></video>
            </div> 
        </div>
        <div class="news-footer">
            <div class="options">
                <div class="visited-num">
                    浏览{{ news && news.content.visitedNum }}次
                </div>
                <div class="btns">
                    <button
                        v-if="news && news.liked"
                        class="btn-liked"
                        @click="handleLike"
                    ></button>
                    <button v-else class="btn-like" @click="handleLike"></button>
                    <button class="btn-comment" @click="focusToComment"></button>
                </div>
            </div>

            <div class="liked-num">
                {{ likedTxt }}
            </div>

            <div class="comments" v-if="commentList.length">
                <div
                    class="comment"
                    v-for="(comment, index) in commentList"
                    :key="'comment' + index"
                >
                    <span class="username">{{ comment.userName }}</span>
                    <span v-if="comment.feedUserName">
                        回复 <span class="username">{{ comment.feedUserName }}</span></span
                    >：{{ comment.txt }}
                </div>
            </div>

            <div class="option-comment">
                <input
                    ref="commentInput"
                    type="text"
                    v-model="comment"
                    placeholder="评论"
                    @keyup.enter="addComment"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    props: ['news', 'newsIdx'],
    computed: {
        commentList() {
            return (this.news && this.news.content.commentList) || [];
        },
        likedTxt() {
            const likedList = (this.news && this.news.content.likedList) || [];
            const len = likedList.length || 0;
            return len > 1 ? `${likedList[0]}等${len}人觉得很赞` : likedList[0];
        }
    },
    data: function() {
        return {
            comment: ''
        };
    },
    methods: {
        openOptMenu() {
            this.$emit('openOptMenu', this.newsIdx);
        },
        // 点赞行为
        handleLike() {
            this.$emit('handleLike', this.newsIdx);
        },
        // 聚焦评论输入框
        focusToComment() {
            this.$refs.commentInput.focus();
        },
        // 评论行为
        addComment() {
            this.$emit('addComment', this.newsIdx, this.comment);
        }
    }
};
</script>

<style scoped>
/* @import '@/styles/lib.scss'; */

/* $txtColor: #000; */

    .news button {
        border: none;
        background: none;
    }
    .news button:focus {
        outline: none;
    }
    .news {
        padding: 15px 20px;
        border-bottom: 10px solid #f5f5f5;
    }
    .news .news-header {
        display: flex;
    }
     
    .news .news-header .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .news .news-header .detail {
        flex: 1;
        text-align: left;
        margin-left: 9px;
        
    }
    .detail .nick {
        font-size: 14px;
        line-height: 20px;
    }
    .detail .time {
        margin-top: 5px;
        font-size: 12px;
        line-height: 17px;
        color: #737373;
    }
    .news .news-header .btn-menu {
        width: 20px;
        height: 20px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/menu.png)
            no-repeat center 8px / 6px 4px;
    }
    .news .news-content .content-txt,
    .news .news-content .content-imgs {
        padding-top: 10px;
    }
    .news .news-content .content-txt {
        font-size: 15px;
        line-height: 21px;
        text-align: left;
    }
    .news .news-content .content-imgs {
        padding-top: 10px;
        
    }
    .news .news-content .content-imgs> img {
        width: 50%;
        box-sizing: border-box;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        
    }
    .content-imgs> img.single {
        width: 100%;
    }
    .news .news-content .content-video {
        font-size: 0;
    }
    .content-video video {
        width: 100%;
    }
    
    .news .news-footer .options {
        height: 45px;
        border-bottom: 1px solid #f7f7f7;
        display: flex;
        align-items: center;
        
    }
    .news .news-footer .options .visited-num {
        flex: 1;
        text-align: left;
        font-size: 12px;
        line-height: 17px;
        color: #737373;
    }
    .news .news-footer .options .btns {
        flex: none;
        display: flex;
        align-items: center;
        
    }
    .news .news-footer .options .btns .btn-liked,
    .news .news-footer .options .btns .btn-like,
    .news .news-footer .options .btns .btn-comment {
        width: 20px;
        height: 20px;
    }
    .news .news-footer .options .btns .btn-liked {
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/liked-me.png)
            no-repeat center / contain;
    }
    .news .news-footer .options .btns .btn-like {
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/like.png)
            no-repeat center / contain;
    }
    .news .news-footer .options .btns .btn-comment {
        margin-left: 28px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/comment.png)
            no-repeat center / contain;
    }
    .news .news-footer .liked-num {
        font-size: 14px;
        line-height: 20px;
        color: #233268;
        text-align: left;
        padding-left: 20px;
        margin-top: 8px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/liked.png)
            no-repeat top left / 16px 15px;
    }
    .news .news-footer .comments {
        padding-top: 8px;
    }
    .news .news-footer .comments .comment {
        text-align: left;
        font-size: 14px;
        line-height: 20px;
        padding-top: 10px;
    }
    .news .news-footer .comments .comment:first-child {
        padding-top: 0;
    }
    .news .news-footer .comments .comment .username {
        color: #233268;
    }
    .news .news-footer .option-comment {
        padding-top: 10px;
    }
    .news .news-footer .option-comment> input {
        width: 100%;
        height: 26px;
        background: #f5f5f5;
        border-radius: 2px;
        border: none;
        padding: 0 13px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 20px;
    }
    .news .news-footer .option-comment> input::placeholder {
        /* color: rgba($txtColor, 0.3); */
        color: rgba(#000, 0.3);
    }
    .news .news-footer .option-comment> input:focus {
        outline: none;
    }
</style>
