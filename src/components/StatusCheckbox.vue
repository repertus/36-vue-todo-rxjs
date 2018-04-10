<template>
  <input id="status-checkbox" type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)">
</template>

<script>
    export default {
        name: 'status-checkbox',
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        }
    }
</script>
