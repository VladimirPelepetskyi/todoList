import TodoItem from './TodoItem'

const TodoList = (props) => {
  const todoItemsElements = props.tasks.map((task) => <TodoItem taskText={task.taskText} />)

  return (
    <>
      <div className='todo-container'>
        <ul className='todo-list'>{todoItemsElements}</ul>
      </div>
    </>
  )
}

export default TodoList
