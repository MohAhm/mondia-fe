import React, { useState, useEffect, useCallback } from 'react'
import { getEmployees } from '../../api/employees'
import EmployeesDataRow from './EmployeesDataRow'

export default function EmployeesTable() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees()
      .then(setEmployees)
  }, [])

  const handleTableRefetch = useCallback(
		() => {
      getEmployees()
        .then(setEmployees)
		}, []
	)

  return (
    <div className='employees'>
      <h3>Employees</h3>
      <EmployeesDataRow 
        employees={employees} 
        onRefetch={handleTableRefetch}
      />
    </div>
  )
}
