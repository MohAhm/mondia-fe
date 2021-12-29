import React from 'react'
import Menu from 'antd/es/menu'
import { Link } from 'react-router-dom'

export default function SiderMenu() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to='/teams'>Teams</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/employees'>Employees</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to='/tasks'>Tasks</Link>
      </Menu.Item>
    </Menu>
  )
}
