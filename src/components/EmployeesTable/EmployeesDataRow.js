import React, { useEffect, useState, useCallback } from 'react'
import Table from 'antd/es/table'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

import { getTeam } from '../../api/teams'
import { DATE_FORMAT, toLocalDate } from '../../utils/constants'
import { deleteEmployee } from '../../api/employees'
import DeleteModal from '../DeleteModal'
import EmployeeModal from './EmployeeModal'

export default function EmployeesDataRow({ employees, onRefetch }) {
  const [hasDModalOpened, setHasDModalOpened] = useState(false)
  const [hasCRModalOpened, setHasCRModalOpened] = useState(false)
  const [employee, setEmployee] = useState({})

  const handleDelete = useCallback(
		(employee) => {
      setHasDModalOpened(true)
      setEmployee(employee)
		}, []
	)

  const handleChange = useCallback(
    (employee) => {
      setHasCRModalOpened(true)
      setEmployee(employee)
    }, [],
  )

  return (
    <div className='data_row'>
      <EmployeeModal 
        employee={employee}
        hasModalOpened={hasCRModalOpened}
        setHasModalOpened={setHasCRModalOpened}
      />

      <DeleteModal 
        dataRow={employee}
        text='Are you sure to delete the employee'
        deleteRow={deleteEmployee}
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
            title: 'Team',
            dataIndex: 'teamCode',
            render: (teamCode) => {
              return <TeamRow id={teamCode}/>
            }
          },
          {
            title: 'Join Date',
            dataIndex: 'joinDate',
            render: (joinDate) => toLocalDate(joinDate).format(DATE_FORMAT)
          },
          {
            title: 'Skills',
            dataIndex: 'skills',
            render: (skills) => skills.join(', ')
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
        dataSource={employees}
        pagination={false}
      />
    </div>
  )
}

function TeamRow({ id }) {
  const [name, setName] = useState('')

  useEffect(() => {
    getTeam(id)
      .then(({ name }) => setName(name))
  }, [id])

  return <span>{name}</span>
}
