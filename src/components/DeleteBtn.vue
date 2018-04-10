<template>
    <div class="delete-btn">
        <button type="button">
            <span>
                <i class="fas fa-trash-alt"></i>
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'delete-btn'
    }
</script>

<style>
    .delete-btn {
        display: inline-block;
    }
    .delete-btn button {
        -webkit-appearance: button;
        color: #fff;
        background-color: #d9534f;
        border-color: #d43f3a;
        display: inline-block;
        padding: 6px 12px;
        margin: 0 0 0 3px;
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

    .delete-btn button:active:hover,
    .delete-btn button:active {
        color: #fff;
        background-color: #ac2925;
        border-color: #761c19;
    }

    .delete-btn button:focus,
    .delete-btn button:active:focus {
        outline: 0
    }
</style>
