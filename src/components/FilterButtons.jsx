function FilterButtons({ filter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ]

  return (
    <div className="filter-buttons">
      {filters.map(f => (
        <button
          key={f.key}
          className={`filter-button ${filter === f.key ? 'active' : ''}`}
          onClick={() => onFilterChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons

