<template>
    <div class="modal">
        <div class="modal-name">
            <div class="txt">{{title}}</div>
            <div class="btn-left" @click="close">
                <slot name="btn-left"></slot>
            </div>
            <div class="btn-right" @click="confirm">
                <slot name="btn-right"></slot>
            </div>
        </div>
        <div class="modal-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlbumModal',
    props: ['title'],
    methods: {
        confirm() {
            this.$emit('confirm');
        },
        close() {
            this.$emit('close');
        }
    }
}
</script>


<style scoped>
    /* @import '@/styles/lib.scss'; */

    /* $txtColor: #000; */
    .modal {
        width: 370px;
        position: fixed;
        z-index: 200;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #f5f5f5;
        animation: modalShow 0.2s linear;
    }
    .modal .modal-name {
        height: 50px;
        line-height: 50px;
        position: relative;
        font-size: 16px;
        color: #ffffff;
        background: linear-gradient(96.95deg, #5adfff -2.23%, #00a3ff 101.49%);
    }
    .modal .modal-name .txt{
        text-align: center;
    }
    .modal .modal-name .btn-right,
    .modal .modal-name .btn-left {
        position: absolute;
        top: 0;
    }
    .modal .modal-name .btn-left {
        height: 50px;
        padding: 0 15px;
        left: 0;
    }
    .modal .modal-name .btn-right {
        height: 50px;
        padding: 0 20px;
        right: 0;
    }

    @keyframes modalShow {
        0% {
            top: 100vh;
        }
        100% {
            top: 0;
        }
    }
</style>
