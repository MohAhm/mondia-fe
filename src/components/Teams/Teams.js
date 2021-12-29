import React, { useState, useEffect } from 'react'
import { getTeams } from '../../api/teams'

export default function Teams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams()
      .then(setTeams)
  }, [])

  console.log(teams)

  return (
    <div>
      <h1>Test Teams API</h1>
    </div>
  )
}
