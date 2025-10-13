import { useState } from 'react'
import './App.css'

function App() {
  let [todo ,setTodo] =useState('')
  let [userTodo ,setUserTodo] =useState([])
  function handleClick() {
    if (todo == '') {
      alert('Enter todo')
      return
    }
    setUserTodo(prev => [...prev,{id:Date.now(),todo}])
    setTodo('')
    console.log(userTodo)
  }
  function resetAll() {
    setUserTodo([])
    setTodo('')
  }
  function edit(id) {
    let fitered = userTodo.filter((item) => item.id == id)
    console.log(fitered)
    setTodo(userTodo.filter((item) => item.id == id)[0].todo)
    setUserTodo(userTodo.filter((item) => item.id != id))
  }
  function remove(id) {
    setUserTodo(userTodo.filter((item) => item.id != id))
  }
  return (
    <div className="main">
      <div className="search">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter todo name'/>
        <button onClick={handleClick}>Add</button>
        <button onClick={resetAll}>Delete</button>
      </div>
      <ul className="lists">
        {userTodo.map((value) => (
          <li key={value.id}>
            {value.todo}
            <div className="btns">
              <button onClick={() => edit(value.id)}>Edit</button>
              <button onClick={() => remove(value.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
