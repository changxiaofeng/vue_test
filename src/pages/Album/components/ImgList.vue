<template>
    <div class="album-detail-list" v-if="handledAlbum && handledAlbum.imgMap">
        <div class="wrap" v-for="(val, key) in handledAlbum.imgMap" :key="`${key}`">
            <div class="time">{{ key }}</div>
            <div class="img-list">
                <img
                    class="thumbnail"
                    v-for="img in val"
                    :key="img"
                    :src="img"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgList',
    props: ['album'],
    computed: {
        handledAlbum() {
            const imgMap = {};
            if (this.album && this.album.imgList) {
                this.album.imgList.forEach(img => {
                    if (imgMap[img.time]) {
                        imgMap[img.time].push(img.url);
                    } else {
                        imgMap[img.time] = [img.url];
                    }
                });
            }
            return {
                ...this.album,
                imgMap
            };
        }
    }
};
</script>

<style scoped>
    /* @import '@/styles/lib.scss'; */

    /* $txtColor: #000; */

    .album-detail-list {
        padding-top: 30px;
        margin: 0 20px;
    }
    .album-detail-list .wrap {
        padding-top: 20px;
    }
    .album-detail-list .wrap:first-child {
        padding-top: 0;
    }
    .album-detail-list .wrap .time {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #272727;
        text-align: left;
    }
    .album-detail-list .wrap .img-list {
        padding-top: 15px;
        display: flex;
        flex-wrap: wrap;
    }
    .album-detail-list .wrap .img-list .thumbnail {
        flex: none;
        width: 109px;
        height: 109px;
        margin-right: 4px;
    }
</style>
