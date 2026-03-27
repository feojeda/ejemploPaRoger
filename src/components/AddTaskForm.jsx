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
        placeholder="✨ ¿Qué harás hoy para ser más exclusivo?"
        className="task-input"
        maxLength="100"
        title="Agrega una tarea para subir de nivel"
      />
      <button 
        type="submit" 
        className="add-btn" 
        disabled={!input.trim()}
        title={!input.trim() ? 'Escribe algo primero' : '¡Agrega esta tarea exclusiva!'}
      >
        🎀 Agregar Tarea Exclusiva
      </button>
    </form>
  )
}

export default AddTaskForm