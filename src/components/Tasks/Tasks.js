import React, { useState, useEffect } from 'react'
import { getTasks } from '../../api/tasks'

export default function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
      .then(setTasks)
  }, [])

  console.log(tasks)

  return (
    <div>
      <h1>Test Tasks API</h1>
    </div>
  )
}
