<template>
    <div class="album-comment-modal">
        <AlbumModal
            :title="`${commentList && commentList.length}条评论`"
            @close="close"
        >
            <template slot="body">
                <div class="total-like">
                    <span class="icon"></span>
                    <span class="txt">
                        {{ likedUserListStr }} 等{{
                        (likedList && likedList.length) || 0
                        }}人觉得很赞
                    </span>
                </div>

                <div class="comment-list" v-if="commentList">
                    <div class="comment" v-for="(comment, i) in commentList" :key="i">
                        <img :src="comment.avatar" alt="" class="avatar" />
                        <div class="detail">
                            <div class="username">{{ comment.nick }}</div>
                            <div class="time">{{ comment.time }}</div>
                            <div class="txt">{{ comment.txt }}</div>
                        </div>
                        <div class="options">
                            <button class="btn-like"></button>
                            <button class="btn-comment"></button>
                        </div>
                    </div>
                </div>

                <div class="comment-input">
                    <input type="text" v-model="commentTxt" placeholder="我也说一句...">
                </div>
            </template>
        </AlbumModal>
    </div>
</template>

<script>
import AlbumModal from '../AlbumModal.vue';

export default {
    name: 'CommentModal',
    components: {
        AlbumModal
    },
    props: ['likedList', 'commentList', 'userInfo'],
    data: function() {
        return {
            commentTxt: ''
        }
    },
    computed: {
        myLike() {
            if (this.likedList && this.userInfo) {
                return this.likedList.some(item => item.nick === this.userInfo.nick);
            }
            return false;
        },
        likedUserListStr() {
            if (this.likedList) {
                const userList = this.likedList.map(user => user.nick) || [];
                return userList.slice(0, 5).join('，');
            }
            return '';
        }
    },
    methods: {
        // 相册点赞行为
        handleLike() {
            this.$emit('likeAlbum', !this.myLike);
        },
        close() {
            this.$emit('close');
        },
        confirm() {}
    }
};
</script>

<style scoped>
    /* @import '@/styles/lib.scss';

    $txtColor: #000; */

    .modal {
        background: #fff;
    }
    .modal .modal-body .total-like {
        height: 48px;
        padding-left: 20px;
        font-size: 14px;
        line-height: 48px;
        color: #8f8f8f;
        text-align: left;
    }
    .modal-body .total-like .icon {
        display: inline-block;
        width: 16px;
        height: 15px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-like.png)
        no-repeat center / contain;
        margin-right: 5px;
    }
    .modal-body .comment-list .comment {
        padding-top: 20px;
        display: flex;
        padding-left: 20px;
        position: relative;
    }
    .modal-body .comment .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
    }
    
    .modal-body .comment .detail .username {
        line-height: 20px;
        font-size: 14px;
    }
    .modal-body .comment .detail .time {
        font-size: 12px;
        line-height: 17px;
        color: #737373;
        padding-top: 5px;
    }
    .modal-body .comment .detail .txt {
        font-size: 15px;
        line-height: 21px;
        color: #0c0c0c;
        padding-top: 14px;
    }
    .modal-body .comment .options {
        position: absolute;
        top: 15px;
        right: 15px;
        display: flex;
    }
    .modal-body .comment .options .btn-like,
    .modal-body .comment .options .btn-comment {
        width: 30px;
        height: 30px;
        border: none;
        
    }
    .modal-body .comment .options .btn-like:focus,
    .modal-body .comment .options .btn-comment:focus {
        outline: none;
    }
    .modal-body .comment .options .btn-like {
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/like.png)
        no-repeat center / 20px;
        margin-right: 18px;
    }
    .modal-body .comment .options .btn-comment {
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/comment.png)
        no-repeat center / 20px;
    }

    .modal .modal-body .comment-input {
        height: 50px;
        border-top: 1px solid #F7F7F7;
        padding: 10px 20px;
        box-sizing: border-box;
        position: fixed;
        z-index: 200;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .comment-input input {
        width: 100%;
        height: 29px;
        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        box-sizing: border-box;
        padding: 0 12px;
        font-size: 12px;
    }
    .comment-input input:focus {
        outline: none;
    }
    .comment-input input::placeholder {
        color: #C2C2C2;
    }
</style>

<style>
    /* @import '@/styles/lib.scss'; */
    .album-comment-modal .modal .modal-name .btn-left {
        width: 41px;
        box-sizing: border-box;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/page-header-arrow.png)
        no-repeat center / 11px 21px;
        filter: brightness(100);
    }
</style>
