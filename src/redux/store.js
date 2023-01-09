import todoDataReducer from '../reducers/todoDataReducer'

const store = {
  _state: {
    todoData: {
      tasks: [],
      newTaskText: '',
    },
  },

  _callSubscriber() {
    //просто заглушка
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.todoData = todoDataReducer(this._state.todoData, action)
    this._callSubscriber(this._state)
  },
}

window.store = store

export default store
