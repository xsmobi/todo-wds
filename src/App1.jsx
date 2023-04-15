import { useState } from "react"
import "./styles.css"
export default function App() {
  const [newItem, setNewItem] = useState("Item 1")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID, title: newItem, completed: false},
      ]
    })
    setNewItem();

  }

  console.log(todos)

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
  <div className = "form-row">
    <label htmlFor="item">New Item</label>
    <input 
      value={newItem} 
      type="text" 
      id="item"
      onChange={e => setNewItem(e.target.value)} />
  </div>
  <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return (
          <li key={todo.id}>
            <label>
            <input type="checkbox"
            checked={todo.completed} 
            onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
      )
    })}
  </ul>
  </>
)
}