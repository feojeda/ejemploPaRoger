import { useState, useEffect } from 'react'
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
  const [onlineUsers, setOnlineUsers] = useState(0)
  const [lastTaskTime, setLastTaskTime] = useState(null)
  const [userLevel, setUserLevel] = useState(1)

  // Simular usuarios en línea (cambia aleatoriamente para generar FOMO)
  useEffect(() => {
    const minUsers = 42
    const maxUsers = 89
    
    // Valor inicial
    setOnlineUsers(Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers)
    
    // Actualizar cada 8-15 segundos para simular actividad
    const interval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.floor(Math.random() * 7) - 3 // -3 a +3
        const newVal = prev + change
        return Math.max(minUsers, Math.min(maxUsers, newVal))
      })
    }, Math.random() * 7000 + 8000)
    
    return () => clearInterval(interval)
  }, [])

  // Actualizar nivel del usuario basado en tareas completadas
  useEffect(() => {
    const completedCount = tasks.filter(task => task.completed).length
    if (completedCount >= 10) setUserLevel(3)
    else if (completedCount >= 5) setUserLevel(2)
    else setUserLevel(1)
  }, [tasks])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
    setLastTaskTime(new Date())
    
    // Mostrar notificación de éxito (simulada)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🎀 ¡Tarea agregada!', {
        body: `"${text}" - ¡Eres productivo!`,
        icon: '/favicon.svg'
      })
    }
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
  const productivityScore = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  // Calcular achievements (logros)
  const achievements = [
    {
      id: 1,
      title: 'Early Adopter',
      description: '¡Estás desde el inicio!',
      icon: '🌟',
      unlocked: true,
      exclusive: true
    },
    {
      id: 2,
      title: 'Productivo Nv. ' + userLevel,
      description: userLevel === 3 ? '¡Eres una máquina!' : userLevel === 2 ? '¡Vas bien!' : '¡Sigue así!',
      icon: userLevel === 3 ? '🚀' : userLevel === 2 ? '⚡' : '⭐',
      unlocked: true
    },
    {
      id: 3,
      title: 'Completador',
      description: completedCount >= 3 ? '¡3+ tareas completadas!' : `Faltan ${3 - completedCount}`,
      icon: '✅',
      unlocked: completedCount >= 3
    },
    {
      id: 4,
      title: 'Consistente',
      description: totalCount >= 5 ? '¡5+ tareas creadas!' : `Faltan ${5 - totalCount}`,
      icon: '📝',
      unlocked: totalCount >= 5
    },
    {
      id: 5,
      title: 'Perfecto',
      description: productivityScore === 100 ? '¡100% productividad!' : `${100 - productivityScore}% para perfecto`,
      icon: '🏆',
      unlocked: productivityScore === 100
    }
  ]

  // Solicitar permisos para notificaciones (FOMO)
  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('¡Notificaciones activadas! 🎉')
        }
      })
    }
  }

  // Efecto para solicitar permisos al cargar
  useEffect(() => {
    requestNotificationPermission()
  }, [])

  // Formatear tiempo desde última tarea
  const getLastTaskTimeText = () => {
    if (!lastTaskTime) return 'Aún no agregas tareas'
    
    const now = new Date()
    const diffMs = now - lastTaskTime
    const diffMins = Math.floor(diffMs / 60000)
    
    if (diffMins < 1) return '¡Hace unos segundos!'
    if (diffMins === 1) return 'Hace 1 minuto'
    if (diffMins < 60) return `Hace ${diffMins} minutos`
    
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours === 1) return 'Hace 1 hora'
    return `Hace ${diffHours} horas`
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎀 ListaProactiva</h1>
        <p className="subtitle">Coquette Edition • Bacán pero mejorable • v2.0</p>
        <div className="early-adopter-badge">
          <span>🌟</span>
          <span>EARLY ADOPTER</span>
        </div>
      </header>

      <main className="App-main">
        {/* Banner de FOMO - "No te quedes fuera" */}
        <div className="fomo-banner">
          <div className="fomo-banner-content">
            <div className="fomo-banner-icon">👥</div>
            <div className="fomo-banner-text">
              <h4>¡No te quedes fuera!</h4>
              <p>{onlineUsers} personas están siendo productivas ahora mismo</p>
            </div>
          </div>
          <div className="fomo-banner-count">
            {onlineUsers}
          </div>
        </div>

        {/* Stats con diseño coquette */}
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{totalCount}</span>
            <span className="stat-label">Tareas Totales</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat">
            <span className="stat-number">{productivityScore}%</span>
            <span className="stat-label">Productividad</span>
          </div>
        </div>

        {/* Notificación de última actividad */}
        {lastTaskTime && (
          <div className="fomo-banner" style={{ backgroundColor: 'rgba(212, 255, 230, 0.95)' }}>
            <div className="fomo-banner-content">
              <div className="fomo-banner-icon">🕒</div>
              <div className="fomo-banner-text">
                <h4>¡Última actividad!</h4>
                <p>Tu última tarea fue agregada {getLastTaskTimeText()}</p>
              </div>
            </div>
          </div>
        )}

        {/* Sistema de logros (achievements) - FOMO por desbloquear */}
        <div className="achievements">
          <h3>🎯 Tus Logros Exclusivos</h3>
          <div className="achievement-badges">
            {achievements.map(achievement => (
              <div 
                key={achievement.id} 
                className={`achievement-badge ${achievement.unlocked ? '' : 'locked'}`}
                title={achievement.description}
              >
                <span className="achievement-icon">{achievement.icon}</span>
                <span className="achievement-title">{achievement.title}</span>
                <span className="achievement-desc">
                  {achievement.unlocked ? achievement.description : '🔒 Por desbloquear'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario con sensación de exclusividad */}
        <div className="fomo-banner" style={{ backgroundColor: 'rgba(255, 244, 212, 0.95)' }}>
          <div className="fomo-banner-content">
            <div className="fomo-banner-icon">💎</div>
            <div className="fomo-banner-text">
              <h4>Plan Early Adopter</h4>
              <p>Tienes acceso ilimitado • 3 espacios disponibles en plan free</p>
            </div>
          </div>
        </div>

        <AddTaskForm onAddTask={addTask} />
        
        <FilterTasks currentFilter={filter} onFilterChange={setFilter} />
        
        <TaskList 
          tasks={filteredTasks} 
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        {/* Roadmap - Mejoras futuras con FOMO */}
        <div className="features-roadmap">
          <h3>✨ Próximas Mejoras Exclusivas (¡Reserva tu acceso!)</h3>
          <ul>
            <li>🔐 <strong>Sistema de amigos</strong> - Compara tu productividad</li>
            <li>📅 <strong>Recordatorios premium</strong> - Nunca olvides una tarea</li>
            <li>🏷️ <strong>Etiquetas personalizadas</strong> - Organiza como un pro</li>
            <li>☁️ <strong>Sincronización cloud</strong> - Accede desde cualquier dispositivo</li>
            <li>🎨 <strong>Temas exclusivos</strong> - Desbloquea con logros</li>
            <li>📱 <strong>App móvil premium</strong> - Early access para usuarios activos</li>
          </ul>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--coquette-accent-dark)', fontStyle: 'italic' }}>
            ⚡ <strong>Early Adopters tendrán 50% de descuento en features premium</strong>
          </p>
        </div>
      </main>

      <footer className="App-footer">
        <p>🎀 Proyecto: ejemploPaRoger • Edición Coquette • Desplegado automáticamente con GitHub Pages</p>
        <p>✨ {onlineUsers} personas descubrieron esta app esta semana • ¡Únete antes de que sea mainstream!</p>
        <p>🚀 <strong>CI/CD ACTIVO:</strong> Cada commit despliega automáticamente a GitHub Pages</p>
        <p className="footer-note">
          (Innovador pero no revolucionario • Diseñado para generar FOMO • Bacán pero mejorable) 
          <span style={{ display: 'block', marginTop: '0.5rem' }}>😉 ¿Ya te sientes excluido si no lo usas?</span>
        </p>
      </footer>
    </div>
  )
}

export default App