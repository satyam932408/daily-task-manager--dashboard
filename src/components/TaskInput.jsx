import { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask(input)
    setInput('')
  }

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  )
}

export default TaskInput

