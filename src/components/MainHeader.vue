<template>
    <header id="main-header" class="mainHeader">
        <h1>{{ msg }}</h1>
    </header>
</template>

<script>
    export default {
        name: 'main-header',
        data () {
            return {
                msg: 'My To Do List'
            }
        }
    }
</script>

<style>
    .mainHeader {
        width: 100%;
        text-align: center;
        height: 100px;
        background-color: #c9ae00;
        background-image: url(https://www.transparenttextures.com/patterns/noisy-net.png);
    }

    .mainHeader h1 {
        font-family: 'Righteous', cursive;
        color: #b6c9c9;
        text-shadow: 2px 2px 4px #000000;
        font-family: 'Architects Daughter';
        font-size: 3em;
        font-style: normal;
        font-variant: normal;
        font-weight: 500;
        line-height: 100px;
        margin: 0;
    }
</style>

