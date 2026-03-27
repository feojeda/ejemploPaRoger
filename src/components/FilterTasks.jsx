const FilterTasks = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Todas' },
    { key: 'active', label: 'Pendientes' },
    { key: 'completed', label: 'Completadas' }
  ]

  return (
    <div className="filter-tasks">
      <p className="filter-label">Filtrar:</p>
      <div className="filter-buttons">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={`filter-btn ${currentFilter === key ? 'active' : ''}`}
            onClick={() => onFilterChange(key)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTasks