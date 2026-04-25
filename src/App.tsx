import { useState } from 'react'
import TaskInput from './components/TaskInput.tsx'
import TaskList from './components/TaskList.tsx'
import type { Task } from './types.ts'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (text: string) => {
    setTasks(prev => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ])
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <h1>タスクボード</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}
