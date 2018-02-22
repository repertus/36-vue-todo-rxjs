<template>
    <div class="edit-btn">
        <button type="button">
            <span>
                <i class="fas fa-pencil-alt"></i>
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'edit-btn'
    }
</script>

<style>
    .edit-btn button {
        -webkit-appearance: button;
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
        display: inline-block;
        padding: 6px 12px;
        margin: 0 3px 0 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
    }

    .edit-btn button:active:hover,
    .edit-btn button:active {
        color: #fff;
        background-color: #398439;
        border-color: #255625;
    }

    .edit-btn button:focus,
    .edit-btn button:active:focus {
        outline: 0
    }
</style>
