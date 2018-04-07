import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
})

export default {
    props: 'newTodo',
    state:  {
        todos: [],
        newTodo: {
            task: '',
            type: '',
            priority: '',
            complete: false
        }
    },
    actions: {
        addTask({commit, state}) {
            instance.post('/todos', state.newTodo)
                .then((response) => {
                    commit('addTask', response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteTask({commit}, todo) {
            instance.delete('/todos/' + todo._id)
                .then((response) => {
                    commit('deleteTask', todo)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getTasks({commit}) {
            instance.get('/todos')
                .then((response) => {
                    console.log(response.data)
                    commit('getTasks', response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        updateTask({commit}, todo) {
            instance.put('todos' + '/' + todo._id)
                .then((response) => {
                    // commit('updateTask', response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    mutations: {
        addTask(state, payload) {
            state.todos.push(payload.todo)
            state.newTodo = {
                task: '',
                type: '',
                priority: '',
                complete: false
            }
        },
        deleteTask(state, todo) {
            let index = state.todos.indexOf(todo)
			state.todos.splice(index, 1)
        },
        getTasks(state, payload) {
            console.log(payload.todos)
            state.todos = payload.todos
        },
        alphaOrder(state) {
            state.todos.sort((last, next) => {
                const a = last.task
                const b = next.task
                return a > b ? 1 : -1
            })
        },
        highPriority(state) {
            state.todos.sort((last, next) => {
                const a = last.priority
                const b = next.priority
                return a > b ? 1 : -1
            })
        },
        lowPriority(state) {
            state.todos.sort((last, next) => {
                const a = last.priority
                const b = next.priority
                return b > a ? 1 : -1
            })
        },
        setTask (state, value) {
            state.newTodo.task = value
        },
        setPriority (state, value) {
            state.newTodo.priority = value
        },
        setType (state, value) {
          state.newTodo.type = value
        }
    },
    getters: {
        task (state) {
             return state.newTodo.task
        },
        todos (state) {
            return state.todos
        },
        priority (state) {
             return state.newTodo.priority
        },
        type (state) {
             return state.newTodo.type
        }
   }
}