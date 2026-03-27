const FilterTasks = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Todas', icon: '👑', description: 'Ver todas tus tareas exclusivas' },
    { key: 'active', label: 'Pendientes', icon: '🩷', description: 'Tareas que te harán brillar' },
    { key: 'completed', label: 'Completadas', icon: '🎀', description: 'Tus logros coquetones' }
  ]

  return (
    <div className="filter-tasks">
      <p className="filter-label">
        <span>🔍</span>
        Filtra tu exclusividad:
      </p>
      <div className="filter-buttons">
        {filters.map(({ key, label, icon, description }) => (
          <button
            key={key}
            className={`filter-btn ${currentFilter === key ? 'active' : ''}`}
            onClick={() => onFilterChange(key)}
            title={description}
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTasks