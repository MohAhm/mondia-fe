import React, { useState, useEffect, useCallback } from 'react'
import { getEmployees } from '../../api/employees'
import EmployeesDataRow from './EmployeesDataRow'

export default function EmployeesTable() {
  const [employees, setEmployees] = useState([])

  const fetch = useCallback(
    () => {
      getEmployees()
        .then(setEmployees)
    }, []
  )

  useEffect(() => {
    fetch()
  }, [fetch])


  return (
    <div className='employees'>
      <h3 className='header'>Employees</h3>
      <EmployeesDataRow 
        employees={employees} 
        onRefetch={fetch}
      />
    </div>
  )
}
