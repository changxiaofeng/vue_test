<template>
    <div class="edit-modal">
        <div class="edit-modal-inner">
            <AlbumModal title="编辑相册" @close="close">
                <template slot="btn-left">取消</template>
                <template slot="btn-right">保存</template>
                <template slot="body">
                    <div class="container">
                        <div class="item album-name">{{ album && album.name }}</div>
                        <div v-if="album && album.desc" class="item album-desc">
                            {{ album && album.desc }}
                        </div>
                        <div class="item album-change-cover" @click="showCoverModal = true">
                            <span>更换封面</span>
                            <span class="icon"></span>
                        </div>
                        <div class="item album-set-private">
                            <span>权限</span>
                            <span class="private">{{ privateTxt }}</span>
                            <span class="icon"></span>
                        </div>
                        <div class="item album-set-private">
                            相册置顶<span class="hint">(其他置顶相册将被替换)</span>
                            <div
                                class="switch"
                                :class="{ on: switchOn }"
                                @click="switchOn = !switchOn"
                            >
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-delete">删除相册</button>
                </template>
            </AlbumModal>
        </div>

        <div class="cover-change-modal" v-if="showCoverModal">
            <AlbumModal :title="album && album.name" @close="showCoverModal = false">
                <template slot="body">
                    <ImgList :album="album" />
                </template>
            </AlbumModal>
        </div>
    </div>
</template>

<script>
import AlbumModal from '../AlbumModal.vue';
import ImgList from '../ImgList.vue';

export default {
    name: 'EditModal',
    components: {
        AlbumModal,
        ImgList
    },
    props: ['album'],
    data: function() {
        return {
            switchOn: false,
            showCoverModal: false
        };
    },
    computed: {
        privateTxt() {
            return this.album && this.album.private ? '私密' : '公开';
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        confirm() {
            this.$emit('confirm');
        }
    }
};
</script>

<style scoped>
/* @import '@/styles/lib.scss'; */

/* $txtColor: #000; */
    .edit-modal .edit-modal-inner .modal-body .container {
        background: #fff;
        padding-left: 20px;
    }
    .modal-body .container .item {
        padding: 15px 0;
        border-bottom: 1px solid #f7f7f7;
        text-align: left;
        color: #000;
        font-size: 14px;
        line-height: 20px;
        position: relative;
    }
    .modal-body .container .item:last-child {
        border: none;
    }
    .modal-body .container .item .icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 47px;
        height: 50px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-arrow-right.png)
            no-repeat center / 7px 14px;
    }
    .modal-body .container .album-name {
        font-size: 15px;
        line-height: 21px;
    }
    .modal-body .container .album-desc {
        font-size: 15px;
        line-height: 21px;
        color: #9f9f9f;
        padding-right: 20px;
    }
    .modal-body .container .album-set-private .switch {
        width: 56px;
        box-sizing: border-box;
        border-radius: 28px;
        padding: 2px;
        background: #f1f1f1;
        position: absolute;
        top: 11px;
        right: 20px;
        transition: all 0.2s;
    }
    .modal-body .container .album-set-private .switch .circle {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #fff;
        margin-left: 0;
    }
    .modal-body .container .album-set-private .switch.on {
        background: #00a3ff;
    }
    .modal-body .container .album-set-private .switch.on .circle {
        margin-left: 27px;
    }
    .modal-body .container .hint {
        margin-left: 8px;
        font-size: 12px;
        color: #a6a6a6;
    }

    .edit-modal .edit-modal-inner .modal-body .btn-delete {
        width: calc(100% - 40px);
        /* width: 100%; */
        height: 42px;
        margin: 20px 20px 0;
        background: #ff6363;
        border-radius: 6px;
        color: #fff;
        font-size: 16px;
    }
</style>

<style>
    /* @import '@/styles/lib.scss'; */
    .edit-modal .cover-change-modal .modal {
        background: #fff;
    }
    .edit-modal .cover-change-modal .modal .modal-name .btn-left {
        width: 41px;
        box-sizing: border-box;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/page-header-arrow.png)
            no-repeat center / 11px 21px;
        filter: brightness(100);
    }
</style>
