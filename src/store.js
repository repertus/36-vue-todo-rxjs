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
    mutations: {
        addTask(state) {
          state.todos.push(state.newTodo)
          state.newTodo = {
            task: '',
            type: '',
            priority: '',
            complete: false
          }
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