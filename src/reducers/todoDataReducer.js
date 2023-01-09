import {ACTIONS} from '../consts/actions'
import {nanoid} from 'nanoid'

const todoDataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TASK':
      const newTask = {
        id: nanoid(),
        taskText: state.newTaskText,
      }
      state.tasks.unshift(newTask)
      state.newTaskText = ''
      return state

    case 'UPDATE-TASK-TEXT':
      state.newTaskText = action.body
      return state

    default:
      return state
  }
}

export const addTaskActionCreator = () => ({type: ACTIONS.ADD_TASK})
export const updateTaskTextActionCreator = (newTaskText) => ({
  type: ACTIONS.UPDATE_TASK_TEXT,
  body: newTaskText,
})

export default todoDataReducer
