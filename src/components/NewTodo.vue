<template>
    <div id="new-todo" class="newTodo">
        <div class="addTodoText">
            <h4>Add Todo Item</h4>
        </div>
        <form v-on:submit.prevent="addTask">
            <task></task>
            <task-priority></task-priority>
            <task-type></task-type>
            <todo-btn type="submit">Submit</todo-btn>
        </form>
    </div>
</template>

<script>
    import Task from './Task'
    import TaskPriority from './TaskPriority'
    import TaskType from './TaskType'
    import TodoBtn from './TodoBtn'
    import {mapActions} from 'vuex'

    export default {
        name: 'new-todo',
        components: {
            Task,
            TaskPriority,
            TaskType,
            TodoBtn
        },
        methods: {
            addTask() {
                this.$store.dispatch('addTask')
            }
            // addTask($event) {
            //     this.$store.commit('addTask', $event.target.value)
            // }
        }
    }
</script>

<style>
    .newTodo {
        padding-left: 10%;
        padding-right: 50%;
    }

    .addTodoText {
        border-bottom: 1px solid #fff;
    }

    .addTodoText h4 {
        font-size: 21px;
        margin: 0;
    }
</style>
