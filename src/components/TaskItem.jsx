const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <button 
          className="toggle-btn"
          onClick={() => onToggle(task.id)}
          aria-label={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
          title={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
        >
          {task.completed ? '🎀' : '🩷'}
        </button>
        
        <span className="task-text">{task.text}</span>
      </div>
      
      <button 
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
        title="Eliminar tarea"
      >
        💔
      </button>
    </div>
  )
}

export default TaskItem