import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from './config/reducers/todoSlice'


function App() {

  const todoRef = useRef()
  const dispatch = useDispatch();
  const selector = useSelector(state => state.todo)

  function addTodoFunc(e) {
    e.preventDefault();
    dispatch(addTodo({
      title: todoRef.current.value
    }))
    todoRef.current.value = ''
  }

  return (
    <>

      <div>
        <h1>Todo Application</h1>
        <hr />
        <br />
        <div>
          <form onSubmit={addTodoFunc}>
            <input ref={todoRef} type="text" name="" id="" />
            <button type="submit">Add Todo</button>
          </form>
        </div>

        <hr />

        <ul>
          {
            selector.map((value, index) => {
              return <li key={value.id}> {value.title} <button>Delete</button>  </li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
