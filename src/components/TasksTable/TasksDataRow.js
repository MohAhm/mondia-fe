import React, { useState, useCallback } from 'react'
import Table from 'antd/es/table'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

import DeleteModal from '../DeleteModal'
import { deleteTask } from '../../api/tasks'

export default function TaskDataRow({ tasks, onRefetch }) {
  const [hasDModalOpened, setHasDModalOpened] = useState(false)
  const [hasCRModalOpened, setHasCRModalOpened] = useState(false)
  const [task, setTask] = useState({})

  const handleDelete = useCallback(
		(task) => {
      setHasDModalOpened(true)
      setTask(task)
		}, []
	)

  const handleChange = useCallback(
    (task) => {
      setHasCRModalOpened(true)
      setTask(task)
    }, [],
  )

  return (
    <div className='data_row'>
      <DeleteModal 
        dataRow={task}
        text='Are you sure to delete the task'
        deleteRow={deleteTask}
        onRefetch={onRefetch}
        hasModalOpened={hasDModalOpened}
        setHasModalOpened={setHasDModalOpened}
      />

      <Table
        className='data_row__table'
        rowKey={({ _id }) => _id}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'Code',
            dataIndex: 'code',
          },
          {
            title: 'Project',
            dataIndex: 'project',
          },
          {
            title: 'Description',
            dataIndex: 'description',
          },
          {
            title: 'Edit',
            dataIndex: '_id',
            render: (_id, { ...rest }) => (
              <AiFillEdit 
                className='data_row__table-icon' 
                onClick={() => handleChange(rest)}
              />
            )
          },
          {
            title: 'Delete',
            dataIndex: '_id',
            render: (_id, { ...rest }) => (
              <AiFillDelete 
                className='data_row__table-icon'
                onClick={() => handleDelete(rest)}
              />
            )
          }
        ]}
        dataSource={tasks}
        pagination={false}
      />
    </div>
  )
}

