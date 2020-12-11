<template>
    <div class="album-like-modal">
        <AlbumModal title="赞" @close="close">
            <template slot="body">
                <div class="total-like">
                    总赞量：{{ (likedList && likedList.length) || 0 }}
                </div>

                <div class="my-like" :class="{ liked: myLike }" @click="handleLike">
                    <span class="icon"></span>
                    <span class="txt">{{ myLike ? '取消' : '' }}赞</span>
                </div>

                <div class="user-list" v-if="likedList">
                    <div class="user" v-for="(user, i) in likedList" :key="i">
                        <img :src="user.avatar" alt="" class="avatar" />
                        <div class="username">
                            {{ user.nick === userInfo.nick ? '我' : user.nick }}
                        </div>
                    </div>
                </div>
            </template>
        </AlbumModal>
    </div>
</template>

<script>
import AlbumModal from '../AlbumModal.vue';

export default {
    name: 'LikeModal',
    components: {
        AlbumModal
    },
    props: ['likedList', 'userInfo'],
    computed: {
        myLike() {
            if (this.likedList && this.userInfo) {
                return this.likedList.some(item => item.nick === this.userInfo.nick);
            }
            return false;
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
/* @import '@/styles/lib.scss'; */

/* $txtColor: #000; */

    .modal .modal-body .total-like {
        height: 48px;
        padding-left: 20px;
        font-size: 14px;
        line-height: 48px;
        color: #8f8f8f;
        text-align: left;
    }
    .modal .modal-body .my-like {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        background: #fff;
        font-size: 14px;
    }
    .modal .modal-body .my-like .icon {
        width: 20px;
        height: 19px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-like.png)
        no-repeat center / contain;
        margin-right: 12px;
    }
    .modal .modal-body .my-like.liked .icon {
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-like-me.png)
            no-repeat center / contain;
    }
    .modal .modal-body .user-list {
        margin-top: 20px;
    }
    .modal .modal-body .user-list .user {
        display: flex;
        align-items: center;
        padding-left: 20px;
        background: #fff;
    }
    .modal .modal-body .user-list .user .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
    }
    .modal .modal-body .user-list .user .username {
        height: 70px;
        line-height: 70px;
        font-size: 14px;
        border-bottom: 1px solid #f7f7f7;
    }
</style>

<style>
    /* @import '@/styles/lib.scss'; */
    .album-like-modal .modal .modal-name .btn-left {
        width: 41px;
        box-sizing: border-box;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/page-header-arrow.png)
        no-repeat center / 11px 21px;
        filter: brightness(100);
    }
</style>
