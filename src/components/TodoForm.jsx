import {addTaskActionCreator, updateTaskTextActionCreator} from '../reducers/todoDataReducer.js'

const TodoForm = (props) => {
  const onTaskChange = (evt) => {
    const newTaskText = evt.currentTarget.value
    props.dispatch(updateTaskTextActionCreator(newTaskText))
  }

  const onClickTask = (evt) => {
    evt.preventDefault()
    props.dispatch(addTaskActionCreator())
  }

  return (
    <>
      <form>
        <input onChange={onTaskChange} value={props.newTaskText} type='text' className='todo-input' />
        <button onClick={onClickTask} className='todo-button' type='submit'>
          <i className='fas fa-plus-square'></i>
        </button>
      </form>
    </>
  )
}

export default TodoForm
