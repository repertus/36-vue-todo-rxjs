<template>
    <div class="task-list">
        <table>
            <tr class="tableHeader">
                <th v-for="header in headers" :key="header.text">{{ header.text }}</th>
            </tr>
            <tr v-for="todo in todos" :key="todo._id" v-bind:class="{'danger': todo.priority == 'a_high', 'warning' : todo.priority == 'b_medium', 'success' : todo.priority == 'c_low'}">
                <td class="btnContainer">
                    <div v-if="onEdit == false">
                        <edit-btn v-on:click.native="onEdit = true"></edit-btn>
                        <delete-btn v-on:click.native="deleteTask(todo)"></delete-btn> 
                    </div>
                    <div v-else>
                        <save-btn v-on:click.native="editTask(todo), onEdit=false"></save-btn>
                    </div>
                </td>
                <td>{{types[todo.type]}}</td>
                <td v-if="onEdit == false">{{todo.task}}</td>
                <td v-else><input type="text" v-model="todo.task"></td>
                <td>
                    <status-checkbox v-on:change="editTask(todo)" v-model="todo.complete"></status-checkbox>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import DeleteBtn from './DeleteBtn'
    import EditBtn from './EditBtn'
    import SaveBtn from './SaveBtn'
    import StatusCheckbox from './StatusCheckbox'

    export default {
        name: 'task-list',
        components: {
            DeleteBtn,
            EditBtn,
            SaveBtn,
            StatusCheckbox
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
                },
                onEdit: false
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
            },
            editTask(todo) {
                this.$store.dispatch('updateTask', todo)
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
        width: 60%;
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
        padding: 0 8px;
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

