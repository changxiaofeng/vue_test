<template>
    <div class="album-add">
        <div class="page-name">
            <div class="txt">新建相册</div>
            <div class="btn-back" @click="goBack">取消</div>
        </div>

        <div class="container">
            <input
                class="album-add-input"
                type="text"
                v-model="album.name"
                placeholder="添加相册名称"
            />
            <div class="setting">
                <span>权限</span>
                <button class="to-setting" @click="toSetPrivate">
                    {{ privateTxt }}
                </button>
            </div>
        </div>

        <div class="btn-add" @click="confirmAdd">完成创建</div>

        <AlbumModal
            v-if="showSetModal"
            title="谁能看见"
            @close="showSetModal = false"
            @confirm="confirmSet"
        >
            <template slot="btn-right">
                <span>完成</span>
            </template>

            <template slot="body">
                <div class="setting-list">
                    <div
                        class="public"
                        :class="{ checked: !isPrivate }"
                        @click="setPrivate(false)"
                    >
                        所有人
                    </div>
                    <div
                        class="private"
                        :class="{ checked: isPrivate }"
                        @click="setPrivate(true)"
                    >
                        私密
                    </div>
                </div>
            </template>
        </AlbumModal>
    </div>
</template>

<script>
import AlbumModal from './components/AlbumModal.vue';

export default {
    name: 'AlbumAdd',
    components: {
        AlbumModal
    },
    data: function() {
        return {
            // albumName: '',
            album: {
                name: '',
                private: false
            },
            isPrivate: false,
            showSetModal: false
        };
    },
    computed: {
        privateTxt() {
            return this.album && this.album.private ? '私密' : '公开';
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        // 完成相册新建
        confirmAdd() {
            // 校验
            if (!this.album.name) {
                alert('请填写相册名称');
                return;
            }

            this.$router.push({
                path: '/album',
                query: { newAlbum: JSON.stringify(this.album) }
            });
        },
        // 设置相册属性
        toSetPrivate() {
            this.showSetModal = true;
            this.isPrivate = this.album && this.album.private;
        },
        setPrivate(isPrivate) {
            this.isPrivate = isPrivate;
        },
        confirmSet() {
            if (this.album) {
                this.album.private = this.isPrivate;
            }
            this.showSetModal = false;
        }
    }
};
</script>

<style scoped>
    /* @import '@/styles/lib.scss'; */

    /* $txtColor: #000; */

    .album-add {
        width: 370px;
        height: 100vh;
        background: #f5f5f5;
        text-align: center;
    }
    .album-add .page-name {
        height: 50px;
        line-height: 50px;
        position: relative;
        font-size: 16px;
        color: #ffffff;
        background: linear-gradient(96.95deg, #5adfff -2.23%, #00a3ff 101.49%);
    }
    .album-add .page-name .btn-back {
        width: 58px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .album-add .container {
        padding-left: 20px;
        background: #ffffff;
    }
    .album-add .container .album-add-input {
        width: 100%;
        height: 63px;
        font-size: 24px;
        border: none;
        border-bottom: 1px solid #f7f7f7;
    }
    .album-add .container .album-add-input::placeholder {
        font-size: 24px;
        line-height: 63px;
        color: #c0c0c0;
    }
    .album-add .container .album-add-input:focus {
        outline: none;
    }
    .album-add .container .setting {
        height: 40px;
        text-align: left;
        font-size: 14px;
        line-height: 40px;
        color: #000000;
        position: relative;
    }
    .album-add .container .setting .to-setting {
        height: 40px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        line-height: 20px;
        color: #969696;
        padding-right: 40px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-arrow-right.png)
        no-repeat 40px center / 7px 14px;
        border: none;
    }
    .album-add .container .setting .to-setting:focus {
        outline: none;
    }
    .album-add .btn-add {
        width: 335px;
        height: 42px;
        line-height: 42px;
        background: #2cc4fd;
        border-radius: 6px;
        font-size: 16px;
        color: #fffdfd;
        margin: 20px auto;
    }
</style>

<style>
    /* @import '@/styles/lib.scss'; */

    /* $txtColor: #000; */
    .album-add .modal .modal-name .btn-left {
        width: 41px;
        box-sizing: border-box;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/page-header-arrow.png)
            no-repeat center / 11px 21px;
        filter: brightness(100);
    }
    .album-add .modal .modal-body .setting-list {
        font-size: 15px;
        line-height: 50px;
        color: #000;
        text-align: left;
        background: #fff;
        margin-top: 10px;
    }
    .album-add .modal .modal-body .setting-list .public,
    .album-add .modal .modal-body .setting-list .private {
        height: 50px;
        padding-left: 50px;
    }
    .album-add .modal .modal-body .setting-list .public.checked,
    .album-add .modal .modal-body .setting-list .private.checked{
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/album-add-check.png)
            no-repeat 20px center / 20px 14px;
    }
</style>
