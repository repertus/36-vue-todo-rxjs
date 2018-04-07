<template>
    <div class="task-list">
        <table>
            <tr class="tableHeader">
                <th v-for="header in headers" :key="header.text">{{ header.text }}</th>
            </tr>
            <tr v-for="todo in todos" :key="todo._id" v-bind:class="{'danger': todo.priority == 'a_high', 'warning' : todo.priority == 'b_medium', 'success' : todo.priority == 'c_low'}">
                <td class="btnContainer">
                    <edit-btn v-on:click="editTask(todo)"></edit-btn>
                    <delete-btn v-on:click.native="deleteTask(todo)"></delete-btn>
                </td>
                <td>{{types[todo.type]}}</td>
                <td>{{todo.task}}</td>
                <td>
                    <input type="checkbox" v-model="todo.complete">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import DeleteBtn from './DeleteBtn'
    import EditBtn from './EditBtn'

    export default {
        name: 'task-list',
        components: {
            DeleteBtn,
            EditBtn
        },
        data: function () {
            return {
                headers: [
                    {
                        text: 'Edit / Delete'
                    },
                    {
                        text: 'Type'
                    },
                    {
                        text: 'Task'
                    },
                    {
                        text: 'Complete'
                    }
                ],
                types: {
                    1: 'Home',
                    2: 'Work',
                    3: 'Personal',
                    4: 'School'
                }
            }
        },
        mounted() {
            this.$store.dispatch('getTasks')
        },
        computed: {
            todos: {
                get() {
                    return this.$store.state.todos
                }
            }
        },
        methods: {
            deleteTask(todo) {
                this.$store.dispatch('deleteTask', todo)
            }
        }
    }
</script>

<style>
    .task-list table {
        margin-left: 5%;
        margin-top: 3%;
        width: 90%;
        border-collapse:collapse
    }
    
    .tableHeader th {
        border-bottom: 2px solid #ddd;
        line-height: 30px;
        text-align: left;
    }

    .tableHeader th:nth-child(3) {
        width: 40%;
    }

    .task-list table tr {
        height: 56px;
    }

    .task-list table td {
        margin-top: 11px;
        margin-bottom: 11px; 
    }

    .task-list .btnContainer {
        display: inline-flex;
    }

    .danger {
        background-color: #f2dede;
    }

    .warning {
        background-color: #fcf8e3;
    }

    .success {
        background-color: #dff0d8;
    }
</style>

