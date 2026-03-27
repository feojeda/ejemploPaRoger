import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list empty">
        <p>💎 ¡Oh no! No hay tareas con este filtro.</p>
        <p style={{ marginTop: '1rem', fontSize: '1rem', opacity: 0.7 }}>
          Agrega una tarea para unirte a los {Math.floor(Math.random() * 50) + 50} usuarios productivos
        </p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList