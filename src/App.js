import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = (props) => {
  return (
    <>
      <Header />
      <TodoForm dispatch={props.dispatch} newTaskText={props.state.todoData.newTaskText} />
      <TodoList tasks={props.state.todoData.tasks} />
    </>
  )
}
export default App
