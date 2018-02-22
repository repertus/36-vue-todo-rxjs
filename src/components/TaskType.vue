<template>
    <div class="task-type">
        <label for="">Type</label>
        <select v-model="type" required>
            <option disabled value="">-- Select --</option>
            <option v-for="type in types" v-bind:value="type.value">{{ type.text }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'task-type',
        data: function() {
            return {
                selected: '',
                types: [
                    {
                        value: 1,
                        text: 'Home'
                    },
                    {
                        value: 2,
                        text: 'Work'
                    },
                    {
                        value: 3,
                        text: 'Personal'
                    },
                    {
                        value: 4,
                        text: 'School'
                    }
                ]
            }
        },
        computed: {
            type: {
                get() {
                    return this.$store.state.newTodo.type
                },
                set(value) {
                    this.$store.commit('setType', value)
                }
            }
        }
    }
</script>

<style>
    .task-type {
        margin: 20px 0; 
    }

    .task-type label, 
    .task-type select {
        display: block;
        width: 100%;
        font-family: 'Architects Daughter';
    }

    .task-type select {
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 24px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
</style>
