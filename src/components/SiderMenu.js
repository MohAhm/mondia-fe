import React from 'react'
import Menu from 'antd/es/menu'
import { Link } from 'react-router-dom'

export default function SiderMenu() {
  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item>
        <Link to='/employees'>Employees</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/teams'>Teams</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/tasks'>Tasks</Link>
      </Menu.Item>
    </Menu>
  )
}
