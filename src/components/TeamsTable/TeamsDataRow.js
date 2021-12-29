import React, { useState, useCallback } from 'react'
import Table from 'antd/es/table'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

import { DATE_FORMAT, toLocalDate } from '../../utils/constants'
import DeleteModal from '../DeleteModal'
import { deleteTeam } from '../../api/teams'

export default function TeamsDataRow({ teams, onRefetch }) {
  const [hasDModalOpened, setHasDModalOpened] = useState(false)
  const [hasCRModalOpened, setHasCRModalOpened] = useState(false)
  const [team, setTeam] = useState({})

  const handleDelete = useCallback(
		(team) => {
      setHasDModalOpened(true)
      setTeam(team)
		}, []
	)

  const handleChange = useCallback(
    (team) => {
      setHasCRModalOpened(true)
      setTeam(team)
    }, [],
  )

  return (
    <div className='data_row'>
      <DeleteModal 
        dataRow={team}
        text='Are you sure to delete the team'
        deleteRow={deleteTeam}
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
            title: 'Start Date',
            dataIndex: 'startDate',
            render: (startDate) => toLocalDate(startDate).format(DATE_FORMAT)
          },
          {
            title: 'End Date',
            dataIndex: 'endDate',
            render: (endDate) => toLocalDate(endDate).format(DATE_FORMAT)
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
        dataSource={teams}
        pagination={false}
      />
    </div>
  )
}

