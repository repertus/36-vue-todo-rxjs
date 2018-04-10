<template>
    <div class="save-btn">
        <button type="button">
            <span>
                <i class="fas fa-check"></i>
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'save-btn'
    }
</script>

<style>
    .save-btn {
        display: inline-block;
    }
    .save-btn button {
        -webkit-appearance: button;
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
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

    .save-btn button:active:hover,
    .save-btn button:active {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }

    .save-btn button:focus,
    .save-btn button:active:focus {
        outline: 0
    }
</style>
