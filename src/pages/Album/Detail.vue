<template>
    <div class="album-detail">
        <div class="banner">
            <div class="album-name">
                {{ album && album.name }}
            </div>
            <div class="subtitle">{{ albumLen }}照片</div>
            <div class="options">
                <button class="btn-like" @click="showLikeDetail">
                    <span class="icon"></span>
                    <span class="txt">{{ albumLikedNum }}</span>
                </button>
                <button class="btn-comment" @click="showCommentDetail">
                    <span class="icon"></span>
                    <span class="txt">{{ albumCommentNum }}</span>
                </button>
            </div>
            <button class="btn-back" @click="goBack"></button>
            <div class="mask" :style="bannerStyle"></div>
        </div>

        <div class="container">
            <ImgList :album="album" />
        </div>

        <div class="footer" @click="showEdit">
            <button class="btn-album-edit">
                <span class="icon"></span>
                <span class="txt">编辑相册</span>
            </button>
        </div>

        <LikeModal
            v-if="showLikeModal"
            :likedList="(album && album.likedUserList) || []"
            :userInfo="userInfo"
            @likeAlbum="likeAlbum"
            @close="showLikeModal = false"
        />

        <CommentModal
            v-if="showCommentModal"
            :likedList="(album && album.likedUserList) || []"
            :commentList="(album && album.commentList) || []"
            :userInfo="userInfo"
            @likeAlbum="likeAlbum"
            @close="showCommentModal = false"
        />

        <EditModal
            v-if="showEditModal"
            :album="album"
            @close="showEditModal = false"
        />
    </div>
</template>

<script>
import request from '@/utils/request.js';
import ImgList from './components/ImgList.vue';
import LikeModal from './components/LikeModal/index.vue';
import CommentModal from './components/CommentModal/index.vue';
import EditModal from './components/EditModal/index.vue';

export default {
    name: 'AlbumDetail',
    components: {
        ImgList,
        LikeModal,
        CommentModal,
        EditModal
    },
    data: function() {
        return {
            userInfo: null,
            album: null,
            showLikeModal: false,
            showCommentModal: false,
            showEditModal: false
        };
    },
    async mounted() {
        await this.getAlbum();
        await this.getAccount();
    },
    computed: {
        bannerStyle() {
        if (this.album) {
            return `background: url(${this.album.cover}) no-repeat center top / cover`;
        } else {
            return '';
        }
        },
        albumLen() {
            return (
                (this.album && this.album.imgList && this.album.imgList.length) || 0
            );
        },
        albumLikedNum() {
            return (
                (this.album &&
                this.album.likedUserList &&
                this.album.likedUserList.length) ||
                0
            );
        },
        albumCommentNum() {
            return (
                (this.album &&
                this.album.commentList &&
                this.album.commentList.length) ||
                0
            );
        }
    },
    methods: {
        async getAccount() {
            this.userInfo = (await request('/api/account')) || {};
        },
        async getAlbum() {
            const id = this.$route.query.id;
            if (!id) {
                return;
            }
            this.album = ((await request(`/api/getalbum?id=${id}`)) || {}).album;
        },
        goBack() {
            this.$router.go(-1);
        },
        showLikeDetail() {
            this.showLikeModal = true;
        },
        showCommentDetail() {
            this.showCommentModal = true;
        },
        showEdit() {
            this.showEditModal = true;
        },
        likeAlbum(myLike) {
            if (myLike) {
                if (this.album.likedUserList) {
                    this.album.likedUserList.unshift(this.userInfo);
                } else {
                    this.album.likedUserList = [this.userInfo];
                }
            } else {
                if (this.album.likedUserList) {
                    this.album.likedUserList = this.album.likedUserList.filter(
                        user => user.nick !== this.userInfo.nick
                    );
                }
            }
        }
    }
};
</script>

<style scoped>
    /* @import '@/styles/lib.scss';

    $txtColor: #000; */
    .album-detail {
        width: 370px;
        border: 1px solid #f2f2f2;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .album-detail .banner {
        height: 186px;
        position: relative;
        text-align: center;
    }
    .banner .album-name {
        padding-top: 50px;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        color: #272727;
    }
    .banner .subtitle {
        padding-top: 5px;
        font-size: 11px;
        line-height: 15px;
        color: #6d6d6d;
    }
    .banner .options {
        display: flex;
        align-items: center;
    }
    .banner .options .btn-like,
    .banner .options .btn-comment {
        height: 20px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        
    }
    .banner .options .btn-like .txt,
    .banner .options .btn-comment .txt {
        font-size: 12px;
        color: #000;
    }
    .banner .options .btn-like .icon {
        width: 20px;
        height: 19px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-like.png)
        no-repeat center / contain;
        margin-right: 8px;
    }
    .banner .options .btn-comment .icon {
        width: 20px;
        height: 18px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-comment.png)
        no-repeat center / contain;
        margin-right: 8px;
    }

    .banner .btn-back {
        width: 41px;
        height: 53px;
        border: none;
        position: absolute;
        left: 0;
        top: 0;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/page-header-arrow.png)
            no-repeat center / 11px 21px;
    }
    .banner .btn-back:focus {
        outline: none;
    }
    .banner .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        opacity: 0.5;
    }
    .album-detail .container {
        padding-bottom: 70px;
    }
    .album-detail .footer {
        width: 370px;
        height: 49px;
        position: fixed;
        z-index: 200;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-top: 1px solid #ececec;
    }
    .album-detail .footer .btn-album-edit {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .footer .btn-album-edit .txt {
        font-size: 11px;
        line-height: 15px;
        color: #000;
        padding-top: 4px;
    }
    .footer .btn-album-edit .icon {
        width: 22px;
        height: 22px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-edit.png)
        no-repeat center / contain;
    }
</style>
