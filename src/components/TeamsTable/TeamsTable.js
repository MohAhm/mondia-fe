import React, { useState, useEffect, useCallback } from 'react'
import { getTeams } from '../../api/teams'
import TeamsDataRow from './TeamsDataRow'

export default function TeamsTable() {
  const [teams, setTeams] = useState([])

  const fetch = useCallback(
    () => {
      getTeams()
        .then(setTeams)
    }, []
  )

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <div>
      <h3 className='header'>Teams</h3>
      <TeamsDataRow 
        teams={teams} 
        onRefetch={fetch}
      />
    </div>
  )
}
