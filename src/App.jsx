import { useState, useEffect } from 'react'
import './App.css'
import TaskCreator from './components/TaskCreator'
import TaskTable from './components/TaskTable'
import VisibilityControl from './components/VisibilityControl'

function App() {
  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  const clearTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container col-md-4 offset-md-4 p-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          setShowCompleted={setChecked => setShowCompleted(setChecked)}
          clearTasks={clearTasks}
        />

        {showCompleted && (
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
        )}
      </div>
    </main>
  )
}

export default App