import React, { useState, useEffect, useCallback } from 'react'
import { getTasks } from '../../api/tasks'
import TasksDataRow from './TasksDataRow'

export default function TasksTable() {
  const [tasks, setTasks] = useState([])

  const fetch = useCallback(
    () => {
      getTasks()
        .then(setTasks)
    }, []
  )

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <div>
      <h3 className='header'>Tasks</h3>
      <TasksDataRow 
        tasks={tasks} 
        onRefetch={fetch}
      />
    </div>
  )
}
