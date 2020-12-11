<template>
    <div class="album-page">
        <div class="page-name">
            <div class="txt">相册</div>
            <div class="detail">3相册 5照片</div>
            <div class="btn-back" @click="goBack"></div>
        </div>

        <div class="container">
            <div class="btn-add-album" @click="toAddAlbum">
                <span class="icon"></span>
                <span class="txt">新建相册</span>
            </div>

            <div
                class="album"
                v-for="(album, index) in albumList"
                :key="`album-${index}`"
                @click="gotoDetail(album.id)"
            >
                <img class="cover" :src="album.cover" alt="" />
                <div class="name">{{ album.name }}</div>
                <div class="detail">
                    <span>{{ (album.imgList && album.imgList.length) || 0 }}张</span>
                    <span v-if="album.private" class="private">私密</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request.js';

export default {
    name: 'Album',
    data: function() {
        return {
            albumList: []
        };
    },
    async mounted() {
        await this.queryAlbums();
        this.addAlbum();
    },
    methods: {
        // 添加新建相册
        addAlbum() {
            const newAlbumJSONStr = this.$route.query.newAlbum || '{}';
            const newAlbum = JSON.parse(newAlbumJSONStr);
            console.log(newAlbum);
            if (newAlbum.name) {
                // to delete
                newAlbum.cover =
                'https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-cover3.jpg';
                if (this.albumList) {
                    this.albumList.unshift(newAlbum);
                }
                // todo pick 图片
            }
        },
        async queryAlbums() {
            this.albumList = (await request('/api/queryalbums')) || [];
        },
        goBack() {
            this.$router.go(-1);
        },
        toAddAlbum() {
            this.$router.push('/album/add');
        },
        gotoDetail(id) {
            this.$router.push(`/album/detail?id=${id}`);
        }
    }
};
</script>

<style scoped>
    /* @import '@/styles/lib.scss'; */

    .album-page {
        padding-top: 53px;
        width: 378px;
        border: 1px solid #f2f2f2;
    }
    .album-page .page-name {
        width: 378px;
        height: 53px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        text-align: center;
    }
    .album-page .page-name .btn-back {
        width: 50px;
        height: 53px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/page-header-arrow.png)
            no-repeat center / 11px 21px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .album-page .page-name .txt {
        font-size: 16px;
        line-height: 22px;
        color: #272727;
        padding-top: 15px;
    }
    .album-page .page-name .detail {
        font-size: 11px;
        line-height: 15px;
        color: #aaaaaa;
    }

    .album-page .container {
        display: flex;
        flex-wrap: wrap;
        margin-left: 15px;
        padding-top: 15px;
    }
    .album-page .container .btn-add-album,
    .album-page .container .album .cover {
        width: 165px;
        height: 165px;
        border-radius: 6px;
    }
    .album-page .container .btn-add-album,
    .album-page .container .album {
        margin-right: 15px;
    }
    .album-page .container .btn-add-album {
        font-size: 14px;
        line-height: 20px;
        color: #a5a5c2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #eeeeee;
    }
    .btn-add-album .icon {
        width: 40px;
        height: 32px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-add.png)
        center / contain;
    }
    .btn-add-album .txt {
        margin-top: 11px;
    }
    .album-page .container .album {
        font-size: 0;
        text-align: left;
        padding-bottom: 20px;
        cursor: pointer;
        
    }
    .container .album .name {
        padding-top: 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
    }
    .container .album .detail {
        padding-top: 4px;
        font-size: 12px;
        line-height: 17px;
        color: #aaaaaa;
    }
    .container .album .detail .private {
        margin-left: 8px;
    }
</style>
