import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import FilterTasks from './components/FilterTasks'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', completed: true },
    { id: 2, text: 'Configurar GitHub Actions', completed: true },
    { id: 3, text: 'Deploy a GitHub Pages', completed: true },
    { id: 4, text: 'Agregar funcionalidades extra', completed: false },
    { id: 5, text: 'Mejorar la UI con animaciones', completed: false },
  ])

  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const completedCount = tasks.filter(task => task.completed).length
  const totalCount = tasks.length

  return (
    <div className="App">
      <header className="App-header">
        <h1>✅ ListaProactiva</h1>
        <p className="subtitle">Bacán pero mejorable - v1.0</p>
      </header>

      <main className="App-main">
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{totalCount}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalCount - completedCount}</span>
            <span className="stat-label">Pendientes</span>
          </div>
        </div>

        <AddTaskForm onAddTask={addTask} />
        
        <FilterTasks currentFilter={filter} onFilterChange={setFilter} />
        
        <TaskList 
          tasks={filteredTasks} 
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        <div className="features-roadmap">
          <h3>🚀 Próximas mejoras (para sprints futuros):</h3>
          <ul>
            <li>🔐 Autenticación de usuarios</li>
            <li>📅 Fechas de vencimiento y recordatorios</li>
            <li>🏷️ Categorías y etiquetas</li>
            <li>☁️ Sincronización con backend</li>
            <li>🎨 Temas personalizables</li>
            <li>📱 Aplicación móvil PWA</li>
          </ul>
        </div>
      </main>

      <footer className="App-footer">
        <p>Proyecto: ejemploPaRoger • Desplegado automáticamente con GitHub Pages</p>
        <p className="footer-note">(Innovador pero no revolucionario) 😉</p>
      </footer>
    </div>
  )
}

export default App