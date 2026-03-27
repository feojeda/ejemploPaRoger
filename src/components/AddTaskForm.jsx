import { useState } from 'react'

const AddTaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    
    onAddTask(input.trim())
    setInput('')
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="¿Qué necesitas hacer?"
        className="task-input"
        maxLength="100"
      />
      <button type="submit" className="add-btn" disabled={!input.trim()}>
        ➕ Agregar
      </button>
    </form>
  )
}

export default AddTaskForm