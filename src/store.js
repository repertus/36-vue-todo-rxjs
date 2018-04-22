import { Observable } from 'rxjs/Observable'
import "rxjs/add/observable/dom/ajax"

console.log('RxJS Observable included?', !!Observable)

const url = 'http://localhost:4000/api/todos/'

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
            Observable.ajax.post(url, state.newTodo, { 'Content-Type': 'application/json' })
              .subscribe(
                data => commit('addTask', data.response.todo),
                error => console.log(error)
              )
        },
        deleteTask({commit}, todo) {
            Observable.ajax.delete(url + todo._id)
              .subscribe(
                () => commit('deleteTask', todo),
                error => console.log(error)
              )
        },
        getTasks({commit}) {
          Observable.ajax.get(url)
            .subscribe(
              data => commit('getTasks', data.response.todos),
              error => console.log(error)
            )
        },
        updateTask({commit}, todo) {
          Observable.ajax.put(url + todo._id, todo, { 'Content-Type': 'application/json' })
            .subscribe(
              data => commit('updateTask', data.response),
              error => console.log(error)
            )
        }
    },
    mutations: {
        addTask(state, todo) {
            state.todos.push(todo)
            state.newTodo = {
                task: '',
                type: '',
                priority: '',
                complete: false
            }
        },
        deleteTask(state, todo) {
            let index = state.todos.indexOf(todo)
			      return state.todos.splice(index, 1)
        },
        getTasks(state, todos) {
            console.log(todos)
            return state.todos = todos
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
            return state.newTodo.task = value
        },
        setPriority (state, value) {
            return state.newTodo.priority = value
        },
        setType (state, value) {
          return state.newTodo.type = value
        },
        updateTask (state, payload) {
            const index = state.todos.findIndex((todo) => todo._id === payload.todo._id)
            if (state.todos[index].task !== payload.todo.task) {
                return state.todos[index].task = payload.todo.task
            }
            else if (state.todos[index].comeplete !== payload.todo.complete) {
                return state.todos[index].comeplete = payload.todo.complete
            }
            return null
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